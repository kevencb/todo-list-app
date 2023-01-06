import React from 'react'
import '../../index.css'
import './ToDoItem.css'

const ToDoItem = ({ text, completed, onComplete, onDelete }) => {

    return (
        <li className='todo__item'>
            <p className='todo__item--text'>{text}</p>
            <div className="todo__actions">
                <span className="todo__actions--check" onClick={onComplete}>
                    {completed
                        ?
                        <i className="complete bi bi-check-square disabled"></i>
                        :
                        <i className="no-complete bi bi-square"></i>
                    }
                </span>
                <span className="todo__actions--delete" onClick={onDelete}>
                    <i className="bi bi-trash3"></i>
                </span>
            </div>
        </li >
    );
}

export { ToDoItem };