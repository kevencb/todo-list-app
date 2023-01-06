import React from 'react'
import '../../index.css'
import './ToDoSearch.css'

const ToDoSearch = ({ searchValue, setSearchValue }) => {

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
            {searchValue}
        </>
    );
}

export { ToDoSearch };