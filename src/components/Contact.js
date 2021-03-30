import React, {useState,useEffect} from 'react';
import '../css/tailwindcss.css';
import axios from 'axios';
import Navbar from './navbar.js';
const ContactPage = () => {


  const [fullname,setFullname]=useState("");
  const [subject,setSubject]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("")
  const [loading,setLoading]=useState(false);
  const [messg,setMessg]=useState("")
  


  const handleForm=(e)=>{
    setLoading(true);
    e.preventDefault();
    let data =new FormData();
    data.append('fullname',fullname);
    data.append('subject',subject);
    data.append('email',email);
    data.append('message',message);
    // lets send data to endpoins
    axios.post('https://tuzamurane-ussd.herokuapp.com/contactpost/',data,{
      headers:{'Content-Type':'multipart/form-data'}
    })
    .then((res)=>{
        
        setLoading(false)
        setMessg("Thank you for Contacting us")
        setEmail("")
        setSubject("")
        setFullname("")
        setMessage("")
        // setMessg("")

    })
    .catch((err)=>{
        console.log(err)
        setLoading(false)
        // setMessage(err)
        setMessg("failed to contact us")
    })

}
  return (
    <>
       <Navbar/>
       <div className="contactimage" style={{height:250}}>
         <div class="container">

<h5 className="text-xl font-bold pt-12 text-center text-white">Let's Talk</h5>
<h1 className="py-2 text-4xl font-bold text-center text-white">Contact Us</h1>
</div>   
        </div>
    <div class="container mt-5 ">
    <section class="dark-grey-text mb-5">
      <div class="row mt-4">

        <div class="col-md-5">
        <div class="max-w-md my-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
          <h2 class="text-center">Ask us anything</h2>
      <p class="text-center w-responsive my-2 transition ease-in duration-700 my-3 pb-3">Please do not hesitate to contact us regarding any question about our services. Any email requiring support will be answered not longer than 24 hours.</p>
</div>
          <div class="card bg-gray-100 shadow-xl ">
          <form encType='multipart/form-data'>
            <div class="card-body">

              <div class="form-header">
                <h3 class="mt-2 text-center text-blue-700 text-shadow-md"> Write to us:</h3>
              </div>   
              <hr class="shadow-md bg-gray-100"></hr>
             
               <div class="md-form ">
                <input type="text" class=" shadow appearance-none border text-center w-full my-2 rounded py-2 text-grey-darker" placeholder="Your name"/>
              </div>
              <div class="md-form">
                <input type="text" class=" shadow text-center appearance-none border rounded w-full my-2 py-2  text-grey-darker" placeholder="Your email"/>
              </div>
              <div class="md-form">
                <input type="text" class="shadow text-center appearance-none border rounded w-full my-2 py-2 text-grey-darker" placeholder="Subject"/>
              </div>
              <div class="md-form">
                <textarea rows="5" class=" text-center shadow appearance-none rounded w-full my-2 py-2 text-grey-darker" placeholder="Message"></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="bg-blue-700 hover:bg-blue-400 text-white px-4 py-2">Send a Message</button>
              </div>
            </div>
            </form>
          </div>
    

        </div>
        <div class="col-md-7 w-full">
          <div id="map-container-section" class="map-container-section mb-4">
            <iframe src="https://maps.google.com/maps?q=kigali&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
              frameBorder="0" class="container-section" style={{ border: 0, height: 660, }}  allowfullscreen></iframe>
          </div>
          </div>

      </div>
    </section>
  </div>
  </>
  );
}

export default ContactPage;