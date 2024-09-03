import React from 'react'
import './App.css'
import { Counter } from './components/Counter'
import { Search } from './components/Search'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { EyeToggle } from './components/EyeToogle'
import { FormTodo } from './components/FormTodo'
import { Loading } from './components/Loading'
import { Error } from './components/Error'
import { EmptyLoad } from './components/EmptyLoad'
import { TodoContext, TodoProvider } from './context'

export function App () {
  return (
    <>
      <TodoProvider>
        <div className='form-todo'>
          <FormTodo />
        </div>
        <div className='todo-area'>
          <Counter />
          <Search />
          <EyeToggle />

          <TodoContext.Consumer>
            {({ loading, error, completeTodo, filteredSearchedTodos }) => (
              <TodoList>
                {loading && <Loading />}
                {error && <Error />}
                {!loading && filteredSearchedTodos.length === 0 && (
                  <EmptyLoad />
                )}
                {filteredSearchedTodos.map((todo) => (
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                  />
                ))}
              </TodoList>
            )}
          </TodoContext.Consumer>
        </div>
      </TodoProvider>
    </>
  )
}
