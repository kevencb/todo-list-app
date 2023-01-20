import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider(props) {

    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const todosCompleted = todos.filter(todo => !!todo.completed).length
    const todosTotal = todos.length

    let searchedTodos = []
    if (!searchValue.length >= 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText)
        })
    }

    const completedTodo = (id) => {
        const updateList = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })
        saveTodos(updateList)
    }

    const addTodo = (text) => {
        const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1
        const newTodos = [...todos]
        newTodos.push({
            id: lastId + 1,
            text,
            completed: false,
        })
        saveTodos(newTodos)
    }

    const deleteTodo = (id) => {
        const updateList = todos.filter(todo => todo.id !== id)
        saveTodos(updateList)
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            todosTotal,
            todosCompleted,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completedTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }