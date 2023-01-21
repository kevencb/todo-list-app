import React, { useContext } from 'react'
import '../../index.css'
import './ToDoCounter.css'
import { TodoContext } from '../../TodoContext/TodoContext'

const ToDoCounter = () => {
    const { todosTotal, todosCompleted } = useContext(TodoContext)
    const date = new Date()
    const dateActual = date.toDateString();
    return (
        <header className='header container' >
            <nav className='menu'>
                <i className="bi bi-list"></i>
            </nav>
            <div className='header__info'>
                <h2 className='header__hello'>¡Hola!</h2>
                <h2 className='header__name-user'>Keven CB</h2>
                {/* <h3 className='header__date'><span>Miércoles</span>{dateActual}</h3> */}
                <h3 className='header__date'>{dateActual}</h3>
            </div>
            {/* <ToDoSearch /> */}
            <div className='tasks' >
                <div className='tasks__created'>
                    <i className="bi bi-list-task"></i>
                    <h4 className='task__number'>{todosTotal}</h4>
                    <h5 className='task__text'>Tareas<br />Creadas</h5>
                </div>
                <div className='tasks__completed'>
                    <i className="bi bi-list-check"></i>
                    <h4 className='task__number'>{todosCompleted}</h4>
                    <h5 className='task__text'>Tareas<br />Completadas</h5>
                </div>
            </div >
        </header>
    );
}

export { ToDoCounter };