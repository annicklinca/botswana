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
        <NavDropdown.Item href="restaurants">Restaurants</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="nightclub">Night Clubs</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Car_Rental">Care Rental</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Boat</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Mokoro</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Currency Exchange service</NavDropdown.Item>
      </NavDropdown>
      </span>
      <Nav.Link href="#"><span class="text-black">About Us</span></Nav.Link>
      <Nav.Link href="/contactus"><span class="text-black">Contact Us</span></Nav.Link>
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