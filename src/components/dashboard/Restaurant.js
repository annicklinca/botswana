import  React,{useState,Component,useEffect} from "react";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
// import "../../css/tailwindcss.css";
// import "../../css/dashboard.css";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// import urlPath from '../../constant';
import Navbar from './Navbar';
import NavLeft from './NavLeft';
import { FaCalendarAlt, FaCarSide, FaMoneyBillWaveAlt, FaPeopleCarry } from 'react-icons/fa';
 import cartoon from '../../images/drain.jpg';
 import pic from '../../images/drain.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cityplus from '../../images/Cityplus.png';
import { FaSquare } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaStar} from 'react-icons/fa';
import { FaQuestion} from 'react-icons/fa';
import { FaEnvelope} from 'react-icons/fa';
import { FaEnvelNavLeftope} from 'react-icons/fa';
import { FaPhoneSquare} from 'react-icons/fa';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {Bar, Line, Pie} from 'react-chartjs-2';



function Dashboard() {
   
  


    return(
        <>
           {/* Navbar top import */}
        
            <Navbar/>
        <div className="flex flex-wrap">
                
            {/* Navbar left import    */}
                
            <div className="w-full  md:w-1/6 ">
                <NavLeft/>
            </div>
            
            {/* body content */}

            <div className="w-full md:w-5/6">
              <div className=" md:mx-2 md:my-2 rounded-md bg-gray-100">
                  <div className="md:p-2 ">
                      <h5 className="text-md font-bold">Admin Dashboard</h5>
                  </div>
                  <div className="row">
                   <div className="col-sm-3 bg-green-400 rounded-lg md:ml-4 ">
                       <span className="text-white-200 text-lg inline-block md:mt-4"><FaCalendarAlt/></span>
                       <span className="inline-block md:ml-48">350</span>
                       <span className="md:ml-48 ">Foreigners</span>
                       </div>
                   <div className="col-sm-3 bg-red-400 inline-block  rounded-lg md:ml-2 ">
                   <span className="text-white-200 text-lg inline-block mt-4"><FaEnvelope/></span>
                       <span className="inline-block ml-48">350</span>
                       <span className="ml-48 ">Messages</span></div>
                   <div className="col-sm-2 bg-blue-400  rounded-lg md:ml-2 ">
                   <span className="text-white-200 text-lg inline-block mt-4"><FaCarSide/></span>
                       <span className="inline-block ml-24">350</span>
                       <span className="ml-20 ">Nationalities</span>
                   </div>
                   <div className="col-sm-3 bg-yellow-400  rounded-lg md:ml-2 ">
                   <span className="text-white-200 text-lg inline-block mt-4"><FaMoneyBillWaveAlt/></span>
                       <span className="inline-block ml-48">$350k</span>
                       <span className="ml-48 ">Earnings</span>
                   </div>
                  </div>
                {/* <div className="row mt-4">
               <div className="col-6 bg-white rounded-lg p-2 ml-4">
               <Bar
	        data={{
                labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
                datasets: [{
                    label: 'number of Visitors',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',\
                        
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                }]
            }}
	        width={400}
	        height={300}
	        options={{ maintainAspectRatio: false }}
            />
               </div>

               <div className="col-4 bg-white rounded-lg p-2 ml-20">

               <Pie
	        data={{
             
                datasets: [{
                    label: 'number of Visitors',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                }],
                labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
            }}
	        width={400}
	        height={300}
	        options={{ maintainAspectRatio: false }}
            />
               </div>
            
             
                </div> */}
                <h4 className="text-md p-2">Most visited destinations in Botswana</h4> 
                <div className="bg-white rounded-md mt-4 mx-2" > 
                <div className="row ">
                <div className="col-3 mt-2 ml-4"> <span>Rivers</span>   </div>
               <div className="col-8 mt-2"> <span className="w-full"><ProgressBar variant="dark" now={12} /> </span></div>
               <div className="col-3 mt-2 ml-4"> <span>Mokoro</span>   </div>
               <div className="col-8 mt-2"> <span className="w-full"><ProgressBar variant="dark" now={32} /> </span></div>
               <div className="col-3 mt-2 ml-4"> <span>Nightclubs</span>   </div>
               <div className="col-8 mt-2"> <span className="w-full"><ProgressBar variant="dark" now={72} /> </span></div>
               <div className="col-3 mt-2 ml-4"> <span>Hotel and Lodges</span>   </div>
               <div className="col-8 mt-2"> <span className="w-full"><ProgressBar variant="dark" now={42} /> </span></div>
               <div className="col-3 mt-2 ml-4"> <span>Restaurants</span>   </div>
               <div className="col-8 mt-2"> <span className="w-full"><ProgressBar variant="dark" now={52} /> </span></div>

               </div>
                </div> 
                
              </div>
               
            </div>
          
        </div>
      
        </>
    )
    
   
  
}
export default Dashboard;
