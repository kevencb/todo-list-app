import React, { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext/TodoContext';
import './ToDoForm.css'

const ToDoForm = () => {
    const [newTodoValue, setNewTodoValue] = useState('')
    const { addTodo, setOpenModal } = useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }

    const submitTodo = (e) => {
        e.preventDefault()
        if (newTodoValue === "") {
            return
        }
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return (
        <>
            <form onSubmit={submitTodo}>
                <i className="bi bi-calendar-range"></i>
                <h2>¡Genial, agenda tu día!<br /><span>Vamos a crear una tarea.</span></h2>
                <textarea
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder='Agrega tu nueva tarea...'
                />
                <div className='buttons__content'>
                    <button onClick={onCancel} type="button">Cancelar</button>
                    <button type="submit">Añadir</button>
                </div>
            </form>
        </>
    );
}

export { ToDoForm };