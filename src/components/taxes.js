import React,{Component,useState,useEffect} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Footer from './Footer';
import scripture from '../images/scripture.jpeg';
import another from '../images/another.jpeg';
import ascripture from '../images/scrit.jpeg';
import '../App.css'

function Scriptures(){
  const [data, setData] = useState([]);
  const pathed='http://127.0.0.1:8000'
  
  
         //let fetch information
         useEffect( ()=>{
            // async await
           const response = axios.get('http://127.0.0.1:8000/ScriptureGet') 
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
      
<div className="w-full">
<Navbar />
<div>
{data.map( (item,key)=>{
            return(
  <div key={key} className="pl-20 pr-20">
    <h2 className="font-bold p-2">Scriptures</h2>
    <div className="flex flex-wrap bg-white shadow-2xl">
      <div className="w-full md:w-2/6">
    <img className="scripture" src={pathed+item.pictures} alt={item.pictures} /></div>
    <div className="w-full md:w-4/6">
      <p className="pl-2">{item.script} <br></br>
      {item.script} 
     <br></br>{item.verse}</p>
      <br></br>
      <button className="ml-2 bg-black text-yellow-600 w-64 h-8 rounded-lg">Readmore</button>
    </div>
    </div>
    {/* <br></br>
    <div className="flex flex-wrap bg-white shadow-2xl">
      <div className="w-full md:w-2/6">
    <img className="scripture" src={pathed+item.pictures} alt={item.pictures} /></div>
    <div className="w-full md:w-4/6">
      <p className="pl-2">{item.script}<br></br>
      {item.script}
      <br></br>{item.script}<br></br>{item.verse}</p>
      <br></br>
      <button className="ml-2 bg-black text-yellow-600 w-64 h-8 rounded-lg">Readmore</button>
    </div>
    </div> */}
    {/* <br></br>
    <div className="flex flex-wrap bg-white shadow-2xl">
      <div className="w-full md:w-2/6">
    <img className="scripture"  src={pathed+item.pictures} alt={item.pictures}/></div>
    <div className="w-full md:w-4/6">
    <p className="pl-2">{item.script}<br></br>
      {item.script}
      <br></br>{item.script}<br></br>{item.verse}</p>
      <br></br>
      <button className="ml-2 bg-black text-yellow-600 w-64 h-8 rounded-lg">Readmore</button>
    </div>
    </div> */}

  </div>
            )})}
</div>
<Footer/>

</div>
    );
}

export default Scriptures;