import React, { useState } from 'react';

import './index.scss'

const TodoListItemForm = ({ onCreate } : any) => {
    const [value, setValue] = useState("");
    const handleChangeItem = ({ target }: any) => {
        setValue(target.value);
    };
    const onSubmit = (e: any) => {
        e.preventDefault();
        onCreate(value);
        setValue("");
      };
    return (
        <form 
            className="todo-list-item-form"
            onSubmit={onSubmit}    
        >
            <div className="todo-list-item-form__input">
                <div className="input-group">
                    <input 
                        className="form-control-sm"
                        type="text" 
                        value={value}
                        onChange={handleChangeItem}
                    />
                </div>
            </div>
            <button className="todo-list-item-form__btn btn">
                Add
            </button>
        </form>
    );
};

export default TodoListItemForm;