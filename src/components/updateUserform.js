import React from "react";
import { useReducer } from "react";
import { BiBrush, BiPlus } from "react-icons/bi";
import Success  from "./success";
import Bug from './bug';

const formReducer = (state,event)=> {
    return{
        ...state,
        [event.target.name]:event.target.value
    }
}

const UpdateUserform = () => {
    const [formData, setFormData] = useReducer(formReducer,{})

    const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.keys(formData).length==0) return console.log("Don't have Form Data")
    console.log(formData)
    }

    if(Object.keys(formData).length>0)return <Bug message={"Error"}></Bug>


  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="firstname" onChange={setFormData}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="FirstName"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="lastname" onChange={setFormData}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="LastName"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="email" onChange={setFormData}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Email"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="job" onChange={setFormData}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Job"
        />
      </div>
      {/* <div className="input-type">
        <input
          type="text"
          name="status"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Status"
        />
      </div> */}
      
      {/* <div className="input-type">
        <input
          type="date"
          name="date"
          className="border px-5 py-3 focus:outline-none rounded-md"
          placeholder="Date"
        />
      </div> */}

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio" onChange={setFormData}
            value="Active"
            id="radioDefault1"
            name="status" 
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none
            transition duration-200 mt-1 align-top bg-no-repeat bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block tet-gray-8">
            Active
          </label>
        </div>

        <div className="form-check">
          <input
            type="radio" onChange={setFormData}
            value="Inactive"
            id="radioDefault2"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none
            transition duration-200 mt-1 align-top bg-no-repeat bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2" className="inline-block tet-gray-8">
            Inactive
          </label>
        </div>
      </div>

      <button className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Update <span className="px-1"><BiBrush size={22}/></span>
        </button>
    </form>
  );
};

export default UpdateUserform;
