import React,{Component,useState} from 'react';
import SimpleReactFooter from "simple-react-footer";

function Footer(){
    return(
        <>
      
      <footer class="page-footer font-small bg-blue-400  shadow-md">
      
  
        <div class="container text-center text-md-left">
      

          <div class="row">
      

            <div class="col-md-3 mx-auto">
      
 
              <h5 class="font-weight-bold text-uppercase text-indigo-700 mt-3 mb-4">BTSW</h5>
      
              {/* <ul class="list-unstyled">
                <li>
                  <a class="text-white" href="#!">Very long link 1</a>
                </li>
                <li>
                  <a class="text-white" href="#!">Very long link 2</a>
                </li>
                <li>
                  <a class="text-white" href="#!">Very long link 3</a>
                </li>
                <li>
                  <a class="text-white" href="#!">Very long link 4</a>
                </li>
              </ul> */}
              <p class="text-white">we
             have helped over 1000 entrepreneurs get the first focus and support needed to build a technology
             business that matters. </p>
      
            </div>

      
           
      

            <div class="col-md-3 mx-auto">
      
 
              <h5 class="font-weight-bold text-uppercase text-indigo-700 mt-3 mb-4">Need Help?</h5>
      
              <ul class="list-unstyled">
                <li>
                <i class="fas fa-phone text-white mx-1 prefix text-blue-700  "></i>
                  <a class="text-white" href="#!">+26773911157</a>
                </li>
                <li>
                <i class="fas mx-1 text-white fa-envelope prefix text-blue-700  "></i>
                  <a class="text-white" href="#!">info@ngwana.africa</a>
                </li>
                <p class=" font-bold my-1 text-indigo-700 mb-2">Follow Us</p>
                <li>
                <i class="fab mx-1 text-white fa-facebook-f prefix text-blue-700  "></i>
                <i class="fab mx-1 text-white fa-twitter prefix text-blue-700  "></i>
                <i class="fab mx-1 text-white fa-linkedin-in prefix text-blue-700  "></i>
                <i class="fab mx-1 text-white fa-instagram prefix text-blue-700  "></i>
                </li>
                <li>
               
                </li>
              </ul>
      
            </div>

      
           
      

            <div class="col-md-3 mx-auto">
      
 
              <h5 class="font-weight-bold text-uppercase text-indigo-700 mt-3 mb-4">Important Links</h5>
      
              <ul class="list-unstyled">
                <li>
                  <a class="text-white" href="#!">Hotels & Loges</a>
                </li>
                <li>
                  <a class="text-white" href="#!">Travel Agencies</a>
                </li>
                <li>
                  <a class="text-white" href="#!">Restaurants</a>
                </li>
                <li>
                  <a class="text-white" href="#!">Car Rental</a>
                </li>
                <li>
                  <a class="text-white" href="#!">Night clubs</a>
                </li>
                <li>
                  <a class="text-white" href="#!">Currency Exchange</a>
                </li>
              </ul>
      
            </div>

      
           
      

            <div class="col-md-3 mx-auto">
              <h5 class="font-weight-bold text-uppercase text-indigo-700 mt-3 mb-4">Get The App</h5>
      
              <ul class="list-unstyled">
                <li class="my-2">
                 <img src="image/playstore.svg"/>
                </li>
                <li class="my-2">
                <img src="image/iOS.svg"/>
                </li>
              </ul>
      
            </div>

      
          </div>
      
        </div>
        <hr class="w-full text-white my-2"/>
        <div class="flex flex-shrink justify-center">
        {/* <div class="footer-copyright text-white">© 2021 Copyright:
          <a href="#"> BTSW</a>
        </div> */}
        <div class="text-center float-left">
        <a class="mx-4 text-white" href="#"> Privacy Policy</a>
        <a class="mx-4 text-white" href="#"> Terms of Use</a>
        </div>
        </div>
      </footer>
      </>
    )};
    export default Footer;
