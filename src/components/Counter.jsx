import { useContext } from 'react'
import './Counter.css'
import { TodoContext } from '../context'

function Counter () {
  const {
    totalTodo,
    completedTodo
  } = useContext(TodoContext)
  return (
    <div className='head'>
      <h1 className='Counter'>Your tasks</h1>
      <p>Completed <span>{completedTodo}</span> to <span>{totalTodo}</span></p>
    </div>
  )
}

export { Counter }
