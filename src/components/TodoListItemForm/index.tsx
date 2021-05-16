import React from 'react';
import useInputValue from 'helpers/Hooks/useInputValue';
import { TodoListItemFormPropsType } from 'types/interfaces';

import './index.scss';

const TodoListItemForm = ({ onCreate }: TodoListItemFormPropsType) => {
  const { bindValue, clearValue } = useInputValue('');

  const onSubmit = (event: any) => {
    event.preventDefault();
    const { value } = bindValue;
    value.trim();
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
