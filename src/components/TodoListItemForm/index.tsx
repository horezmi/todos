import React from "react";
import useInputValue from "helpers/useInputValue";

import "./index.scss";

const TodoListItemForm = ({ onCreate }: any) => {
  const { bindValue, clearValue } = useInputValue("");

  const value = bindValue.value.trim();

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (value) {
      onCreate(value);
      clearValue();
    }
  };

  return (
    <form className="todo-list-item-form" onSubmit={onSubmit}>
      <div className="todo-list-item-form__input">
        <div className="input-group">
          <input
            className="form-control-sm"
            type="text"
            {...bindValue}
            placeholder="Task name"
          />
        </div>
      </div>
      <button className="todo-list-item-form__btn btn">Add</button>
    </form>
  );
};

export default TodoListItemForm;
