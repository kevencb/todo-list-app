import React from 'react'
import '../../index.css'
import './ToDoList.css'

const ToDoList = (props) => {
    return (
        <section className='todo__list container'>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { ToDoList };