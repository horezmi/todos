import React, { useState } from "react";

import "./index.scss";

const TodoListItemForm = ({ onCreate }: any) => {
  const useInputValue = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);

    return {
        bindValue: {
            value,
            onChange: ({ target } : any ) => setValue(target.value),
        },
        clearValue: () => setValue(''),
        takeValue: () => value,
    }
  };
  const {bindValue, clearValue, takeValue} = useInputValue('');
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (takeValue().trim())
    {
        onCreate(takeValue());
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
          />
        </div>
      </div>
      <button className="todo-list-item-form__btn btn">Add</button>
    </form>
  );
};

export default TodoListItemForm;
