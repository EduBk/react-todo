import './Search.css'

function Search ({ search, setSearch }) {
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
