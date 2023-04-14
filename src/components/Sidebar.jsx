import Link from "next/link";
import React from "react";

const Sidebar = ({children}) => {
    return (
        <div className="flex">
            <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex
             flex-col justify-between">
                <div className="flex flex-col items-center">
                    <Link href='/'>
                    <div className="ng-purple-800 text-white p-3 rounded-lg inline-block">
                        <RxSketchLogo size={20} />
                    </div>
                    </Link>
                    <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
                    <Link href='/'>
                        
                    </Link>

                </div>
             </div>
        
        <main>{children}</main>
        </div> 
    )
}

export default Sidebar