import './App.css';
/* Components */
import { ToDoCounter } from './components/ToDoCounter/ToDoCounter'
import { ToDoSearch } from './components/ToDoSearch/ToDoSearch'
import { ToDoList } from './components/ToDoList/ToDoList'
import { ToDoItem } from './components/ToDoItem/ToDoItem'
import { CreateToDoButton } from './components/CreateToDoButton/CreateToDoButton';
import React from 'react';


const todosDefault = [
	{ id: 1, text: "Aprender React", completed: false },
	{ id: 2, text: "Actualizar portafolio", completed: false },
	{ id: 3, text: "Leer dos capítulos de 'El Resplandor'", completed: false },
]

function App() {
	/* Captura de datos ingresados en el buscador para ser enviada al componente*/
	const [searchValue, setSearchValue] = React.useState('')

	/* Cantidad total de tareas y cantidad de tareas terminadas */
	const [todos, setTodos] = React.useState(todosDefault)

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

	/* Cambio del estado de la tarea */
	// const completeTodo = (id) => {
	// 	console.log(`Estamos terminando laaa tarea: ${id}`)
	// 	const todoIndex = todos.findIndex(todo => todo.id === id)
	// 	const newTodos = [...todos]
	// 	newTodos[todoIndex].completed = true
	// 	setTodos(newTodos)
	// }

	const completedTodo = (id) => {
		const updateList = todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed }
			}
			return todo
		})

		setTodos(updateList)
	}

	/* Eliminar tarea */
	const deleteTodo = (id) => {
		const todoIndex = todos.findIndex(todo => todo.id === id)
		const newTodos = [...todos]
		newTodos.splice(id, 1)
		setTodos(newTodos)
	}

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
				{searchedTodos.map((todo) => (
					<ToDoItem
						key={todo.id}
						text={todo.text}
						completed={todo.completed}
						// onComplete={() => {
						// 	completeTodo(todo.id)
						// }
						// }
						// onComplete={() => completeTodo(todo.id)}
						onComplete={() => completedTodo(todo.id)}
						onDelete={() => deleteTodo(todo.id)}
					/>
				))}
			</ToDoList>
			<CreateToDoButton />
		</>
	)
}

export default App;
