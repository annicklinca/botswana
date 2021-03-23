// import React,{Component,useState} from 'react';
// import "../css/tailwindcss.css";
// import { FaAlignJustify, FaAngleDown } from 'react-icons/fa';

// function Navbar(){
//     return(
//         <>
//         <div className="bg-white fixed w-full z-50 p-8 shadow-md">
//             <div className="flex flex-wrap">
//                 <div className="w-1/5 mt-4">
//             <h1 className="font-bold italic text-3xl text-green-500 inline-block"></h1>
//                 </div>

//                 <div className=" hidden md:block lg:block w-4/5">
//                  <div className="flex">
//                      <div className="w-3/5 mt-4"> 
//                 <div className="inline-block pl-12">
//                 <ul>
//                 <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a class="dropdown-item" href="#">Action</a>
//           <a class="dropdown-item" href="#">Another action</a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//                     <li className="inline-block pl-12 font-bold"><a href="" className="text-black">Aboutus</a></li>
//                     <li className="inline-block pl-4 font-bold"><a href="" className="text-black">Get the App</a></li>
//                 </ul>
//             </div></div>  
//                 <div className="w-2/5">
//                 <div className="inline-block  float-right">
//             <ul>
//                     <li className="inline-block pl-12 pr-12 font-bold text-lg hover:text-yellow-500"><a href="" className="text-black">Login</a></li>
//                     <li className="inline-block pl-3 font-bold bg-green-500 text-black rounded-md h-12 w-24 pt-3 center hover:bg-yellow-500"><a href="" className="text-black">Sign Up</a></li>
//                 </ul>
//             </div>
//                 </div>
//                 </div>
//             </div>



// <div className="block md:hidden lg:hidden w-4/5">
// <i><FaAlignJustify className="ml-64 mt-4"/></i>
// </div>


           
//             </div>
         
//       </div>
//         </>
//     )
// }


// export default Navbar;

import React,{Component,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavDropdown,Form,FormControl,Button } from 'react-bootstrap';

function Navbar(){

  const [toggle,setToggle] = useState(false);
  const [drop,setDrop] = useState(false);
  const [clicks,setClicks] = useState(0)
  const [small,setSmall] = useState(false);
  const [ini,setIni] =useState(false);
  const handleout = () => setIni(false);
  const handleIni = () => setIni(true);
  
  const handleToggle = ()=>{
    if(clicks===0){
      setDrop(false);
      setToggle(true);
      setClicks(1);
    }else{
      setToggle(false);
      // setDrop(true);
      setClicks(0);
    }
   
  }

  const handleSolution = ()=>{
    // setDrop(true);
    // setToggle(false);
      if(clicks===0){
        setToggle(false);
        setDrop(true);
        setClicks(1);
    }else{
      // setToggle(true);
      setDrop(false);
      setClicks(0);
    }

  }


  const handleClick = ()=>{
    setSmall(true);

   
  }

  const handleSmall = ()=>{
    setSmall(false);
  }

 
  

    return(
      <>

<div className=" bg-white fixed w-full z-50 p-2 shadow-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
      <div class="lg:w-0 lg:flex-1">
        <a href="/" class="flex">
        <p className="font-bold italic text-3xl text-green-500 inline-block">BT<span className="text-black">SW</span> <span className="text-yellow-500">..</span></p>
          {/* <img class="h-8 w-auto sm:h-10" src="" alt=""  /> */}
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button type="button" onClick={handleClick} class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black  focus:outline-none  focus:text-black transition duration-150 ease-in-out">
          {/* <!-- Heroicon name: menu --> */}
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
      </div>

      <nav class="hidden md:flex space-x-10">
      <div class=" nav-item dropdown text-base leading-6 font-medium text-black hover:text-black focus:outline-none  transition ease-in-out duration-150">
        <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services by Catrgory
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Hotels/Loges</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Travel Agencies</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Restaurants</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Nights Clubs</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Car Rental</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Boat</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Mokoro</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Currency Exchange Service</a>
        </div>
      </div>

        <a href="/" class="mt-2 text-base leading-6 font-medium text-black hover:text-blue-400 focus:outline-none  transition ease-in-out duration-150">
         About
        </a>
        <a href="/about-us" class="mt-2 text-base leading-6 font-medium text-black hover:text-blue-400 focus:outline-none  transition ease-in-out duration-150">
         Get the App
        </a>
        <a className=" mt-2 inline-block pl-4 pr-12 font-bold text-lg hover:text-yellow-500 text-black" href="">Login</a>
        <div className=" inline-block pl-3 font-bold bg-green-500 text-black rounded-md h-12 w-24 pt-3 center hover:bg-yellow-500"><a href="" className="text-black">Sign Up</a></div>
      </nav>
    </div>
  </div>



  {small?
  <div class=" top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-lg">
      <div class="rounded-lg shadow-xs morpheus-den-gradient">
        <div class="pt-5 pb-6 px-5 space-y-6">
          <div class="flex items-center justify-between">
            <div>
              {/* <p className="text-xl uppacase font-bold text-black">M-Health</p> */}
              {/* <img class="h-8 w-auto sm:h-10" src=""  alt=""  /> */}
            </div>
            <div class="-mr-2">
              
              <button type="button" onClick={handleSmall} class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-blue focus:outline-none focus:bg-blue-100 focus:text-black transition duration-150 ease-in-out">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            {/* <nav class="grid gap-y-8"> */}

            <nav class="grid gap-y-8">
      <div class=" nav-item dropdown text-base leading-6 font-medium text-black hover:text-black focus:outline-none  transition ease-in-out duration-150">
        <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services by Catrgory
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Hotels/Loges</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Travel Agencies</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Restaurants</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Nights Clubs</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Car Rental</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Boat</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Mokoro</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Currency Exchange Service</a>
        </div>
      </div>

        <a href="/" class="ml-3 text-base leading-6 font-medium text-black hover:text-blue-400 focus:outline-none  transition ease-in-out duration-150">
         About
        </a>
        <a href="/about-us" class="ml-3 text-base leading-6 font-medium text-black hover:text-blue-400 focus:outline-none  transition ease-in-out duration-150">
         Get the App
        </a>
        <a className=" ml-3 inline-block font-bold text-lg hover:text-yellow-500 text-black" href="">Login</a>
        <div className=" inline-block pl-3 font-bold bg-green-500 text-black rounded-md h-12 w-24 pt-3 center hover:bg-yellow-500"><a href="" className="text-black">Sign Up</a></div>
      </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  :<span></span>}

</div>





     
        </>
    )
}

export default Navbar;