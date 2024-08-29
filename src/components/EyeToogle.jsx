import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

import './EyeToogle.css'

const EyeToggle = ({ isChecked, setIsChecked }) => {
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
      {isChecked ? <span>Show completed task</span> : <span>Hide completed task</span>}
    </label>
  )
}

export { EyeToggle }
