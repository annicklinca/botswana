import { Form } from "react-bootstrap";
import React,{useState,useMemo } from 'react';
import {useHistory} from "react-router-dom";
import "../css/tailwindcss.css";
import "../css/sign.css";
import Select from 'react-select';
import countryList from 'react-select-country-list';
import axios from 'axios'
function Signup() {

  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

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
                                      Create account
                                </h3>
                                <h5 className="text-center font-semibold">Already have an account? <a href="/signin" className="text-blue-700 hover:text-yellow-500">Log In</a></h5>
                                
                                
                                <button type="button" class="bg-white inline-block rounded-full  styledbutton_rounded_button__3OCrW w-100 h-12 justify-content-center mb-0 metro">
                                <a href="http://www.google.com/login" className=""><svg width="24" height="23" class="mx-8 my-2 inline-block" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" fill="#485A96"></path></svg>
                                  Continue with Google</a></button>
                                <button type="button" class="mt-4 bg-white inline-block rounded-full  styledbutton_rounded_button__3OCrW w-100 h-12 justify-content-center mb-0 metro">
                                <a href="http://www.twitter.com/login" className=""><svg width="24" height="23" class="mx-8 my-2 inline-block" viewBox="" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="23" fill="currentColor" class="mx-8 my-2 inline-block" viewBox="0 0 16 16">
                                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" fill="485A96"></path></svg>
                                                    
                                  Continue with twitter</a></button>
                             


                                  {passerror? <p className="bg-red-200 pr-4 pl-4 pt-2 pb-2 font-medium text-red-800">{passerror}</p>
                                  :<span></span>}
                                  {success? <p className="bg-green-200 pr-4 pl-4 pt-2 pb-2 font-medium text-red-800">{success}</p>
                                  :<span></span>}
                                  {notsuccess? <p className="bg-red-200 pr-4 pl-4 pt-2 pb-2 font-medium text-red-800">{notsuccess}</p>
                                  :<span></span>}
                                  <form class="pt-3 pb-5 pl-5 pr-5" onSubmit={handleSignup}>
                                    <div class="form-group">
                                      <label className="font-normal text-green-700 font-bold">FULL NAME</label>
                                      <input type="text" className="form-control rounded-full p-4" value={firstname} onChange={event=>setFirstname(event.target.value)} placeholder="Enter full name" required />
                                    </div>
                                    
                                    
                                    <div class="form-group">
                                      <label className="font-normal text-green-700 font-bold">EMAIL</label>
                                      <input type="emal" className="form-control rounded-full p-4" value={email} onChange={event=>setEmail(event.target.value)} placeholder="Enter your email" required />
                                    </div>
                                    <div class="form-group">
                                      <label className="font-bold text-green-700 font-bold ">PASSWORD</label>
                                      <input type="password" className="form-control rounded-full p-4" value={password} onChange={event=>setPassword(event.target.value)} placeholder="Enter password" required />
                                    </div>
                                    <div class="form-group">
                                    <label className="font-normal text-green-700 font-bold">Country of Residence</label>
                                    <Select options={options} value={value} onChange={changeHandler} />
                                    </div>
                                    <div class="form-group">
                                      <label className="font-normal text-green-700 font-bold">PHONE NUMBER</label>
                                      <input type="text" className="form-control rounded-full p-4"value={phonenumber} onChange={event=>setPhonenumber(event.target.value)} placeholder="Enter phone number" required />
                                    </div>
                                    <div class="form-group">
                                      <label className="font-normal text-green-700  font-bold">GENDER</label> <br/>
                                      <select className="rounded-sm w-ful p-2" value={gender} onChange={event=>setGender(event.target.value)}>
                                        <option>Male</option>
                                        <option>Female</option>
                                      </select>
                                    </div>
                                    
                                    
                                    <button class="btn btn-success my-4 btn-block waves-effect waves-light rounded-full" type="submit">
                                    {loading?<span>Please wait...</span>:<span>Sign up</span>}
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
export default Signup;
