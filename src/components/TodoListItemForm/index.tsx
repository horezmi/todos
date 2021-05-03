import React from 'react';

import './index.scss'

const TodoListItemForm = ({ value, onSubmit, onChange } : any) => {
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
                        onChange={onChange}
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