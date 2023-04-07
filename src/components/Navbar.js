import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='w-full bg-[#1e5b98] h-auto py-3 flex px-3 flex-col justify-start shadow'>
            <div className='text-white text-2xl text-center w-full'>
                Simple Address Book Manager
            </div>


            <div className=' ml-3 flex '>
                <Link to="/add"  className='mr-6 py-1  text-white text-base cursor-pointer hover:underline hover:underline-offset-4'>Add</Link>
                <Link to="/" className='mr-6 py-1 text-white text-base cursor-pointer hover:underline hover:underline-offset-4'>View All</Link>
            </div>
        </div>
    )
}

export default Navbar