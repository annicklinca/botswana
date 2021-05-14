import  React,{useState} from "react";
// import "../../css/tailwindcss.css";
// import "../../css/dashboard.css";
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cityplus from '../../images/Cityplus.png';
import { FaAlignJustify } from 'react-icons/fa';
import { FaTimes} from 'react-icons/fa';
import { FaUserCheck } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaAddressCard } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaSatelliteDish } from 'react-icons/fa';
import { FaRocketchat } from 'react-icons/fa';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';

function NavLeft() {
    
    return(
        <>
               <div className="pr-4 pl-4 pb-1 pt-3 hidden md:block lg:block">
                    <ul className="">
                       
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="/Home">
                                <div class="row">
                                    <div className="col-3">
                                        <i className="text-xl text-blue-300"><FaUserCheck/></i>
                                    </div>
                                    <div className="col-9">
                                        <p className="font-medium p-1 font-sans  text-blue-800">User Account</p>
                                    </div>
                                </div>                
                            </a>
                        </li>
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="/addhotel">
                                <div class="row">
                                    <div className="col-3 ">
                                        <i className="text-xl text-green-400 inline-block"><FaCalendarAlt/></i>
                                        </div>
                                        <div className="col-9">
                                        <p className="inline-block font-medium p-1 font-sans  text-blue-800">add hotels</p>
                                        </div>
                                </div>                
                            </a>
                        </li>
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="/">
                                <div class="row">
                                    <div className="col-3">
                                        <i className="text-xl text-blue-300 inline-block"><FaAddressCard/></i>
                                    </div>
                                    <div className="col-9">
                                        <p className="font-medium p-1 font-sans inline-block  text-blue-800">add restaurants</p>
                                    </div>
                                </div>                
                            </a>
                        </li>
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="/students">
                                <div class="row">
                                    <div className="col-3 pl-20">
                                        <i className="text-xl text-yellow-700"><FaChalkboardTeacher/></i>
                                    </div>
                                    <div className="col-9">
                                        <p className="font-medium p-1 font-sans  text-blue-800">add hotel & lodges</p>
                                    </div>
                                </div>                
                            </a>
                        </li>
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="/addmokoro">
                                <div class="row">
                                    <div className="col-3 pl-20">
                                        <i className="text-xl text-black-400"><FaLink/></i>
                                    </div>
                                    <div className="col-9">
                                        <p className="font-medium p-1 font-sans  text-blue-800">add mokoro</p>
                                    </div>
                                </div>                
                            </a>
                        </li>
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="/addcarrental">
                                <div class="row">
                                    <div className="col-3 pl-20">
                                        <i className="text-xl text-indigo-500"><FaBook/></i>
                                    </div>
                                    <div className="col-9">
                                        <p className="font-medium p-1 font-sans  text-blue-800">add car rental</p>
                                    </div>
                                </div>                
                            </a>
                        </li>
                        
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="">
                                <div class="row">
                                    <div className="col-3 pl-20">
                                        <i className="text-xl text-gray-500"><FaSatelliteDish/></i>
                                    </div>
                                    <div className="col-9">
                                        <p className="font-medium p-1 font-sans  text-blue-800">add travel agency</p>
                                    </div>
                                </div>                
                            </a>
                        </li>

                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="">
                                <div class="row">
                                    <div className="col-3 pl-20">
                                        <i className="text-xl text-blue-600"><FaRocketchat/></i>
                                    </div>
                                    <div className="col-9">
                                        <p className="font-medium p-1 font-sans  text-blue-800">add currency exchange</p>
                                    </div>
                                </div>                
                            </a>
                        </li>

                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="/addboat">
                                <div class="row">
                                    <div className="col-3 pl-20">
                                        <i className="text-3xl text-red-300"><FaExclamationTriangle/></i>
                                    </div>
                                    <div className="col-9">
                                        <p className="font-medium p-1 font-sans  text-blue-800">add boat</p>
                                    </div>
                                </div>                
                            </a>
                        </li>
                        <li className="text-center hover:bg-blue-100 rounded-xl p-1">
                            <a href="/">
                                <div class="row">
                                    <div className="col-3 pl-20">
                                        <i className="text-4xl text-blue-600"><FaSignOutAlt/></i>
                                    </div>
                                    <div className="col-9">
                                        <p className="font-medium p-1 font-sans  text-blue-800">Logout</p>
                                    </div>
                                </div>                
                            </a>
                        </li>
                    </ul>
                </div>
                
        </>
    )
}
export default NavLeft;
