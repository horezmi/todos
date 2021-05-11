import React, { useState, useContext } from "react";
import Context from "helpers/context";
import useInputValue from "helpers/useInputValue";

import "./index.scss";

const TodoListItem = ({ label, id, important, done }: any) => {
  const {
    handleDeleteItem,
    onToggleImportant,
    onToggleDone,
    handleEditItem,
  } = useContext(Context);

  const [onEdit, setOnEdit] = useState(false);
  const { bindValue, clearValue } = useInputValue(label);

  const value = bindValue.value.trim();
  
  const onSubmit = (event: any) => {
    event.preventDefault();
    if (value) {
      handleEditItem(value, id);
      clearValue();
      setOnEdit(false);
    }
  };

  let spanClasses = "todo-list-item__label-span";
  if (important) spanClasses += " important";
  if (done) spanClasses += " done";

  const onClick = () => {
    setOnEdit(() => !onEdit);
  };
  const showItem = () => {
    return !onEdit ? (
      <div className="todo-list-item__label-wrap">
        <span className={spanClasses} onClick={() => onToggleDone(id)}>
          {label}
        </span>
      </div>
    ) : (
      <form onSubmit={onSubmit}>
        <input className="form-control-sm" type="text" {...bindValue} autoFocus />
      </form>
    );
  };

  return (
    <div className="todo-list-item">
      {showItem()}

      <div className="todo-list-item__btns">
        <button className="btn btn-success" onClick={onClick}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="btn btn-danger" onClick={() => handleDeleteItem(id)}>
          <i className="fas fa-trash"></i>
        </button>
        <button className="btn btn-info" onClick={() => onToggleImportant(id)}>
          <i className="fas fa-exclamation"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
