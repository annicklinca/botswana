import React,{useState,useHistory} from 'react';
import "../css/tailwindcss.css";
import "../css/tourism.css";
import Navbar from "./navbar";

function Nightclub() {

    return(
        <>
<Navbar/>
<div className="bgimage">
            <div className=" bg-black bg-opacity-25 ">

<h1 className="py-12 text-4xl font-bold text-center text-white md:text-6xl">welcome To Nightclub</h1>
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
   <h1 class="text-center">Nightclub</h1>
		<div class="row">
 <div class="col-md-3 ">
<div class="card mb-3 shadow-md">
     <img class="card-img-top"
      src="image/club.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title">KAYAK Miami Beach</h4>
      <p class="card-text">A locally-inspired boutique hotel, powered by KAYAK
The first-ever hotel from KAYAK.com, our space is inspired by local culture and community, while using tech to craft an amazing stay experience for our guests.</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div>
 <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/club5.jpeg" style={{ height:200, }} alt=""/>
     <div class="card-body">
      <h4 class="card-title">Chalets Serowe Hotel</h4>
      <p class="card-text">The hotel's old fashioned charm and home-style atmosphere has been blended with modern convenience to create the ideal travel destination in Serowe, Botswana. The Serowe Hotel makes a perfect over-night stop for travelers headed to the Okavango, and is only 30km from the Khama Rhino Sanctuary.</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div>
 <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/club3.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title">Protea Hotel by Marriott Gaborone Masa Square</h4>
      <p class="card-text">Travel with Peace of Mind Thanks to our Commitment to Clean Standards. Reserve Your Next Getaway Now and Enjoy Your Stay at Protea. Free Wi-Fi. Contactless Service. Mobile Service Requests. Air Conditioning. Concierge. Flexible Cancellation.</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div>
 <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/wines.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title">Hilton Garden Inn Gaborone</h4>
      <p class="card-text">From Check-in to Check-out, Enjoy an even Cleaner & Safer Stay. Book Today. Book Direct and Save On Flexible Rates with Free 24-hour Cancellation. Earn Hilton Honors Points. City Centre Location. Free WiFi. Amenities: 4 Star, Fitness Centre, Business Facilities.</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div>
 <div class="col-md-3">
<div class="card mb-3 shadow-md">
     <img class="card-img-top"
      src="image/club0.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title">Sky Lounge in  Gaborone</h4>
      <p class="card-text">From Check-in to Check-out, Enjoy an even Cleaner & Safer Stay. Book Today. Book Direct and Save On Flexible Rates with Free 24-hour Cancellation. Earn Hilton Honors Points. City Centre Location. Free WiFi. Amenities: 4 Star, Fitness Centre, Business Facilities.</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div>
 <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/club6.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title">Hunters Pub & Grill in Kansane</h4>
      <p class="card-text">"Good Food with game meat options, reasonable/mid price, a local setting"
Located in the back of a small strip mall in Kasane town, Hunters Pub is an “authentic</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div>
 </div>
 </div>
       
       
              

        </>
    )

}
export default Nightclub;