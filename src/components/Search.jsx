import { useContext } from 'react'
import { TodoContext } from '../context'
import './Search.css'

function Search () {
  const { search, setSearch } = useContext(TodoContext)
  return (
    <div className='search-container'>
      <input
        className='search'
        placeholder='Search...'
        value={search}
        onChange={(event) => {
          setSearch(event.target.value)
        }}
      />
    </div>
  )
}

export { Search }
