import { useEffect, useState } from "react";
import Header from "../../components/Header";
import DroppableColumn from "../../components/DroppableColumn";
import { DragDropContext } from "react-beautiful-dnd";
import { Button } from "antd";
import "./style.css";
import { useHistory } from "react-router";
import { getLeads, updateLeads } from "../../service/leadService";

const Home = () => {
  const history = useHistory();

  const [columns, setColumns] = useState(getLeads());

  useEffect(() => {
    updateLeads(columns);
  }, [columns]);

  function onDragEnd({ source, destination }) {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter((_, idx) => idx !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        text: start.text,
        list: newList,
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter((_, idx) => idx !== source.index);

      // Create a new start column
      const newStartCol = {
        id: start.id,
        text: start.text,
        list: newStartList,
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // Create a new end column
      const newEndCol = {
        id: end.id,
        text: end.text,
        list: newEndList,
      };

      // Update the state
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  }

  function newLead() {
    history.push("/lead");
  }

  return (
    <div className="container">
      <Header label="Sair" />
      <div className="leads-container">
        <Button type="primary" onClick={newLead}>
          Novo Lead
        </Button>
        <div className="draggable-container">
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.values(columns).map((column) => {
              return <DroppableColumn key={column.id} column={column} />;
            })}
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default Home;
