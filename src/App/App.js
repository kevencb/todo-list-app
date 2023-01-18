import './App.css';
import React from 'react';
import { AppUI } from './AppUI';

// const todosDefault = [
// 	{ id: 1, text: "Aprender React", completed: false },
// 	{ id: 2, text: "Actualizar portafolio", completed: false },
// 	{ id: 3, text: "Leer dos capítulos de 'El Resplandor'", completed: false },
// ]

/* CUSTOM HOOK LOCALSTORAGE*/

function useLocalStorage(itemName, initialValue) {

	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(false)
	const [item, setItem] = React.useState(initialValue)

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName)
				let parsedItem;

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue))
					parsedItem = initialValue
				} else {
					parsedItem = JSON.parse(localStorageItem)
				}
				setItem(parsedItem)
				setLoading(false)
			} catch (error) {
				setError(error)
			}
		}, 2000)
	})

	const savedItem = (newItem) => {
		try {
			const stringifyItem = JSON.stringify(newItem)
			localStorage.setItem(itemName, stringifyItem)
			setItem(newItem)
		} catch (error) {
			setError(error)
		}
	}

	return { item, savedItem, loading }
}

/* FIN CUSTOM HOOK LOCALSTORAGE */

function App() {
	const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])

	/* LOCALSTORAGE */
	// const localStorageTodos = localStorage.getItem('TODOS_V1')
	// let parsedTodos;

	// if (!localStorageTodos) {
	// 	localStorage.setItem('TODOS_V1', JSON.stringify([]))
	// 	parsedTodos = []
	// } else {
	// 	parsedTodos = JSON.parse(localStorageTodos)
	// }

	// const savedTodos = (newTodos) => {
	// 	const stringifyTodos = JSON.stringify(newTodos)
	// 	localStorage.setItem('TODOS_V1', stringifyTodos)
	// 	setTodos(newTodos)
	// }
	/* FIN LOCALSTORAGE */

	/* Captura de datos ingresados en el buscador para ser enviada al componente*/
	const [searchValue, setSearchValue] = React.useState('')

	/* Cantidad total de tareas y cantidad de tareas terminadas */
	// const [item, setTodos] = React.useState(parsedItem)

	const todosCompleted = todos.filter(todo => !!todo.completed).length
	const todosTotal = todos.length

	/* Filtro por tareas*/
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
		// setTodos(updateList)
		saveTodos(updateList) /*localStorage*/
	}

	/* Eliminar tarea */
	const deleteTodo = (id) => {
		const updateList = todos.filter(todo => todo.id !== id)
		// setTodos(updateList)
		saveTodos(updateList)/*localStorage*/
	}

	/* useEffect() */

	// React.useEffect(() => {
	// 	console.log('Hola: useEffect()')
	// }, [])

	/* Fin useEffect()*/

	return (
		<AppUI
			loading={loading}
			error={error}
			todosTotal={todosTotal}
			todosCompleted={todosCompleted}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			searchedTodos={searchedTodos}
			completedTodo={completedTodo}
			deleteTodo={deleteTodo}
		/>
	)
}

export default App;
