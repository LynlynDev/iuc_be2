import React from "react";
import AddUserform from "../components/addUserform";
import UpdateUserform from "../components/updateUserform";



const Form = () => {

  const flag=false;

    return(
      <div className='container mx-auto py-5'>
        {flag?<AddUserform />:<UpdateUserform/>}
      </div>
      
    )
   
};

export default Form;
