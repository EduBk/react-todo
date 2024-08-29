import './Counter.css'

function Counter ({ total, completed }) {
  return (
    <div className='head'>
      <h1 className='Counter'>Your tasks</h1>
      <p>Completed <span>{completed}</span> to <span>{total}</span></p>
    </div>
  )
}

export { Counter }
