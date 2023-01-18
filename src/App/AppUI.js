import React from 'react';
import { ToDoCounter } from '../components/ToDoCounter/ToDoCounter'
import { ToDoSearch } from '../components/ToDoSearch/ToDoSearch'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { ToDoItem } from '../components/ToDoItem/ToDoItem'
import { CreateToDoButton } from '../components/CreateToDoButton/CreateToDoButton';

const AppUI = ({
    loading,
    error,
    todosTotal,
    todosCompleted,
    searchValue,
    setSearchValue,
    searchedTodos,
    completedTodo,
    deleteTodo
}) => {
    return (
        <>
            <ToDoCounter
                todosTotal={todosTotal}
                todosCompleted={todosCompleted}
            />
            <ToDoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <ToDoList>
                {error && <p>Tenemos problemas para cargar tus tareas. Intenta nuevamente.</p>}
                {loading && <p>Estamos cargando tus tareas...</p>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primera tarea!</p>}
                {searchedTodos.map((todo) => (
                    <ToDoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completedTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                ))}
            </ToDoList>
            <CreateToDoButton />
        </>
    );
}

export { AppUI };