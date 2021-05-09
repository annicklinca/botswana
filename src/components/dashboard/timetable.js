import  React,{useEffect, useState} from "react";
import "../../css/tailwindcss.css";
import "../../css/dashboard.css";
import Navbar from './Navbar';
import NavLeft from './NavLeft';
import {  FaAngleRight, FaCalendarAlt, FaComment, FaFacebookMessenger, FaMap } from 'react-icons/fa';
import cartoon from '../../images/drain.jpg';
import kid from '../../images/drain.jpeg';
import pic from '../../images/drain.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cityplus from '../../images/drain.png';
import teacher from '../../images/drain.jpeg';
import { FaSquare } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaStar} from 'react-icons/fa';
import { FaQuestion} from 'react-icons/fa';
import { FaEnvelope} from 'react-icons/fa';
import { FaPhoneSquare} from 'react-icons/fa';
import { FaAngleLeft} from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios'
// import urlPath from '../../constant'

function Timetable() {
    const [time, setTime]=useState('')
    const [teacherId, setTeacherId] = useState('')
    const [subjectId,setSubjectId]=useState('')
    const [classId,setClassId]=useState('')
    const [loading,setLoading]=useState(false)
    const [isError,setIserror]=useState(false)
    const [message,setMessage]=useState('')
    const token=localStorage.getItem('token')
    const [data,setData]=useState([]);
    const [msg,setMsg]=useState('')
    useEffect( ()=>{
    axios.get(`${urlPath.classes}`, { header: {"Authorization" :token} })
        
        .then(res=>{
            setData(res.data.data)

        })
        .catch((err)=>{
            //console.log(err)
        })
    })
    console.log(data+"here")
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data1={
           time:time,
           subjectId:subjectId,
           classId:classId
        }

        axios.post(urlPath.timetables,data1,{
            headers:{
                'Authorization':token
            }
        })
        .then((res)=>{
            
                setMsg("done")
               
            
        })

    }
        
     
    
      
    
    
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
                <div className="bg-blue-100 rounded-lg">
               <div className="bg-blue-100 rounded-lg md:mr-4 flex flex-wrap"> 
                <div className="w-full md:w-2/6 md:pl-8">
                     <div className="m-2 p-2">
                         <span className="font-medium font-bold text-gray-700 text-2xl">Timetable</span>
                         <div className="mt-4">
                       <img src={teacher} className="w-64 h-64"/>
                         </div>
                      
                     </div>
                    
                   
                </div>
                <div className="w-full md:w-4/6">
                    <div className="row p-4">
                        <div className="col-md-12 mt-2"> 
                        <div className="p-12 mt-4 pt-4 row bg-white rounded-xl">
                             <h2 className="font-bold text-blue-900 text-md font-italic">Timetable Form</h2>
                             <input type="text" className="p-2 border-1 border-gray-300 rounded-sm" required="" placeholder="fill the teacher name" />
                             <input type="text" className="p-2 mt-2 border-1 border-gray-300 rounded-sm" required="" placeholder="fill the time" />
                             <input type="text" className="p-2 mt-2 border-1 border-gray-300 rounded-sm" required="" placeholder="fill the course name" />
                             <select value={classId} onChange={(e)=>setClassId(e.target.value)} className="p-2 mt-2 border-1 bg-white text-black rounded-sm">
                                 {data.map((item, key)=>{
                                     return(
                                    <option value={item.classId}>{item.className}</option>
                                     )
                                 }
                                 )}
                                
                               
                             </select>

                             <div className="from-label-group">
              <button onClick="" className="bg-indigo-500 mt-4 w-100 h-12  text-white rounded-full hover:bg-blue-400">Send</button>
 </div> 
                         </div>
                        </div>
                      
                    </div>
                
                                   
                </div>
            </div>
            
             <div className="pl-24">
             <div className="row">
                        <div className="col-sm-10"> 
                            <div className="row bg-white rounded-xl shadow-lg  pt-4 pb-4">     
                          
                                   
                                          <div className="col-1 ml-8 flex">
                                      <h2 className="font-bold text-sm"> Class</h2>
                                      </div>
                                      <div className="col-1 flex gap-1">
                                          <snap className="flex text-blue-500"><FaAngleLeft/></snap>
                                          <snap className="flex font-bold text-sm">S3</snap>
                                          <snap className="flex text-blue-500 "><FaAngleRight/></snap>
                                        
                                          </div>
                                    <div className="col-7 ml-24 "><h3 className="font-bold text-xs mt-1 ml-64">School:GS ST JOSEPH KABGAYI</h3></div>

                                    <div className="col-1 ml-8 flex">
                                      <h2 className="font-bold text-sm"> From </h2>
                                      </div>
                                      <div className="col-3 flex gap-1">
                                          <snap className="flex text-blue-500"><FaAngleLeft/></snap>
                                          <snap className="flex font-bold text-sm">20.07.2020</snap>
                                          <snap className="flex text-blue-500 "><FaAngleRight/></snap>
                                        
                                          </div>
                                          <div className="col-1 ml-64 flex">
                                      <h2 className="font-bold text-sm"> To </h2>
                                      </div>
                                      <div className="col-1 flex gap-1">
                                          <snap className="flex text-blue-500"><FaAngleLeft/></snap>
                                          <snap className="flex font-bold text-sm">27.07.2020</snap>
                                          <snap className="flex text-blue-500 "><FaAngleRight/></snap>
                                        
                                          </div>
                                    <div className="overflow-auto">
                                     <table className="p-4 ml-4 border-2 border-white shadow-xl ">
                                      <tr>
                                          <th className="bg-white p-2 text-blue-800 text-md font-bold border-2 border-gray-400">Hours</th>
                                          <th className="bg-white p-2 text-blue-800 text-md font-bold border-2 border-gray-400">Monday</th>
                                          <th className="bg-white p-2 text-blue-800 text-md font-bold border-2 border-gray-400">Tuesday</th>
                                          <th className="bg-white p-2 text-blue-800 text-md font-bold border-2 border-gray-400">Wednesday</th>
                                          <th className="bg-white p-2 text-blue-800 text-md font-bold border-2 border-gray-400">Thursday</th>
                                          <th className="bg-white p-2 text-blue-800 text-md font-bold border-2 border-gray-400">Friday</th>
                                          <th className="bg-white p-2 text-blue-800 text-md font-bold border-2 border-gray-400">Saturday</th>
                                          <th className="bg-white p-2 text-blue-800 text-md font-bold border-2 border-gray-400">Sunday</th>

                                      </tr>
                                      <tr>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">8:00-10:00</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Mathematics<br/>TR.Alloys</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">English<br/>TR.Kentyu</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Mathematics<br/>TR.Weki</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Kinyarwanda<br/>TR.Aline</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Biology<br/>TR.Kayumba</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Chemistry<br/>TR.Kagabo</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400"></th>

                                      </tr>
                                      <tr>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">10:00-12:00</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Mathematics<br/>TR.Alloys</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">English<br/>TR.Kentyu</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Mathematics<br/>TR.Weki</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Kinyarwanda<br/>TR.Aline</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Biology<br/>TR.Kayumba</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Chemistry<br/>TR.Kagabo</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400"></th>

                                      </tr>
                                      <tr>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">12:00-14:00</th>
                                          <th className="bg-green-300 p-2  text-gray-600 text-md font-bold "></th>
                                          <th className="bg-green-300 p-2 text-gray-600 text-md font-bold "></th>
                                          <th className="bg-green-300 p-2 text-gray-600 text-md font-bold "></th>
                                          <th className="bg-green-300 p-2 text-gray-600 text-md font-bold "></th>
                                          <th className="bg-green-300 pl-4 p-2 text-gray-600 text-md font-bold "></th>
                                          <th className="bg-green-300 p-2 text-white text-md font-bold "></th>
                                          <th className="bg-green-300 p-2 text-white text-md font-bold border-2 border-gray-400"></th>

                                      </tr>
                                      <tr>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">14:00-15:00</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Mathematics<br/>TR.Alloys</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">English<br/>TR.Kentyu</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Mathematics<br/>TR.Weki</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Kinyarwanda<br/>TR.Aline</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Biology<br/>TR.Kayumba</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Chemistry<br/>TR.Kagabo</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400"></th>

                                      </tr>
                                      <tr>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">15:00-16:00</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Mathematics<br/>TR.Alloys</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">English<br/>TR.Kentyu</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Mathematics<br/>TR.Weki</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Kinyarwanda<br/>TR.Aline</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Biology<br/>TR.Kayumba</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Chemistry<br/>TR.Kagabo</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400"></th>

                                      </tr>
                                      <tr>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">16:00-17:00</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Mathematics<br/>TR.Alloys</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">English<br/>TR.Kentyu</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Mathematics<br/>TR.Weki</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Kinyarwanda<br/>TR.Aline</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Biology<br/>TR.Kayumba</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400">Chemistry<br/>TR.Kagabo</th>
                                          <th className="bg-white p-2 text-gray-600 text-md font-bold border-2 border-gray-400"></th>

                                      </tr>
                                     </table>
                                
                               
                                
                                     </div>
                               
                            </div>
                        </div>
                    </div>
             </div>

            </div>
            </div>
        </div>
        </>
    )
}
export default Timetable;
