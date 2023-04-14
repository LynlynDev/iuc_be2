import React from "react";
import Style from "../styles/Header.module.css";

const Header = () => {
    return (
         //<div className= {Style.container} >
        //     <h2>Dashboard</h2>
        //     <h2>Welcome Back, Clint</h2>
        // </div>

        <div c className="flex justify-between px-4 pt-4"lassName= {Style.container}>
            <h2>Dashboard</h2>
            <h2>Welcome Back, Clint</h2>
        </div>

        

    )
}

export default Header