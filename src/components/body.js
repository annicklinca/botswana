import React,{Component,useState} from 'react';
import "../css/tailwindcss.css";
import { FaMapMarkerAlt, FaSearch, FaSistrix } from 'react-icons/fa';
import Navbar1 from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundSlider from 'react-background-slider';
import { Carousel } from 'react-bootstrap';
import SmallcardSlider from './smallcardslider.js';
import Homecarousel from './Homecarousel.js';
import { BiMap } from "react-icons/bi";
// import Translator from './Translator';
import image1 from '../images/drain.jpg';
import image2 from '../images/elephant.jpg';
import image3 from '../images/nature.jpg';
import image4 from '../images/background.gif';
import Footer from './Footer.js';

function Body(){
    return(
<>
 <Navbar1/>
 <div class="container">
 <BackgroundSlider
  images={[image1, image2, image3, image4]}
  duration={10} transition={2}
   />
      <center><div className="container is-widescreen  mt-32">
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
 </div>
<div class="bg-white mt-16">
<SmallcardSlider/>
</div>
<h1 class="text-blue-500 text-bold text-xl my-4 text-center">Featured businesses</h1>
<div class="  my-2 mx-4"><Homecarousel/></div>
<Footer/>
 </>
    )
}
        


export default Body;