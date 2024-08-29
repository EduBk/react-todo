import React, { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter'
import { Search } from './components/Search'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CrerateTodo } from './components/CreateTodo'
import { EyeToggle } from './components/EyeToogle'
import { FormTodo } from './components/FormTodo'
import { useLocalStorage } from './hooks/LocalStorage'

export function App () {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [search, setSearch] = React.useState('')
  const completedTodo = todos.filter(todo => !!todo.completed).length
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
  const [isChecked, setIsChecked] = useState(false)
  const filteredSearchedTodos = searchedTodo.filter((todo) => {
    return todo.completed === isChecked
  })

  console.log(isChecked)
  return (
    <>
      <div className='form-todo'>
        <FormTodo />
      </div>
      <div className='todo-area'>
        <Counter total={totalTodo} completed={completedTodo} />
        <Search
          search={search}
          setSearch={setSearch}
        />
        <EyeToggle
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <TodoList>
          {filteredSearchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
            />
          ))}
        </TodoList>
      </div>

      <CrerateTodo />
    </>
  )
}
