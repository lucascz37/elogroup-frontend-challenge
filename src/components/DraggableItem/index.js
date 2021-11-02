import { List, Typography } from "antd";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./style.css";

const DraggableItem = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} key={item.id} index={index}>
      {(provided) => {
        return (
          <div ref={provided.innerRef}>
            <List.Item
              className="list-item"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Typography.Text>{item.text}</Typography.Text>
            </List.Item>
          </div>
        );
      }}
    </Draggable>
  );
};

export default DraggableItem;
