import { Form } from "react-bootstrap";
import React,{useState} from 'react';
import {useHistory} from "react-router-dom";
import "../css/tailwindcss.css";
import "../css/sign.css";
import axios from 'axios'
function Signin() {
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[loading,setLoading]=useState("");
  const[message,setMessage]=useState("");
  let history=useHistory();
  const handleLogin=(event)=>{
     
      event.preventDefault();
      const data={
          "username":username,
          "password":password,
          
      }
      axios.get("http://localhost:8000/user-register/",data)
.then((res)=>{
  sessionStorage.setItem('token',res.data.token);
  sessionStorage.setItem('username',res.data.username);
  console.log(res.data)
  setLoading(false);
  setMessage("login successful");
  setLoading(false);
  history.push('/homes_welcome')


    })
    .catch((err)=>{
      console.log(err)
      setLoading(false);
      setMessage("login failed"); 
  })
}

    return(
        <>

        <div className="bgimage h-100">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="p-5">
                <p className="text-5xl"></p>

              </div>
            </div>
            <div className="w-full md:w-1/2 md:rounded-tl-3xl bg-gray-100">
              <div className="pt-3 pl-6 pr-6">
                  <div class="container my-4">  
                            <div class="row">
                              <div class="col-md-12 mb-4">
                                <h1 class="text-center font-serif font-bold">Login</h1>
                                  <form class="pt-2"   onSubmit={handleLogin} method="POST" >
                                    <div class="form-group">
                                    {message? <p className="bg-red-200 pr-4 pl-4 pt-2 pb-2 font-medium text-red-800">{message}</p>
                            :<span></span>}
                                    </div>
                                    <div class="form-group">
                                      <label className="font-bold text-green-700 font-bold ">EMAIL</label>
                                      <input type="emal" className="form-control rounded-full p-4" value={username} onChange={event=>setUsername(event.target.value)} placeholder="Enter your email" required />
                                    </div>
                                    <div class="form-group">
                                      <label className="font-bold text-green-700 font-bold ">PASSWORD</label>
                                      <input type="password" className="form-control rounded-full p-4" value={password} onChange={event=>setPassword(event.target.value)} placeholder="Enter password" required />
                                    </div>
                                    <button class="btn btn-success my-4 btn-block waves-effect waves-light rounded-full " type="submit">
                                    {loading?<span>please wait .....</span>:<span>Sign In</span>}
                                    </button>
                                    <a class="mt-4 mb-2 d-block text-center" href="#">Forgot Password?</a>
                                    <p class="text-center">Don't have account? <a href="/signup" class="text-blue-700">Sign up</a ></p>
                          
                                    <p>By signing up you agree to the BTSW! Terms of Service andPrivacy Policy
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
export default Signin;
