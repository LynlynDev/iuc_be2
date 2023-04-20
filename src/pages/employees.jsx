import React from "react";
import { data } from "../../data/data";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";

const employees = () => {
  return (
    <div className="bg-gray-100 h-screen -ml-20">
      <div className="flex justify-between p-4 ">
        <h2 className="flex justify-center pb-3 left-4 m-auto font-bold text-3xl">List of Employees</h2>
        <h2>Welcome Back, CLint</h2>
      </div>
      <div className="p-10">
        <div className="w-full p-14 border rounded-lg bg-slate-300 overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm:text-left text-right">Email</span>
            <span className="hidden md:grid">Poste</span>
            {/* <span className='hidden md:grid'>Percentage</span>*/}
            <span className="hidden sm:grid">Action</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li key={id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4
                sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              
                <div className='flex'>
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <BsPersonFill className="text-purple-700" />
                  </div>
                  <p className='pl-4'>{order.name.first +' '+ order.name.last}</p>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>{order.email}</p>
                <p className='hidden md:flex'>{order.poste}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <BsThreeDotsVertical />
                </div>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default employees;
