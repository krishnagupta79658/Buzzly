import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";
function Logout() {
  return (
    <>
    <hr />
    <div className='h-[10vh]'>
     <div>
       <BiLogOutCircle className='text-5xl text-white hover:bg-slate-700 duration-300 rounded-full cursor-pointer p-2 mt-1 '/>

     </div>
    </div>
    </>
   )
}

export default Logout
