import React from "react";
import { BiTrashAlt, BiEdit } from 'react-icons/bi'


const Table = () =>{
    return(
        <table className="min-w-full table-auto">
            <thead>
                <tr className='bg-gray-300 cursor-pointer'>
                    <th className='px-8 py-2'>
                        <span className='text-gray-700'>Name</span>
                    </th>

                    <th className='px-8 py-2'>
                        <span className='text-gray-700'>email</span>
                    </th>

                    <th className='px-8 py-2'>
                        <span className='text-gray-700'>Job</span>
                    </th>

                    <th className='px-8 py-2'>
                        <span className='text-gray-700'>Status</span>
                    </th>

                    <th className='px-8 py-2'>
                        <span className='text-gray-700'>Action</span>
                    </th>
                </tr>
            </thead>
            <tbody className='bg-gray-200'>
                <tr className='bg-gray-50 text-center'>
                    <td className='xp-16 py-2 items-center'>
                        <img src="#" alt="" />
                        <span className='text-center ml-2 font-semibold'>Sara Adams</span>
                    </td>

                    <td className='xp-16 py-2 items-center'>
                        <span>saraadams@gmail.com</span>
                    </td>

                    <td className='xp-16 py-2 items-center'>
                        <span>Chef de département</span>
                    </td>

                    <td className='xp-16 py-2 items-center'>
                        <button className='cursor'><span className='bg-green-500 text-white px-5 py-1 rounded-lg'>Active</span></button>
                    </td>
                    <td className='xp-16 py-2 flex justify-around'>
                        <button className='cursor'><BiEdit size={25} color={'rgb(34,197,94)'}/></button>
                        <button className='cursor'><BiTrashAlt size={25} color={'rgb(250,63,94)'}/></button>
                    </td>
                    
                </tr>
            </tbody>
        </table>
    )
}

export default Table;