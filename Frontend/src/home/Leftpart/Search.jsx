import React from 'react'
import { FaSearch } from "react-icons/fa";
function Search() {
  return (
   <div className='h-[10vh]'>
     <div className='px-4 py-6'>
      <form action="">
      <div className='flex space-x-3'>
          <label className="input w-[80%]">
  
   <input type="search" required placeholder="Search" />
</label>
 <button>
    <FaSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300 '/>
 </button>
      </div>
      </form>
    </div> 
   </div>
  )
}

export default Search
