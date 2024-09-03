import './FormTodo.css'
import { useContext, useState } from 'react'
import { TodoContext } from '../context/index'

function FormTodo () {
  const { addTodo } = useContext(TodoContext)
  const [newTodo, setnewTodo] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodo)
    setnewTodo('')
  }
  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <h1 className='FormTodo'>Create new task</h1>
      <div className='input-container'>
        <textarea
          placeholder='Task here...'
          value={newTodo}
          onChange={(event) => {
            setnewTodo(event.target.value)
          }}
        />
        <button className='invite-btn' type='submit'>
          Create
        </button>
      </div>
      <img className='todo-image' src='/img/todo.png' alt='todos' />
    </form>
  )
}

export { FormTodo }
