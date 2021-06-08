import { Form } from "react-bootstrap";
import React,{useState} from 'react';
import {useHistory} from "react-router-dom";
import "../css/tailwindcss.css";
import "../css/sign.css";
import axios from 'axios';
function Listservices() {

  const [firstname, setFirstname]=useState('')
  const [lastname, setLastname]=useState('')
  const [username, setUsername]=useState('')
  const [email, setEmail] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [gender, setGender] =useState('')
  const [password,setPassword]=useState('')
  const [repassword,setRepassword]=useState('')
  const [loading,setLoading]=useState(false)
  const [passerror,setErrorPass]=useState(false)
  const [success,setSuccess]=useState(false);
  const [notsuccess,setNosuccess]=useState(false);
  let history=useHistory();

  const handleSignup=(event)=>{
    setLoading(true);
    event.preventDefault();
    if (repassword != password){
            setErrorPass("oops! two password not match");
            setLoading(false)
    }
    else{
        setLoading(true)
        const data={
          "username": username,
          "email": email,
          "password": password,
          "userregisted": {
              "phone": phonenumber,
              "gender": gender                    
          },
          "first_name": firstname,
          "last_name": lastname
    }

    axios.post("http://127.0.0.1:8000/user-register/",data)
    .then((res)=>{
        console.log(res.data)
        setSuccess("Account Create Successfull")
        setLoading(false)
        sessionStorage.setItem('token',res.data.token);
        sessionStorage.setItem('username',res.data.username);
        history.push('/homes_welcome')
    })
    .catch((err)=>{
        console.log(err)
        setLoading(false)
        setNosuccess("oops! Create Account Fail! plz check well..")
    })

  }
}
    return(
        <>

        <div className="bgimage">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="p-5">
                <p className="text-5xl"></p>

              </div>
            </div>
            <div className="w-full md:w-1/2 md:rounded-tl-3xl  bg-gray-100">
              <div className="pt-3 pl-6 pr-6">
                  <div class="container my-4">  
                            <div class="row">
                              <div class="col-md-12 mb-4">
                          
                                <h3 className="font-bold text-green-700 text-center p-1">
                                      Register Your Services
                                </h3>
                                {/* <h5 className="text-center font-semibold">Already have an account? <a href="/signin" className="text-blue-700 hover:text-yellow-500">Log In</a></h5>
                                
                                <button type="button" class="bg-white inline-block rounded-full  styledbutton_rounded_button__3OCrW w-100 h-12 justify-content-center mb-0 metro">
                                <a href="#" className="text-black"><svg width="24" height="23" class="mx-8 my-2 inline-block" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21.7911 0.486328H1.8506C1.16738 0.486328 0.613281 1.04043 0.613281 1.72365V21.6642C0.613281 22.3474 1.16738 22.9015 1.8506 22.9015H12.5857V14.2215H9.66453V10.8386H12.5857V8.3433C12.5857 5.44815 14.3538 3.87192 16.9369 3.87192C18.1742 3.87192 19.2376 3.96427 19.5469 4.00551V7.03156L17.7555 7.03246C16.3505 7.03246 16.0789 7.69953 16.0789 8.67953V10.8395H19.4286L18.9919 14.2224H16.078V22.9015H21.7911C22.4744 22.9015 23.0285 22.3474 23.0285 21.6642V1.72365C23.0285 1.04043 22.4744 0.486328 21.7911 0.486328Z" fill="#485A96"></path></svg>
                                  Continue with Facebook</a></button>
                                  {passerror? <p className="bg-red-200 pr-4 pl-4 pt-2 pb-2 font-medium text-red-800">{passerror}</p>
                                  :<span></span>}
                                  {success? <p className="bg-green-200 pr-4 pl-4 pt-2 pb-2 font-medium text-red-800">{success}</p>
                                  :<span></span>}
                                  {notsuccess? <p className="bg-red-200 pr-4 pl-4 pt-2 pb-2 font-medium text-red-800">{notsuccess}</p>
                                  :<span></span>} */}
                                  <form class="pt-3 pb-5 pl-5 pr-5" onSubmit={handleSignup}>
                                    <div class="form-group">
                                      <label className="font-normal text-green-700 font-bold">Name of Services Owner</label>
                                      <input type="text" className="form-control rounded-full p-4" value={firstname} onChange={event=>setFirstname(event.target.value)} placeholder="Enter full name" required />
                                    </div>
                                    <div class="form-group">
                                      <label className="font-normal text-green-700 font-bold">Name of The Services</label>
                                      <input type="text" className="form-control rounded-full p-4" value={lastname} onChange={event=>setLastname(event.target.value)} placeholder="Enter your services name" required />
                                    </div>
                                    
                                    <div class="form-group">
                                      <label className="font-normal text-green-700 font-bold"> Services Owner EMAIL</label>
                                      <input type="emal" className="form-control rounded-full p-4" value={email} onChange={event=>setEmail(event.target.value)} placeholder="Enter your email" required />
                                    </div>
                                    
                                    <div class="form-group">
                                      <label className="font-normal text-green-700 font-bold">Services Categories</label> <br/>
                                      <select className="rounded-sm w-ful p-2" value={gender} onChange={event=>setGender(event.target.value)}>
                                        <option>Hotel and Loges</option>
                                        <option>Travel Agencies</option>
                                        <option>Restaurants</option>
                                        <option>Night Clubs</option>
                                        <option>Car Rental</option>
                                        <option>Boat</option>
                                        <option>Mokoro</option>
                                        <option>Currency Exchange Services</option>

                                      </select>
                                    </div>
                                    
                                    
                                    <button class="btn btn-success my-4 btn-block waves-effect waves-light rounded-full" type="submit">
                                    {loading?<span>Please wait...</span>:<span>Register</span>}
                                    </button>
                          
                                    <p>By clicking By creating an account you agree to the BTSW!
                                      Terms of Service and Privacy Policy
                                    </p>
                                  </form>
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
export default Listservices;
