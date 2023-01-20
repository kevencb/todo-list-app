import React from 'react'
import '../../index.css'
import { TodoContext } from '../../TodoContext/TodoContext'
import './ToDoSearch.css'

const ToDoSearch = () => {

    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    const searchTask = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <>
            <div className='todo_search container'>
                <input
                    placeholder='Busca una tarea o actividad'
                    onChange={searchTask}
                    value={searchValue}
                />
            </div>
        </>
    );
}

export { ToDoSearch };