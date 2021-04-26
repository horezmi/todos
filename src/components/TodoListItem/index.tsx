import React, { useState } from "react";
import "./index.scss";

const TodoListItem = ({ label, id, onDelete }: any) => {
  const [done, setDone] = useState(false);
  const [important, setImportant] = useState(false);

  let spanClasses = "todo-list-item__label";

  if (important) spanClasses += " important";
  if (done) spanClasses += " done";

  const labelClickHandler = () => {
    setDone(() => !done);
  };
  const infoClickHandler = () => {
    setImportant(() => !important);
  };

  return (
    <div className="todo-list-item">
      <span onClick={labelClickHandler} className={spanClasses}>
        {label}
      </span>

      <div className="todo-list-item__btns">
        <button 
          onClick={() => onDelete(id)}
          className="btn btn-danger"
        >
          <i className="fas fa-trash"></i>
        </button>
        <button 
          onClick={infoClickHandler} 
          className="btn btn-info"
        >
          <i className="fas fa-exclamation"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
