import React from 'react';

import './index.scss'

const TodoListItemForm = ({ value, onClick, onChange } : any) => {
    return (
        <div className="todo-list-item-form">
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
            <button 
                className="todo-list-item-form__btn btn"
                onClick={onClick}
            >
                Add
            </button>
        </div>
    );
};

export default TodoListItemForm;