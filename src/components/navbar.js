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
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar'
function Navbar1(){
    return(
      <>
      <div  class="w-full p-4 bg-white shadow-md">
<Navbar collapseOnSelect expand="lg" bg="white"  >
  <Navbar.Brand href="#home"><p className="font-bold italic text-3xl text-green-500 inline-block">BT<span className="text-black">SW</span> <span className="text-yellow-500">..</span></p></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto ml-4 font-bold text-lg text-black">
    <span className="text-black "><NavDropdown title={
        <span class="text-black" >Services by Category</span>} id="collasible-nav-dropdown">
        <NavDropdown.Item href="/tourism">Hotels & Loges</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Travel Agencies</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Restaurants</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Night Clubs</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Care Rental</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Boat</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Mokoro</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Currency Exchange service</NavDropdown.Item>
      </NavDropdown>
      </span>
      <Nav.Link href="#"><span class="text-black">About Us</span></Nav.Link>
      <Nav.Link href="#"><span class="text-black">Get the App</span></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/signin"><div className=" mt-2 inline-block pl-4 pr-12 font-bold text-lg hover:text-yellow-500"><p className="text-black">Login</p></div></Nav.Link>
      <Nav.Link eventKey={2} href="/signup">
      <div className="inline-block pl-4 font-bold bg-green-500 text-black rounded-md h-12 w-24 pt-3 center hover:bg-yellow-500"><p className="text-black">Sign Up</p></div>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
     
        </>
    )
}

export default Navbar1;