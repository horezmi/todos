import React from 'react'
import './index.scss'


const TodoListItem = ({ label, important } : any) => {
    const spanStyle = {
        color: important ? 'tomato' : 'black'
    }
    
    return (
        <div className="todo-list-item">
            <span 
                style={spanStyle}>{ label }
            </span>

            <div className="todo-list-item__btns">
                <button className="btn btn-danger">
                    <i className="fas fa-trash"></i>
                </button>
                <button className="btn btn-info">
                    <i className="fas fa-info"></i>
                </button>
            </div>
        </div>
    )
}

export default TodoListItem;
