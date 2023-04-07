import React from 'react'
import useSearch from '../hooks/useSearch'

const Filter = () => {

  const { contact, setcontact,search, setsearch } = useSearch();

  const handlechange=(e)=>{
    e.preventDefault();
    let name=e.target.name;
    let value=e.target.value;
    setsearch(values => ({ ...values, [name]: value }));
  }


  return (
    <div className='w-full items-center flex flex-wrap  justify-center border h-auto py-2'>
        <h2 className='text-fix text-xl my-2 px-4'>Filters:</h2>
        <div className='flex items-center mr-3 my-2'>
            <label className='text-base pr-2' >Name:</label>
            <input onChange={handlechange} className='border border-opacity-70 border-slate-500 p-1' type="text" name="name" id="" />
        </div>

        <div className='flex items-center mr-3 my-2'>
            <label className='text-base pr-2' >Contact:</label>
            <input onChange={handlechange} className='border border-opacity-70 border-slate-500 p-1' type="number" name="contact" id="" />
        </div>
    </div>
  )
}

export default Filter