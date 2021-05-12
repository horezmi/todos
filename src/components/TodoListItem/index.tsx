import React, { useState, useContext } from "react";
import Context from "helpers/context";
import classNames from "classnames";
import useInputValue from "helpers/useInputValue";

import "./index.scss";

const TodoListItem = ({ label, id, important, done }: any) => {
  const { handleDeleteItem, onToggleImportant, onToggleDone, handleEditItem } =
    useContext(Context);

  const [isEdit, setIsEdit] = useState(false);
  const { bindValue, clearValue } = useInputValue(label);

  const value = bindValue.value.trim();

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (value) {
      handleEditItem(value, id);
      clearValue();
      setIsEdit(false);
    }
  };

  const spanClasses = classNames({
    "todo-list-item__label-span": true,
    important,
    done,
  });

  const onEdit = () => setIsEdit(() => !isEdit);
  const onDelete = (id: string) => () => handleDeleteItem(id);
  const onDone = (id: string) => () => onToggleDone(id);
  const onImportant = (id: string) => () => onToggleImportant(id);

  const showItem = () => {
    return !isEdit ? (
      <div className="todo-list-item__label-wrap">
        <span className={spanClasses} onClick={onDone(id)}>
          {label}
        </span>
      </div>
    ) : (
      <form onSubmit={onSubmit}>
        <input
          className="form-control-sm"
          type="text"
          {...bindValue}
          autoFocus
        />
      </form>
    );
  };

  return (
    <div className="todo-list-item">
      {showItem()}
      <div className="todo-list-item__btns">
        <button className="btn btn-success" onClick={onEdit}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="btn btn-danger" onClick={onDelete(id)}>
          <i className="fas fa-trash"></i>
        </button>
        <button className="btn btn-info" onClick={onImportant(id)}>
          <i className="fas fa-exclamation"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
