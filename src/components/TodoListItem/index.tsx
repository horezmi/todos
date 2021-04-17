import React, { useState } from "react";
import "./index.scss";

const TodoListItem = ({ label}: any) => {
  const [done, setDone] = useState(false);
  const [important, setImportant] = useState(false);
  
  let spanClasses = "todo-list-item__label";

  if (important) spanClasses += " important";
  if (done) spanClasses += " done";

  const labelClickHandler = () => {
      setDone(!done);
  };
  const infoClickHandler = () => {
    setImportant(!important);
};

  return (
    <div className="todo-list-item">
      <span onClick={labelClickHandler} className={spanClasses}>
        {label}
      </span>

      <div className="todo-list-item__btns">
        <button className="btn btn-danger">
          <i className="fas fa-trash"></i>
        </button>
        <button onClick={infoClickHandler} className="btn btn-info">
          <i className="fas fa-info"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
