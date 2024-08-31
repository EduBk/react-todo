import './FormTodo.css'

function FormTodo ({ newTask, setNewTask }) {
  return (
    <div className='form-container'>
      <h1 className='FormTodo'>Create new task</h1>
      <div className='input-container'>
        <input required='' placeholder='Task here...' type='text' />
        <button className='invite-btn' type='button'>Create</button>
      </div>
      <img
        className='todo-image'
        src='/img/todo.png'
        alt='todos'
      />
    </div>
  )
}

export { FormTodo }
