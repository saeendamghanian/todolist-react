import React from "react";

const Item = props => {
  const { id, title } = props.task;
  return (
    <div>
      <input type="checkbox" onChange={() => props.toggleComplete(id)} />
      <span>
        {props.task.id} - {props.task.title}
      </span>
      <button>delete</button>
    </div>
  );
};

export default Item;
