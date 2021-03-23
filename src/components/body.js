import React,{Component,useState} from 'react';
import "../css/tailwindcss.css";
import { FaMapMarkerAlt, FaSearch, FaSistrix } from 'react-icons/fa';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import drain from '../images/drain.jpg';
import nature from '../images/nature.jpg';
import background from '../images/background.gif';
import { BiMap } from "react-icons/bi";

import '../App.css';

function Body(){
    return(
        <>
 <Navbar/>
      <div className="p-2 bck">
      <div className="absolute w-full mr-24 mt-96 z-30">
      <center><div className="container is-widescreen  ">
         <form className=" md:ml-32 md:mr-32 bg-white  pl-6 pt-2 pr-6 rounded-2xl">
            <div className="flex flex-wrap">
             
              <div className="w-full md:w-2/5 pt-1 ">
                <div className="m-1">
                <div className="inline-block"><FaSistrix /></div><div  className="inline-block"><input type="text" className="w-full py-1 px-3 border-none " placeholder="travel agency,hotel...."/></div> 
                </div>
              </div>
              <div className="w-full md:w-2/5">
                <div className="m-1">
              <div className="inline-block"> <BiMap className='inline-block'/></div><div  className="inline-block mb-2"><input type="text" className="w-full inline-block py-1 px-3" placeholder="travel agency,hotel...."/></div> 
                </div>
              </div>
              <div className="w-full md:w-1/5">
                <button className="md:w-8 w-full bg-green-500 text-white font-bold px-2 py-2 rounded-2xl">
               <FaSearch className="inline-block"/>
              </button></div>
            </div>
            </form>

            <div class="grid grid-flow-col grid-cols-4 grid-rows-2 gap-4 mt-3 md:ml-24">
         <div className="bg-black bg-opacity-25 border-solid border-2 border-white text-white  font-bold p-2 rounded-md md:pl-12"><p className="text-sm md:text-md">Travel Agency</p></div>
         <div className="bg-black bg-opacity-25 border-solid border-2 border-white text-white font-bold p-2 rounded-md ">Tour Guides</div>
         <div className="bg-black bg-opacity-25 border-solid border-2 border-white text-white font-bold p-2 rounded-md">Restaurants</div>
         <div className="bg-black bg-opacity-25 border-solid border-2 border-white text-white font-bold p-2 rounded-md">Night Clubs</div>  
         <div className="bg-black bg-opacity-25 border-solid border-2 border-white text-white font-bold p-2 rounded-md pl-12">Travel Agency</div>
         <div className="bg-black bg-opacity-25 border-solid border-2 border-white text-white font-bold p-2 rounded-md ">Tour Guides</div>
         <div className="bg-black bg-opacity-25 border-solid border-2 border-white text-white font-bold p-2 rounded-md">Restaurants</div>
         <div className="bg-black bg-opacity-25 border-solid border-2 border-white text-white font-bold p-2 rounded-md">Night Clubs</div>   
         </div>
        </div>
        </center>
        <div> 
        
        </div>
      
       
		
		</div>

      <ul class="cb-slideshow bck ">
     
	<li>
		<span class="z-30 ">Image 01</span>
	
	</li>
  <li className="">
		<span>Image 01</span>
		<div>
			<h3 className="absolute mt-96 z-30">BOTSWANA</h3>
		</div>
	</li>
  <li>
		<span>Image 01</span>
		<div>
			<h3>BOTSWANA</h3>
		</div>
	</li>
</ul>
      </div>
      <div>
        ujhhhhhhhhhhhh
       
      </div>

        </>
    )
}
        


export default Body;