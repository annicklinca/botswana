import { Form } from "react-bootstrap";
import React,{useState,useHistory} from 'react';
import "../css/tailwindcss.css";
import "../css/sign.css";
import axios from 'axios'
function Signup() {

  const [fullname, setFullname]=useState('')
  const [email, setEmail] = useState('')
  const [password,setPassword]=useState('')
  const [pass, setPass] =useState('')
  const [loading,setLoading]=useState(false)
  const [isError,setIserror]=useState(false)
  const [message,setMessage]=useState('')

  const handleSignup=(event)=>{
   
    event.preventDefault()
    const data={
      fullname:fullname,
      email:email,
      category:'teacher',
      password:password
    }
    setLoading(true)
    if(fullname==='' || email ==='' ||password==='' ||pass ===''){
      setMessage('Please fill all fields')
      setIserror(true)
      setLoading(false)
    }
    else{
      if(password===pass){

        // axios.post(`${urlPath.signup}`,data)
        // .then((res)=>{
        //  setMessage(res.data.message)
        //  setLoading(false)
        //  setIserror(true)
        // })
        // .catch((err)=>{
        //   setMessage(err.message)
        //   setLoading(false)
        //  setIserror(true)
        // })
      }else{
        setMessage('Password are not the same')
        setIserror(true)
        setLoading(false)
      }

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
                                <a href="#" className="text-black"><svg width="24" height="23" class="mx-8 my-2 inline-block" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21.7911 0.486328H1.8506C1.16738 0.486328 0.613281 1.04043 0.613281 1.72365V21.6642C0.613281 22.3474 1.16738 22.9015 1.8506 22.9015H12.5857V14.2215H9.66453V10.8386H12.5857V8.3433C12.5857 5.44815 14.3538 3.87192 16.9369 3.87192C18.1742 3.87192 19.2376 3.96427 19.5469 4.00551V7.03156L17.7555 7.03246C16.3505 7.03246 16.0789 7.69953 16.0789 8.67953V10.8395H19.4286L18.9919 14.2224H16.078V22.9015H21.7911C22.4744 22.9015 23.0285 22.3474 23.0285 21.6642V1.72365C23.0285 1.04043 22.4744 0.486328 21.7911 0.486328Z" fill="#485A96"></path></svg>
                                  Continue with Facebook</a></button>
                          
                                  <form class="pt-3 pb-5 pl-5 pr-5">
                                    <div class="form-group">
                                      <label className="font-normal text-green-700 font-bold">FULL NAME</label>
                                      <input type="text" className="form-control rounded-full p-4" placeholder="Enter full name" required />
                                    </div>
                                    <div class="form-group">
                                      <label className="font-normal text-green-700 font-bold">EMAIL</label>
                                      <input type="emal" className="form-control rounded-full p-4" placeholder="Enter your email" required />
                                    </div>
                                    <div class="form-group">
                                      <label className="font-normal text-green-700 font-bold">PHONE NUMBER</label>
                                      <input type="text" className="form-control rounded-full p-4" placeholder="Enter phone number" required />
                                    </div>
                                    <div class="form-group">
                                      <label className="font-normal text-green-700 font-bold">PASSWORD</label>
                                      <input type="password" className="form-control rounded-full p-4" placeholder="Enter password" required />
                                    </div>
                                    <div class="form-group">
                                      <label className="font-normal text-green-700 font-bold">RE-ENTER PASSWORD</label>
                                      <input type="password" className="form-control rounded-full p-4" placeholder="Enter password" required />
                                    </div>
                                    <button class="btn btn-success my-4 btn-block waves-effect waves-light rounded-full" type="submit">Sign up</button>
                          
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
