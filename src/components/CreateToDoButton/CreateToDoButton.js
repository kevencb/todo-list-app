import React from 'react'
import '../../index.css'
import './CreateToDoButton.css'

const CreateToDoButton = () => {

    const addTask = () => {
        alert('Diste Click')
    }

    return (
        <div className='todo-button'>
            <button onClick={addTask}>+</button>
        </div>
    );
}

export { CreateToDoButton };