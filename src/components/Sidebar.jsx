import Link from "next/link";
import React from "react";
import { RxDashboard, RxSketchLogo } from "react-icons/rx"
import { BsPersonSquare, BsFillPersonVcardFill} from 'react-icons/bs'
import { FiCheckSquare } from 'react-icons/fi';
import { HiOutlineDocumentReport } from 'react-icons/hi'



const Sidebar = ({ children }) => {
    return (
      
        <div className="flex sm:flex-row ">
              
            <div className="w-full sm:w-64 bg-gray-200 flex-col justify-between">
            
                <div className="flex flex-col items-center mt-20 h-16">
                    <Link href='/'>
                        <div className="bg-purple-800 text-white mb-5 p-3 rounded-lg  flex items-center justify-center ">
                            <RxSketchLogo size={20} />
                        </div>
                    </Link>
                    <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
                    <Link href='/'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg ">
                            <RxDashboard size={20} />
                        </div>
                    </Link>
                    <div className="text-flex-col rounded-lg inline-block">
                    <h4 className="flex ">Company</h4>
                    </div>
                        
                    <Link href='/employees'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer flex gap-2 items-center mt-20 my-12 p-3 rounded-lg ">
                            <BsPersonSquare size={20} /> Employees
                        </div>
                    </Link>

                    <Link href='/orders'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer flex gap-2 items-center  my-2 p-3 rounded-lg ">
                            <FiCheckSquare size={25} /> ScoreCard

                        </div>
                    </Link>

                    <Link href='/'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer flex gap-2 items-center my-4 p-3 mt-10 rounded-lg ">
                            <HiOutlineDocumentReport size={25} /> Reports
                        </div>
                    </Link>
                </div>
            
            
            </div> 
            <main className="ml-20 w-full">{children}</main>
        </div>
        
    )
}

export default Sidebar