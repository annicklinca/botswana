import React,{Component,useState} from 'react';
import "../css/tailwindcss.css";
import { FaAlignJustify, FaAngleDown } from 'react-icons/fa';

function Navbar(){
    return(
        <>
        <div className="bg-white fixed w-full z-50 p-8 shadow-md">
            <div className="flex flex-wrap">
                <div className="w-1/5 mt-4">
            <h1 className="font-bold italic text-3xl text-green-500 inline-block">BT<span className="text-black">SW</span>
            <span className="text-yellow-500">..</span></h1>
                </div>

                <div className=" hidden md:block lg:block w-4/5">
                 <div className="flex">
                     <div className="w-3/5 mt-4"> 
                <div className="inline-block pl-12">
                <ul>
                    <li className="inline-block pl-12 font-bold"><a href="" className="text-black">Services by Category
                     <FaAngleDown className="inline-block" /></a></li>
                    <li className="inline-block pl-12 font-bold"><a href="" className="text-black">Aboutus</a></li>
                    <li className="inline-block pl-4 font-bold"><a href="" className="text-black">Get the App</a></li>
                </ul>
            </div></div>  
               
                <div className="w-2/5">
                <div className="inline-block  float-right">
            <ul>
                    <li className="inline-block pl-12 pr-12 font-bold text-lg hover:text-yellow-500"><a href="" className="text-black">Login</a></li>
                    <li className="inline-block pl-3 font-bold bg-green-500 text-white rounded-md h-12 w-24 pt-3 center hover:bg-yellow-500"><a href="" className="text-white">Sign Up</a></li>
                </ul>
            </div>
                </div>
                </div>
            </div>



<div className="block md:hidden lg:hidden w-4/5">
<i><FaAlignJustify className="ml-64 mt-4"/></i>
</div>


           
            </div>
         
      </div>
        </>
    )
}


export default Navbar;