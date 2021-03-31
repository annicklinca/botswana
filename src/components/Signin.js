import { Form } from "react-bootstrap";
import React,{useState,useHistory} from 'react';
import "../css/tailwindcss.css";
import "../css/sign.css";
import axios from 'axios'
function Signin() {

  const [fullname, setFullname]=useState('')
  const [email, setEmail] = useState('')
  const [password,setPassword]=useState('')
  const [pass, setPass] =useState('')
  const [loading,setLoading]=useState(false)
  const [isError,setIserror]=useState(false)
  const [message,setMessage]=useState('')

  const handleSignin=(event)=>{
   
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
                                  <form class="pt-2">
                                    <div class="form-group">
                                    
                                      
                                    </div>
                                    <div class="form-group">
                                      <label className="font-bold text-green-700 font-bold ">EMAIL</label>
                                      <input type="emal" className="form-control rounded-full p-4" placeholder="Enter your email" required />
                                    </div>
                                  
                                    <div class="form-group">
                                      <label className="font-bold text-green-700 font-bold ">PASSWORD</label>
                                      <input type="password" className="form-control rounded-full p-4" placeholder="Enter password" required />
                                    </div>
                                    <button class="btn btn-success my-4 btn-block waves-effect waves-light rounded-full " type="submit">Sign in</button>
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
