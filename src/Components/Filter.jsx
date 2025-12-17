import React from 'react'

const Filter = ({category, setCateogry, cateogories}) => {
  return (
   <section>
    <h2>Category</h2>

    <select value={category} onChange={(e) => setCateogry(e.target.value)} className='border p-2 w-full rounded mb-3'>
        <option value="">All Categories</option>
        {cateogories.map((cat)=> (
            <option key={cat} value={cat}>
                {cat.toUpperCase()}
            </option>
        ))}
    </select>

   </section>
  )
}

export default Filter