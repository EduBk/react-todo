import { useContext } from 'react'
import { TodoContext } from '../context'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

import './EyeToogle.css'

const EyeToggle = () => {
  const {
    isChecked,
    setIsChecked
  } = useContext(TodoContext)
  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState)
  }
  return (
    <label htmlFor='view' className='eye-label'>
      <input
        type='checkbox'
        id='view'
        className='eye-checkbox'
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isChecked ? <FaRegEye /> : <FaRegEyeSlash />}
      {isChecked ? <span>Hide completed task</span> : <span>Show completed task</span>}
    </label>
  )
}

export { EyeToggle }
