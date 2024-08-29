import './FormTodo.css'

function FormTodo () {
  return (
    <div className='form-container'>
      <h1 className='FormTodo'>Create new task</h1>
      <p>Task name</p>
      <input type='text' />
      <button>+</button>
      <img
        className='todo-image'
        src='/public/img/todo.png'
        alt='todos'
      />
    </div>
  )
}

export { FormTodo }
