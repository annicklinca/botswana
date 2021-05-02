import React,{Component,useState,useEffect} from 'react';
import "../css/tailwindcss.css";
import "../css/tourism.css";
import Navbar from "./navbar";
import axios from 'axios';

function Restaurants() {

   const [data, setData] = useState([]);
  const pathed='http://127.0.0.1:8000'
  
  
         //let fetch information
         useEffect( ()=>{
            // async await
           const response = axios.get('http://127.0.0.1:8000/Restaurant/') 
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

<h1 className="py-12 pt-48 text-4xl font-bold text-center text-white md:text-4xl">Explore Beautiful Restaurants in Botswana</h1>
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
<h5 className=" p-2 pt-4 font-bold">Restaurants</h5>
		<div class="row">
      {data.map((item,key)=>{ 
        return(
 <div class="col-md-3 ">
<div class="card mb-3 shadow-md">
     <img class="card-img-top"
      src={pathed+item.image} alt={item.image}/>
     <div class="card-body">
     <h4 class="card-title font-bold">{item.location}</h4>
     <h4 class="card-title font-bold">{item.telephone}</h4>
     <h4 class="card-title text-sm">{item.description}</h4>
      {/* <p class="card-text">
      Sport's Bar had, for a while, the reputation of being the benchmark for the crazy weekend evenings 
      of the pilots. If this was the case, the fashion had to pass. There is still a good place to 
      celebrate if you want to drink coups. The restaurant is varied and the cellar is full, but the 
      restaurant remains without exceptional charm. </p> */}
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
      src="image/resto2.jpeg" style={{ height:200, }} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold"> DELIS RESTAURANT Gaborone</h4>
      <p class="card-text">A true Italian institution in the heart of the capital.
       On one side, the Delis Shop where you can find fresh pasta, olive oil 
      and parmeggiano, directly imported from Italy. On the other, you can sit inside or on the terrace 
      to enjoy delicious homemade pastries and cakes. With an Italian coffee, of course! At lunch, let yourself be tempted by a pizza, pasta or salad, which are also very good.</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div> */}
 {/* <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/resto3.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">GOLDEN HILLS SPUR Blue Jacket Street Francistown</h4>
      <p class="card-text">This American-style steakhouse offers a wide choice of grilled meats. 
      You can also eat burgers, chicken and some seafood dishes. Good wine list. A safe address for 
      carnivores! Open Monday to Thursday from 7am to 10pm, Friday and Saturday until 11pm, 
      Sunday until 9pm. Burgers from 70 BWP to 120 BWP.</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div> */}
 {/* <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/resto4.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">OCEAN BASKET Gallo Shopping Centre Francistown</h4>
      <p class="card-text">Restaurant specializing in seafood and fish. From fish'n' 
      chips to the combo tray to share, you can eat as much as you want. Quick service for a 
      lunch break on the go.Open every day from 9am to 10pm. Dishes from 50 BWP to 130 BWP, 
      tasting trays from 90 BWP to 150 BWP, Burgers from 70 BWP to 120 BWP.<br></br><br></br>

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
      src="image/resto5.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">AUDI CAMP</h4>
      <p class="card-text">The restaurant offers a tasty and varied menu in the evening, 
      and is worth a visit even if you don't sleep there. The atmosphere is lively and some evenings, 
      almost festive. A safe value.Open every day from 7am to 10pm. Dishes around BWP 85.<br></br><br></br></p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150">
      View More
</button>
   </div>
</div>
 </div> */}
 {/* <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/resto6.jpeg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold"> TANDUREI RESTAURANT</h4>
      <p class="card-text">"This Indian restaurant will satisfy big appetites. The menu offers a 
      variety of Indian dishes,ranging from curry to beef tikka, but also a wide 
      choice of Chinese specialities. Vegetarians will also be able to enjoy the succulent 
      lentils in sauce.

</p>
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
export default Restaurants;