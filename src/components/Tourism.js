import React,{useState,useHistory} from 'react';
import "../css/tailwindcss.css";
import "../css/tourism.css";
import Navbar from "./navbar";
import Footer from "./Footer.js";
function Tourism() {

    return(
        <>
<Navbar/>
<div className="tourism" style={{height:"400px"}}>
            <div className=" bg-black bg-opacity-25 ">

<h1 className="py-12 pt-48 font-bold text-xl text-center text-white md:text-4xl">Explore Beautiful Hotels in Botswana</h1>
<div className="flex flex-wrap ">
    <div className="p-4 mt-8 ml-10 md:w-1/2 md:ml-0 md:p-0">
     <form className="form-group">
     {/* <select  className="px-12 py-3 font-bold text-white bg-blue-500 rounded cursor-pointer float-center md:float-right md:px-28 text-md md:text-xl hover:bg-blue-900">
     <option>select location</option>
         <option>Gabarone</option>
         <option>Kasane</option>
         <option>FrancisTown</option>
       </select> */}
       </form>
    </div>
    
</div>
            </div>

        </div>
<div class="mx-3 mt-2">
<h5 className=" p-2 pt-4 font-bold">Best Hotels and Lodge</h5>
		<div class="row">
 <div class="col-md-3 ">
<div class="card mb-3 shadow-md">
     <img class="card-img-top"
      src="image/hilton.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">Hilton Garden Inn</h4>
      <p class="card-text">A modern hotel in Gaborone, offering business and leisure travelers all the modern amenities that they expect from an international Hotel brand<br></br>offering include free wifi, a pool, and an on-site restaurant with best view.</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div>
 <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/travelodge.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">Travelodge Hotel</h4>
      <p class="card-text">It's located in Gaborone and it has Relaxed rooms in a streamlined hotel with a restaurant/bar & an outdoor pool, plus event space.<br></br><br></br><br></br></p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div>
 <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/protea.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">Protea Hotel by Marriott Gaborone Masa Square</h4>
      <p class="card-text">  Free Wi-Fi. Contactless Service. Mobile Service Requests. Air Conditioning. Concierge. Flexible Cancellation.<br></br></p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div>
 <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/marina.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">Ahh Chobe Marina Lodge</h4>
      <p class="card-text font-bold">Set in thatched buildings on the bank of the Chobe River, it's 5 km from safari tours in Chobe National Park and 9 km from Caracal conservation park.</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div>
 <div class="col-md-3">
<div class="card mb-3 shadow-md">
     <img class="card-img-top"
      src="image/safari.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">Tlou Safari Lodge</h4>
      <p class="card-text">From Check-in to Check-out, Enjoy an even Cleaner & Safer Stay. Book Today. Book Direct and Save On Flexible Rates with Free 24-hour Cancellation. Earn Hilton Honors Points. City Centre Location. Free WiFi. Amenities: 4 Star, Fitness Centre, Business Facilities.</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div>
 <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/waterfront.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">The WaterFront</h4>
      <p class="card-text">Located 8 km from Maun Mall, The Waterfront, Maun offers an outdoor swimming pool, a bar and air-conditioned accommodation with a patio and free WiFi.<br></br><br></br><br></br><br></br></p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div>
 </div>
 </div>
<Footer/>   
</>
)
}
export default Tourism;