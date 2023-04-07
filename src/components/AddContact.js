import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

import useSearch from '../hooks/useSearch';

const AddContact = () => {

    const navigate = useNavigate();

    const { contact, setcontact } = useSearch();

    const [value, setvalue] = useState({ name: "", contact: "" });

    const handlechange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setvalue(values => ({ ...values, [name]: value }))
    }

    const addcontact = (e) => {
        e.preventDefault();

        let same = 0;
        for (let i = 0; i < contact.length; i++) {
            if (value.contact === contact[i].contact) {
                same = same + 1;
            }
        }

        if (same == 0) {
            setcontact(val => [...val, value]);
            window.alert("Entry added successfully")
            navigate('/');
        }
        else {
            window.alert("This contact number already exists.")
        }

        // console.log(contact)
    }



    return (
        <div className='min-w-fit m-4 flex justify-center items-center flex-col'>
            <h2 className='font-semibold text-3xl text-blue-900 mb-4'>Add Contact:</h2>

            <form onSubmit={ addcontact } className='relative z-10 h-auto px-5 py-5 border rounded-lg shadow-lg md:w-3/4 lg:w-3/5 border-slate-300'  >


                <div className='flex items-center mb-4'>
                    <p className=' mr-2 text-xl text-gray-900' htmlFor="">Name:</p>
                    <input onChange={ handlechange } name="name" className='w-full px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder='Name' required />
                </div>

                <div className='flex items-center mb-4'>
                    <p className=' mr-2 text-xl text-gray-900' htmlFor="">Contact:</p>
                    <input onChange={ handlechange } name="contact" className='w-full px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="number" placeholder='Contact' required />
                </div>


                <div className='flex items-center justify-start'>
                    <button className="rounded-sm ani-button">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default AddContact