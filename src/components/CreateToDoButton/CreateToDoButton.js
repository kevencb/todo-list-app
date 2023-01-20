import React from 'react'
import '../../index.css'
import './CreateToDoButton.css'

const CreateToDoButton = ({ setOpenModal }) => {

    const addTask = () => {
        setOpenModal(preveState => !preveState)
    }

    return (
        <div className='todo-button'>
            <button onClick={addTask}>+</button>
        </div>
    );
}

export { CreateToDoButton };