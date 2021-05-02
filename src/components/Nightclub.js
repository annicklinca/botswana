import React,{Component,useState,useEffect} from 'react';
import "../css/tailwindcss.css";
import "../css/tourism.css";
import Navbar from "./navbar";
import axios from 'axios';


function Nightclub() {
   const [data, setData] = useState([]);
  const pathed='http://127.0.0.1:8000'
  
  
         //let fetch information
         useEffect( ()=>{
            // async await
           const response = axios.get('http://127.0.0.1:8000/Nightclub/') 
           .then(res=>{
             setData(res.data);
             console.log(res)
         
           })
           .catch((err)=>{
             console.log(err)
           })
         } ,[]
         );

    return(
        <>
<Navbar/>
<div className="tourism" style={{height:"400px"}}>
            <div className=" bg-black bg-opacity-25 ">

<h1 className="py-12 pt-48 text-4xl font-bold text-center text-white md:text-4xl">Explore Beautiful Nightclubs in Botswana</h1>
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
        
         
<div  class="mx-3 mt-2">
<h5 className=" p-2 pt-4 font-bold">Best NightClubs</h5>

		<div class="row">
      {data.map((item,key)=>{ 
        return(

 <div key={key} class="col-md-3 ">
<div  class="card mb-3 shadow-md">
     <img class="card-img-top"
      src={pathed+item.image} alt={item.image}/>
     <div class="card-body">
      <h4 class="card-title font-bold">{item.location}</h4>
      <h4 class="card-title font-bold">{item.telephone}</h4>
      <h4 class="card-title text-sm">{item.description}</h4>
{/*       
      <p class="card-text">{item.script}<br></br>
      {item.script}<br></br>
      {item.script}</p> */}
      {/* <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button> */}
   </div>
</div>
 </div>

)
}
)}









 {/* <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/club5.jpeg" style={{ height:200, }} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">Trekkers Nightclub</h4>
      <p class="card-text">The hotel's old fashioned charm and home-style atmosphere has been blended with 
      modern convenience to create the ideal travel destination.</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div> */}
 {/* <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/club3.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">Chez Nicolas</h4>
      <p class="card-text">
      Reserve Your Next Getaway Now and Enjoy Your Stay at Protea. Free Wi-Fi. Contactless Service. 
      Mobile Service Requests. Air Conditioning.</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div> */}
 {/* <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/wines.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">Bahama Lounge</h4>
      <p class="card-text">From Check-in to Check-out, Enjoy an even Cleaner & Safer Stay. 
      Book Today. Book Direct and Save On Flexible Rates.
   </p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div> */}
 {/* <div class="col-md-3">
<div class="card mb-3 shadow-md">
     <img class="card-img-top"
      src="image/club0.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">Sky Lounge in  Gaborone</h4>
      <p class="card-text">From Check-in to Check-out, Enjoy an even Cleaner & Safer Stay.
       Book Today. Book Direct and Save On Flexible Rates with Free 24-hour Cancellation.
      </p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div> */}
 {/* <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/club6.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">Hunters Pub & Grill in Kansane</h4>
      <p class="card-text">"Good Food with game meat options, reasonable/mid price, a local setting"
Located in the back of a small strip mall in Kasane town, Hunters Pub is an “authentic</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div> */}
 </div>

 </div>


       
       
              

        </>
    )
        

}
export default Nightclub;