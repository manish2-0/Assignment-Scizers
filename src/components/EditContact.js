import React from 'react'
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import useSearch from '../hooks/useSearch';

const EditContact = () => {

  const navigate = useNavigate();

  const { contact, setcontact } = useSearch();

  const location = useLocation();
  const { element } = location.state;

  const [inputs, setinputs] = useState(element);

  function handlechange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setinputs(values => ({ ...values, [name]: value }))
  }

  const submitentry = (e) => {
    e.preventDefault();

    const newState = contact.map((obj) => {

      if (obj.contact === element.contact) {


        for (let i = 0; i < contact.length; i++) {
          if (inputs.contact === contact[i].contact) {
            return inputs;
          }
          else {
            return obj;
          }
        }
      }
    });


    setcontact(newState);
    window.alert("Entry edited successfully");
    navigate("/");



  }



  return (
    <div className='min-w-fit m-4 flex justify-center items-center flex-col'>
      <h2 className='font-semibold text-3xl text-blue-900 mb-4'>Edit Contact:</h2>

      <form onSubmit={ submitentry } className='relative z-10 h-auto px-5 py-5 border rounded-lg shadow-lg md:w-3/4 lg:w-3/5 border-slate-300'  >


        <div className='flex items-center mb-4'>
          <p className=' mr-2 text-xl text-gray-900' htmlFor="">Name:</p>
          <input defaultValue={ inputs.name } onChange={ handlechange } name="name" className='w-full px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder='Name' required />
        </div>

        <div className='flex items-center mb-4'>
          <p className=' mr-2 text-xl text-gray-900' htmlFor="">Contact:</p>
          <input readOnly="readonly" disabled="disabled" defaultValue={ inputs.contact } onChange={ handlechange } name="contact" className='w-full px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="number" placeholder='Contact' required />
        </div>


        <div className='flex items-center justify-start'>
          <button className="rounded-sm ani-button">Submit</button>
        </div>
      </form>

    </div>
  )
}

export default EditContact