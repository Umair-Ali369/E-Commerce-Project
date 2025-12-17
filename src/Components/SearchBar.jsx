import React from 'react'

const SearchBar = ({search, setSearch}) => {
  return (
    <div className='flex items-center justify-center mx-auto max-w-md mt-5'>

        <input 
        type='text'
        placeholder='Serach Products....'
        className='border p-2 rounded w-full bg-gray-200 '
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </div>
  )
}

export default SearchBar