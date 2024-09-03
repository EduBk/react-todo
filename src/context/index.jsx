import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/LocalStorage'

const TodoContext = createContext()

function TodoProvider ({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    error,
    loading
  } = useLocalStorage('TODOS_V1', [])
  const [search, setSearch] = React.useState('')
  const completedTodo = todos.filter((todo) => !!todo.completed).length
  const totalTodo = todos.length
  const searchedTodo = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(search.toLowerCase())
  })
  const completeTodo = (text) => {
    const index = todos.findIndex((todo) => todo.text === text)
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    saveTodos(newTodos)
  }
  const addTodo = (newTodo) => {
    const newTodos = [...todos]
    newTodos.push({
      text: newTodo,
      completed: false
    })
    saveTodos(newTodos)
  }
  const [isChecked, setIsChecked] = useState(false)
  const filteredSearchedTodos = searchedTodo.filter((todo) => {
    return todo.completed === isChecked
  })

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodo,
        totalTodo,
        search,
        setSearch,
        completeTodo,
        isChecked,
        setIsChecked,
        addTodo,
        filteredSearchedTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
