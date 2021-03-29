import { Form } from "react-bootstrap";
import React,{useState,useHistory} from 'react';
import "../css/tailwindcss.css";
import "../css/tourism.css";
import Navbar from "./navbar";
import axios from 'axios'


function Tourism() {

    return(
        <>
<Navbar/>
<div className="bgimage">
            <div className="h-screen bg-black bg-opacity-25 ">

<h1 className="py-12 text-4xl font-bold text-center text-white md:text-6xl">welcome</h1>
<h1 className="text-3xl text-center text-white" >To hotels</h1>
<div className="flex flex-wrap ">
    <div className="p-4 mt-12 ml-10 md:w-1/2 md:ml-0 md:p-0">
     <form className="form-group">
     <select  className="px-12 py-3 font-bold text-white bg-blue-500 rounded cursor-pointer float-center md:float-right md:px-28 text-md md:text-xl hover:bg-blue-900">
     <option>select location</option>
         <option>Gabarone</option>
         <option>Kasane</option>
         <option>FrancisTown</option>
       </select>
       </form>
    </div>
    
</div>
            </div>

        </div>
        <div class="container bg-gray-100">
            
	<div class="row p-4 items-center">
	<div class="col-lg-4">
	<div class="our-team-main">
	<center>
	<div class="team-front">
	<img src="img/kutta.jpg" class="img-fluid" />
	<h3>KAYAK Miami Beach</h3>
	</div>
	
	<div class="team-back">
	<span>
	A locally-inspired boutique hotel, powered by KAYAK
The first-ever hotel from KAYAK.com, our space is inspired by local culture and community, while using tech to craft an amazing stay experience for our guests.
	</span>
    <br/>
   <a href="/driver"> <button class=" items-center px-2 py-1 txt-indigo-900 bg-indigo-900 hover:bg-blue-700 font-bold text-white">Read More</button></a>
	</div>
	</center>
	</div>
    
	</div>
	<div class="col-lg-4">
	<div class="our-team-main">
	
	<center>
	<div class="team-front">
	<img src="img/image3.jpg" class="img-fluid " />
	<h3>Protea Hotel by Marriott Gaborone Masa Square</h3>
	</div>
	
	<div class="team-back">
	<span>
	Travel with Peace of Mind Thanks to our Commitment to Clean Standards. Reserve Your Next Getaway Now and Enjoy Your Stay at Protea. Free Wi-Fi. Contactless Service. Mobile Service Requests. Air Conditioning. Concierge. Flexible Cancellation.

	</span>
    <br/>
    <a href="/cleaner"><button class="px-2 py-1 txt-indigo-900 bg-indigo-900 hover:bg-blue-700 font-bold text-white">Read More</button></a>
	</div>
	</center>
	</div>
	</div>

	<div class="col-lg-4">
	<div class="our-team-main">
	<center>
	<div class="team-front">
	<img src="img/housemaid.png" class="img-fluid " />
	<h3>Chalets Serowe Hotel</h3>
	</div>
	
	<div class="team-back">
	<span>
	The hotel's old fashioned charm and home-style atmosphere has been blended with modern convenience to create the ideal travel destination in Serowe, Botswana. The Serowe Hotel makes a perfect over-night stop for travelers headed to the Okavango, and is only 30km from the Khama Rhino Sanctuary.
	</span>
    <br/>
    <a href="/housemaid"><button class="px-2 py-1 txt-indigo-900 bg-indigo-900 hover:bg-blue-700 font-bold text-white">Read More</button></a>
	</div>
	</center>
	
	</div>
	</div>
	<div class="col-lg-4">
	<div class="our-team-main">
	<center>
	<div class="team-front">
	<img src="img/guards.png" class="img-fluid " />
	<h3>Hilton Garden Inn Gaborone</h3>
	</div>
	
	<div class="team-back">
	<span>
	From Check-in to Check-out, Enjoy an even Cleaner & Safer Stay. Book Today. Book Direct and Save On Flexible Rates with Free 24-hour Cancellation. Earn Hilton Honors Points. City Centre Location. Free WiFi. Amenities: 4 Star, Fitness Centre, Business Facilities.

	</span>
    <br/>
    <a href="/guard"><button class="px-2 py-1 txt-indigo-900 bg-indigo-900 hover:bg-blue-700 font-bold text-white">Read More</button></a>
	</div>
	</center>
	</div>
	</div>
	<div class="col-lg-4">
	<div class="our-team-main">
	<center>
	<div class="team-front">
	<img src="img/image3.jpg" class="img-fluid " />
	<h3>Boutique Hotels</h3>
	</div>
	
	<div class="team-back">
	<span>
	A personal Infant care works for an individual, company or family to chauffer individuals and must follow safety laws, care for passengers and maintain vehicles.

	</span>
    <br/>
    <a href="/infantcare"><button class="px-2 py-1 txt-indigo-900 bg-indigo-900 hover:bg-blue-700 font-bold text-white">Read More</button></a>
	</div>
	</center>
	</div>
	</div>
	<div class="col-lg-4">
	<div class="our-team-main">
    <center>
	<div class="team-front">
	<img src="img/cooker.png" class="img-fluid " />
	<h3>Beach Hotel</h3>
	</div>
	
	<div class="team-back">
	<span>
	The hotel's old fashioned charm and home-style atmosphere has been blended with modern convenience to create the ideal travel destination in Serowe, Botswana. The Serowe Hotel makes a perfect over-night stop for travelers headed to the Okavango, and is only 30km from the Khama Rhino Sanctuary.
	</span>
    <br/>
    <a href="/cooker"><button class="px-2 py-1 txt-indigo-900 bg-indigo-900 hover:bg-blue-700 font-bold text-white">Read More</button></a>
	</div>
	</center>
	
	</div>
	</div>

	
	
	
	</div>
	</div>

       
       
              

        </>
    )

}
export default Tourism;