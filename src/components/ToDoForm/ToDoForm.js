import React, { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext/TodoContext';

const ToDoForm = () => {
    const [newTodoValue, setNewTodoValue] = useState('')
    const { addTodo } = React.useContext(TodoContext)

    const onCancel = () => {
        alert('Cancel')
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }

    const submitTodo = (e) => {
        e.preventDefault()
        addTodo(newTodoValue)
    }

    return (
        <>
            <form onSubmit={submitTodo}>
                <h2>Agrega tu tarea...</h2>
                <textarea
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder='Agrega tu nueva tarea...'
                />
                <div className='content__button'>
                    <button onClick={onCancel} type="button">Cancelar</button>
                    <button type="submit">Añadir</button>
                </div>
            </form>
        </>
    );
}

export { ToDoForm };