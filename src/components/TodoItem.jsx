import './TodoItem.css'

function TodoItem (props) {
  return (
    <li className={`list ${props.completed && 'list-active'}`}>
      <span
        onClick={props.onComplete}
        className={`Icon Icon-check ${props.completed && 'Icon-check-active'}`}
      />
      <p className={`text-item ${props.completed && 'text-item-completed'}`}>{props.text}</p>
    </li>
  )
}

export { TodoItem }
