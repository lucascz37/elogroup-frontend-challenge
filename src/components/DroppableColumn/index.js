import React from "react";
import { List, Typography } from "antd";
import { Droppable } from "react-beautiful-dnd";
import DraggableItem from "../DraggableItem";
import "./style.css";

const DroppableColumn = ({ column }) => {
  return (
    <Droppable droppableId={column.id} key={column.id}>
      {(provided) => (
        <div className="column" ref={provided.innerRef}>
          <List
            header={
              <Typography.Title level={2}>{column.text}</Typography.Title>
            }
            className="column-name"
          >
            {column.list.map((item, index) => (
              <DraggableItem item={item} index={index} key={item.id} />
            ))}
            {provided.placeholder}
          </List>
        </div>
      )}
    </Droppable>
  );
};

export default DroppableColumn;
