import React, { useEffect, useState } from 'react'
import Filter from './Filter'

import { Link } from "react-router-dom";
import useSearch from '../hooks/useSearch';

const Table = () => {

  const { contact, setcontact, search, setsearch } = useSearch();

  const [temp, settemp] = useState("");

  const del = (ele) => {
    // console.log(index)

    setcontact(
      contact.filter((e) => {
        return e.contact !== ele.contact;
      })
    );

  }

  useEffect(() => {

    let a = contact.sort(function (a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    settemp(a);
  }, [contact]);



  return (
    <>
      <Filter />

      <div className='w-full'>
        <div className="relative overflow-x-auto scrollbar-hide w-full">
          <table className=" m-1 mx-auto text-sm text-left text-gray-500 border shadow">
            <thead className="text-white uppercase border-b border-gray-300 bg-fix">
              <tr className='text-[16px] '>
                <th scope="col" className="w-[32px] text-center border px-3 py-3">
                  No.
                </th>
                <th scope="col" className="w- text-center border px-32 py-3">
                  Name
                </th>
                <th scope="col" className="text-center border px-6 py-3">
                  Contact
                </th>
                <th scope="col" className="text-center border px-6 py-3">
                  Edit
                </th>
                <th scope="col" className="text-center border px-6 py-3">
                  Delete
                </th>


              </tr>
            </thead>
            <tbody className=''>

              {
                temp.length == 0
                  ? <tr className="bg-white hover:bg-gray-50 text-center">
                    <td colSpan={ 5 } className='border py-2 text-base font-medium text-fix'>
                      No contacts found
                    </td>
                  </tr>
                  : temp
                    .filter((val) => {
                      return search.name.toLowerCase() === ""
                        ? val
                        : val.name.toLowerCase().includes(search.name.toLowerCase())
                    })
                    .filter((val) => {
                      return search.contact.toLowerCase() === ""
                        ? val
                        : val.contact.toLowerCase().includes(search.contact.toLowerCase())
                    })
                    .map((element, index) =>
                      <tr className="bg-white hover:bg-gray-50 text-center">
                        <td className='border py-2 text-base font-medium text-fix'>
                          <span className='text-slate-500'>{ index + 1 }</span>
                        </td>


                        <td className='px-1 border text-base font-medium text-fix '>
                          <span className='text-slate-500'>{ element.name }</span>
                        </td>


                        <td className=' text-base border font-medium text-fix px-4'>
                          <span className='text-slate-500'>+91 { element.contact }</span>
                        </td>


                        <td className=' text-base border font-medium text-fix'>
                          <Link to="/edit" state={ { element } } className='text-slate-500 hover:underline underline-offset-2 cursor-pointer'>Edit</Link>
                        </td>


                        <td className=' text-base border font-medium text-fix'>
                          <span onClick={ () => del(element) } className='text-red-600 hover:underline underline-offset-2 cursor-pointer'>Delete</span>
                        </td>
                      </tr>
                    )
              }

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Table