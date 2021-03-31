import React,{useState,useHistory} from 'react';
import "../css/tailwindcss.css";
import "../css/tourism.css";
import Navbar from "./navbar";
import Footer from "./Footer.js";
import ReactTooltip from 'react-tooltip';
import { Tooltip } from 'reactstrap';
function CarRental() {

        const [tooltipOpen, setTooltipOpen] = useState(false);
      
        const toggle = () => setTooltipOpen(!tooltipOpen);
    return(
        <>
<Navbar/>
<div style={{  
  backgroundImage: "url(" + "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: 400
}}>
<div className=" bg-black bg-opacity-25 ">

<h1 className="py-12 text-2xl font-bold text-center text-white md:text-6xl">Cheap and Affordable Rental Cars in Botswana.</h1>
<br/><br/><br/><br/><br/><br/><br/>
</div>
</div>
<div class="mx-3 mt-2">
		<div class="row">
 <div class="col-md-3 ">
<div class="card mb-3 shadow-md">
     <img class="card-img-top"
      src="image/Toyota RAVA4.jpg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title">Toyota RAVA4</h4>
      <p class="card-text">Location</p>
      <div class="flex">
      <div>
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltippassenger"> <i class="fas fa-users text-black mx-1 prefix "></i></span>
      <br/>
      <span>5</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="Tooltippassenger" toggle={toggle}>
       Passenger
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltipgear"> <i class="fa fa-arrows-alt text-black mx-1 prefix "></i></span>
      <br/>
      <span>Auto</span>
      <Tooltip placement="bottom" isOpen={tooltipOpen} target="Tooltipgear" toggle={toggle}>
       Gear Shift
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipBaggage"> <i class="fas fa-luggage-cart text-black mx-1 prefix "></i></span>
      <br/>
      <span>1</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipBaggage" toggle={toggle}>
       Baggage
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipDoor"> <i class="fas fa-door-open text-black mx-1 prefix "></i></span>
      <br/>
      <span>5</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipDoor" toggle={toggle}>
      Door
      </Tooltip>
      </div>
      
      </div>
      <p class="card-text text-md my-4"><code class="text-2xl">$</code> 50 /day</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-900 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalLong">
      View More
</button>


<div class=" modal fade animated bounceIn" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
 <div class="modal-dialog" role="document">
  <div class="modal-content modal-fullscreen">
   <div class="modal-header">
    <h5 class="modal-title " id="exampleModalLongTitle">Toyota RAVA4</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <div class="modal-body bg-gray-100">
<div class="row">

<div class="col-md-6 mb-2">
<img class="w-full" src="image/Toyota RAVA4.jpg" style={{ height:200,}}/>

</div>
<div class="col-md-6 mb-2">
<div class="text-wrapper transition">
<p class="ml-2">The toyota Rav4  is mainly loved for its fuel economy, a seden 4-wheel drive car manufactured by Toyota Motors to perform high duty tasks, yet fuel efficient. manufactured by Japan’s leading auto-mobile company.</p>
</div>
</div>
</div>
<div class="p-2 mx-auto bg-white rounded-xl shadow-md  md:max-w-full">
<div class=" row ">
<h5 class="text-md font-bold">Car Features</h5>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Airbag</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > FM Radio</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Air Conditioning</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Speed Km</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > Steering Wheel</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >USB Charging Outlets</p>
</div>
</div>

</div>
<button type="button" class="whitespace-no-wrap inline-flex justify-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-900 hover:bg-blue-700 focus:outline-none  transition ease-in-out duration-150">
 Book Now
</button>
</div>

   </div>
   <div class="modal-footer">
    <button type="button" data-dismiss="modal">Close</button>
    {/* <button type="button" class="btn btn-primary">Save changes</button> */}
   </div>
  </div>
 </div>
</div>

   </div>
</div>
 </div>
 <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/Toyota Land Cruiser Safari.jpg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title">Toyota Land Cruiser </h4>
      <p class="card-text">Location</p>
      <div class="flex">
      <div>
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltippassenger"> <i class="fas fa-users text-black mx-1 prefix "></i></span>
      <br/>
      <span>5</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="Tooltippassenger" toggle={toggle}>
       Passenger
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltipgear"> <i class="fa fa-arrows-alt text-black mx-1 prefix "></i></span>
      <br/>
      <span>Auto</span>
      <Tooltip placement="bottom" isOpen={tooltipOpen} target="Tooltipgear" toggle={toggle}>
       Gear Shift
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipBaggage"> <i class="fas fa-luggage-cart text-black mx-1 prefix "></i></span>
      <br/>
      <span>1</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipBaggage" toggle={toggle}>
       Baggage
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipDoor"> <i class="fas fa-door-open text-black mx-1 prefix "></i></span>
      <br/>
      <span>5</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipDoor" toggle={toggle}>
      Door
      </Tooltip>
      </div>
      
      </div>
      <p class="card-text text-md my-4"><code class="text-2xl">$</code> 80 /day</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-900 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalLong">
      View More
</button>


<div class=" modal fade animated bounceIn" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
 <div class="modal-dialog" role="document">
  <div class="modal-content modal-fullscreen">
   <div class="modal-header">
    <h5 class="modal-title " id="exampleModalLongTitle">Toyota Land Cruiser</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <div class="modal-body bg-gray-100">
<div class="row">

<div class="col-md-6 mb-2">
<img class="w-full" src="image/Toyota Land Cruiser Safari.jpg" style={{ height:200,}}/>

</div>
<div class="col-md-6 mb-2">
<div class="text-wrapper transition">
<p class="ml-2">The Toyota Land Cruiser is mainly loved for its fuel economy, a seden 4-wheel drive car manufactured by Toyota Motors to perform high duty tasks, yet fuel efficient. manufactured by Japan’s leading auto-mobile company.</p>
</div>
</div>
</div>
<div class="p-2 mx-auto bg-white rounded-xl shadow-md  md:max-w-full">
<div class=" row ">
<h5 class="text-md font-bold">Car Features</h5>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Airbag</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > FM Radio</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Air Conditioning</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Speed Km</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > Steering Wheel</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >USB Charging Outlets</p>
</div>
</div>

</div>
<button type="button" class="whitespace-no-wrap inline-flex justify-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-900 hover:bg-blue-700 focus:outline-none  transition ease-in-out duration-150">
 Book Now
</button>
</div>

   </div>
   <div class="modal-footer">
    <button type="button" data-dismiss="modal">Close</button>
    {/* <button type="button" class="btn btn-primary">Save changes</button> */}
   </div>
  </div>
 </div>
</div>
   </div>
</div>
 </div>
 <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/Luxury Toyota V-8.jpg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title">Luxury Toyota V-8</h4>
      <p class="card-text">Location</p>
      <div class="flex">
      <div>
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltippassenger"> <i class="fas fa-users text-black mx-1 prefix "></i></span>
      <br/>
      <span>5</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="Tooltippassenger" toggle={toggle}>
       Passenger
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltipgear"> <i class="fa fa-arrows-alt text-black mx-1 prefix "></i></span>
      <br/>
      <span>Auto</span>
      <Tooltip placement="bottom" isOpen={tooltipOpen} target="Tooltipgear" toggle={toggle}>
       Gear Shift
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipBaggage"> <i class="fas fa-luggage-cart text-black mx-1 prefix "></i></span>
      <br/>
      <span>1</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipBaggage" toggle={toggle}>
       Baggage
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipDoor"> <i class="fas fa-door-open text-black mx-1 prefix "></i></span>
      <br/>
      <span>5</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipDoor" toggle={toggle}>
      Door
      </Tooltip>
      </div>
      
      </div>
      <p class="card-text text-md my-4"><code class="text-2xl">$</code> 70 /day</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-900 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalLong">
      View More
</button>


<div class=" modal fade animated bounceIn" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
 <div class="modal-dialog" role="document">
  <div class="modal-content modal-fullscreen">
   <div class="modal-header">
    <h5 class="modal-title " id="exampleModalLongTitle">Luxury Toyota V-8</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <div class="modal-body bg-gray-100">
<div class="row">

<div class="col-md-6 mb-2">
<img class="w-full" src="image/Luxury Toyota V-8.jpg" style={{ height:200,}}/>

</div>
<div class="col-md-6 mb-2">
<div class="text-wrapper transition">
<p class="ml-2">The Luxury Toyota V-8 is mainly loved for its fuel economy, a seden 4-wheel drive car manufactured by Toyota Motors to perform high duty tasks, yet fuel efficient. manufactured by Japan’s leading auto-mobile company.</p>
</div>
</div>
</div>
<div class="p-2 mx-auto bg-white rounded-xl shadow-md  md:max-w-full">
<div class=" row ">
<h5 class="text-md font-bold">Car Features</h5>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Airbag</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > FM Radio</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Air Conditioning</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Speed Km</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > Steering Wheel</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >USB Charging Outlets</p>
</div>
</div>

</div>
<button type="button" class="whitespace-no-wrap inline-flex justify-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-900 hover:bg-blue-700 focus:outline-none  transition ease-in-out duration-150">
 Book Now
</button>
</div>

   </div>
   <div class="modal-footer">
    <button type="button" data-dismiss="modal">Close</button>
    {/* <button type="button" class="btn btn-primary">Save changes</button> */}
   </div>
  </div>
 </div>
</div>
   </div>
</div>
 </div>
 <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/VIP vehicle.jpg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title">VIP Vehicle</h4>
      <p class="card-text">Location</p>
      <div class="flex">
      <div>
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltippassenger"> <i class="fas fa-users text-black mx-1 prefix "></i></span>
      <br/>
      <span>5</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="Tooltippassenger" toggle={toggle}>
       Passenger
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltipgear"> <i class="fa fa-arrows-alt text-black mx-1 prefix "></i></span>
      <br/>
      <span>Auto</span>
      <Tooltip placement="bottom" isOpen={tooltipOpen} target="Tooltipgear" toggle={toggle}>
       Gear Shift
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipBaggage"> <i class="fas fa-luggage-cart text-black mx-1 prefix "></i></span>
      <br/>
      <span>1</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipBaggage" toggle={toggle}>
       Baggage
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipDoor"> <i class="fas fa-door-open text-black mx-1 prefix "></i></span>
      <br/>
      <span>5</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipDoor" toggle={toggle}>
      Door
      </Tooltip>
      </div>
      
      </div>
      <p class="card-text text-md my-4"><code class="text-2xl">$</code> 100 /day</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-900 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalLong">
      View More
</button>


<div class=" modal fade animated bounceIn" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
 <div class="modal-dialog" role="document">
  <div class="modal-content modal-fullscreen">
   <div class="modal-header">
    <h5 class="modal-title " id="exampleModalLongTitle">VIP Vehicle</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <div class="modal-body bg-gray-100">
<div class="row">

<div class="col-md-6 mb-2">
<img class="w-full" src="image/VIP vehicle.jpg" style={{ height:200,}}/>

</div>
<div class="col-md-6 mb-2">
<div class="text-wrapper transition">
<p class="ml-2">The VIP Vehicle  is mainly loved for its fuel economy, a seden 4-wheel drive car manufactured by Toyota Motors to perform high duty tasks, yet fuel efficient. manufactured by Japan’s leading auto-mobile company.</p>
</div>
</div>
</div>
<div class="p-2 mx-auto bg-white rounded-xl shadow-md  md:max-w-full">
<div class=" row ">
<h5 class="text-md font-bold">Car Features</h5>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Airbag</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > FM Radio</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Air Conditioning</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Speed Km</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > Steering Wheel</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >USB Charging Outlets</p>
</div>
</div>

</div>
<button type="button" class="whitespace-no-wrap inline-flex justify-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-900 hover:bg-blue-700 focus:outline-none  transition ease-in-out duration-150">
 Book Now
</button>
</div>

   </div>
   <div class="modal-footer">
    <button type="button" data-dismiss="modal">Close</button>
    {/* <button type="button" class="btn btn-primary">Save changes</button> */}
   </div>
  </div>
 </div>
</div>
   </div>
</div>
 </div>
 </div>
 </div>
<Footer/>   
</>
)
}
export default CarRental;