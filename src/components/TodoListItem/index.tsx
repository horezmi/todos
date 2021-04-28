import React from "react";
import "./index.scss";

const TodoListItem = ({ label, id, important, done,
                        onDelete, onToggleDone, onToggleImportant }: any) => {
  let spanClasses = "todo-list-item__label";

  if (important) spanClasses += " important";
  if (done) spanClasses += " done";

  return (
    <div className="todo-list-item">
      <span 
        className={spanClasses}
        onClick={() => onToggleDone(id)}
      >
        {label}
      </span>

      <div className="todo-list-item__btns">
        <button 
          className="btn btn-danger"
          onClick={() => onDelete(id)}
        >
          <i className="fas fa-trash"></i>
        </button>
        <button 
          className="btn btn-info"
          onClick={() => onToggleImportant(id)}
        >
          <i className="fas fa-exclamation"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
