import React,{useState,useHistory} from 'react';
import "../css/tailwindcss.css";
import "../css/tourism.css";
import Navbar from "./navbar";
import Footer from "./Footer.js";
function TravelAgencies() {

        const [tooltipOpen, setTooltipOpen] = useState(false);
      
        const toggle = () => setTooltipOpen(!tooltipOpen);
    return(
        <>
<Navbar/>
<div className="gorilla" style={{height:"400px"}}>
            <div className=" bg-black bg-opacity-25 ">

<h1 className="py-12 pt-48 text-4xl font-bold text-center text-white md:text-4xl">The best tours, Activities, trips and vacation packages in Botswana</h1>
<div className="flex flex-wrap ">
    <div className="p-4 mt-8 ml-10 md:w-1/2 md:ml-0 md:p-0">
    </div>
    
</div>
            </div>

        </div>
<div class="mx-3 mt-2">
<h5 className=" p-2 pt-4 font-bold"></h5>
		<div class="row">
 <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/giraffe.jpg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">1 day trip to Akagera</h4>
      <p class="card-text text-md my-4"><code class="text-2xl text-yellow-500">$</code> 50 /day</p>
   
      <div class="container my-4">
    
    <button id="modalActivate" type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalPreview1">
        View More
    </button>
    <div class="modal fade right" id="exampleModalPreview1" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true">
        <div class="modal-dialog-full-width modal-dialog momodel modal-fluid" role="document">
            <div class="modal-content-full-width modal-content ">
                {/* <div class=" modal-header-full-width   modal-header text-center">
                    <h5 class="modal-title w-100" id="exampleModalPreviewLabel">Material Design  Full Screen Modal</h5>
                    <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                        <span class="font-size: 1.3em" aria-hidden="true">&times;</span>
                    </button>
                </div> */}
                <div class="modal-body">
                    <div class="">
                    <img class="card-img-top"
                src="image/giraffe.jpg"class="travelagencies" alt=""/>
                    </div>

        <h1 class="text-xl font-bold">1 day trip to Akagera</h1>
        <h3 class="text-xl">Overview</h3>
        <p>
One Day trip To Akagera National Park for Game Drive and transfer toKigali<br/>

Early in the morning at 5:30 Am you will be picked by driver guide, for having a full day of adventure within Akagera National park, enjoying the beautiful sceneries of Rwanda’s hilly landscape, comprised of a blend of wetland, savannah, and woodland, the natural forests also make quite a view. The location of the park shows that it lies at a lower altitude as compared to rest of the country, therefore meaning that it is not only warmer but drier. Some of the wildlife you will see here include Giraffes, Buffalos, and Elephants as well as a profusion of birds. If fortunate, we may be able to sight at the Shoebill Stork, especially around the shores of the lake. From here you will drive back to Kigali.</p>
<button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalLong">
     Book Now
</button>
                </div>
                <div class="modal-footer-full-width  modal-footer">
                    <button type="button"class="text-xl font-bold text-indigo-900" data-dismiss="modal">Close</button>
                </div>
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
      src="image/canopy.jpg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">1 day trip to Nyungwe</h4>
      <p class="card-text text-md my-4"><code class="text-2xl text-yellow-500">$</code> 50 /day</p>
   
      <div class="container my-4">
    
    <button id="modalActivate" type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalPreview2">
        View More
    </button>
    <div class="modal fade right" id="exampleModalPreview2" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true">
        <div class="modal-dialog-full-width modal-dialog momodel modal-fluid" role="document">
            <div class="modal-content-full-width modal-content ">
                {/* <div class=" modal-header-full-width   modal-header text-center">
                    <h5 class="modal-title w-100" id="exampleModalPreviewLabel">Material Design  Full Screen Modal</h5>
                    <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                        <span class="font-size: 1.3em" aria-hidden="true">&times;</span>
                    </button>
                </div> */}
                <div class="modal-body">
                    <div class="">
                    <img class="card-img-top"
                src="image/canopy.jpg"class="travelagencies" alt=""/>
                    </div>

        <h1 class="text-xl font-bold">1 day trip to Nyungwe</h1>
        <h3 class="text-xl">Overview</h3>
        <p>
One Day trip To Nyungwe National Park for Game Drive and transfer toKigali<br/>

Early in the morning at 5:30 Am you will be picked by driver guide, for having a full day of adventure within Akagera National park, enjoying the beautiful sceneries of Rwanda’s hilly landscape, comprised of a blend of wetland, savannah, and woodland, the natural forests also make quite a view. The location of the park shows that it lies at a lower altitude as compared to rest of the country, therefore meaning that it is not only warmer but drier. Some of the wildlife you will see here include Giraffes, Buffalos, and Elephants as well as a profusion of birds. If fortunate, we may be able to sight at the Shoebill Stork, especially around the shores of the lake. From here you will drive back to Kigali.</p>
<button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalLong">
     Book Now
</button>
                </div>
                <div class="modal-footer-full-width  modal-footer">
                    <button type="button"class="text-xl font-bold text-indigo-900" data-dismiss="modal">Close</button>
                </div>
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
      src="image/Gorilla.jpg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">1 day trip to Volcanoes</h4>
      <p class="card-text text-md my-4"><code class="text-2xl text-yellow-500">$</code> 50 /day</p>
   
      <div class="container my-4">
    
    <button id="modalActivate" type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalPreview3">
        View More
    </button>
    <div class="modal fade right" id="exampleModalPreview3" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true">
        <div class="modal-dialog-full-width modal-dialog momodel modal-fluid" role="document">
            <div class="modal-content-full-width modal-content ">
                {/* <div class=" modal-header-full-width   modal-header text-center">
                    <h5 class="modal-title w-100" id="exampleModalPreviewLabel">Material Design  Full Screen Modal</h5>
                    <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                        <span class="font-size: 1.3em" aria-hidden="true">&times;</span>
                    </button>
                </div> */}
                <div class="modal-body">
                    <div class="">
                    <img class="card-img-top"
                src="image/Gorilla.jpg"class="travelagencies" alt=""/>
                    </div>

        <h1 class="text-xl font-bold">1 day trip to Volcanoes</h1>
        <h3 class="text-xl">Overview</h3>
        <p>
One Day trip To Volcano National Park for Game Drive and transfer toKigali<br/>

Early in the morning at 5:30 Am you will be picked by driver guide, for having a full day of adventure within Akagera National park, enjoying the beautiful sceneries of Rwanda’s hilly landscape, comprised of a blend of wetland, savannah, and woodland, the natural forests also make quite a view. The location of the park shows that it lies at a lower altitude as compared to rest of the country, therefore meaning that it is not only warmer but drier. Some of the wildlife you will see here include Giraffes, Buffalos, and Elephants as well as a profusion of birds. If fortunate, we may be able to sight at the Shoebill Stork, especially around the shores of the lake. From here you will drive back to Kigali.</p>
<button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalLong">
     Book Now
</button>
                </div>
                <div class="modal-footer-full-width  modal-footer">
                    <button type="button"class="text-xl font-bold text-indigo-900" data-dismiss="modal">Close</button>
                </div>
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
      src="image/karongi.jpg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">1 day trip to Kibuye</h4>
      <p class="card-text text-md my-4"><code class="text-2xl text-yellow-500">$</code> 50 /day</p>
   
      <div class="container my-4">
    
    <button id="modalActivate" type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalPreview5">
        View More
    </button>
    <div class="modal fade right" id="exampleModalPreview5" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true">
        <div class="modal-dialog-full-width modal-dialog momodel modal-fluid" role="document">
            <div class="modal-content-full-width modal-content ">
                {/* <div class=" modal-header-full-width   modal-header text-center">
                    <h5 class="modal-title w-100" id="exampleModalPreviewLabel">Material Design  Full Screen Modal</h5>
                    <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                        <span class="font-size: 1.3em" aria-hidden="true">&times;</span>
                    </button>
                </div> */}
                <div class="modal-body">
                    <div class="">
                    <img class="card-img-top"
                src="image/karongi.jpg"class="travelagencies" alt=""/>
                    </div>

        <h1 class="text-xl font-bold">1 day trip to Kibuye</h1>
        <h3 class="text-xl">Overview</h3>
        <p>
One Day trip To Kibuye National Park for Game Drive and transfer toKigali<br/>

Early in the morning at 5:30 Am you will be picked by driver guide, for having a full day of adventure within Akagera National park, enjoying the beautiful sceneries of Rwanda’s hilly landscape, comprised of a blend of wetland, savannah, and woodland, the natural forests also make quite a view. The location of the park shows that it lies at a lower altitude as compared to rest of the country, therefore meaning that it is not only warmer but drier. Some of the wildlife you will see here include Giraffes, Buffalos, and Elephants as well as a profusion of birds. If fortunate, we may be able to sight at the Shoebill Stork, especially around the shores of the lake. From here you will drive back to Kigali.</p>
<button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalLong">
     Book Now
</button>
                </div>
                <div class="modal-footer-full-width  modal-footer">
                    <button type="button"class="text-xl font-bold text-indigo-900" data-dismiss="modal">Close</button>
                </div>
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
export default TravelAgencies;