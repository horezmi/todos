import React, { useContext } from "react";
import Context from "../../helpers/context";

import "./index.scss";

const TodoListItem = ({ label, id, important, done }: any) => {
  const { handleDeleteItem, 
          onToggleImportant,  
          onToggleDone } = useContext(Context);
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
          onClick={() => handleDeleteItem(id)}
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
