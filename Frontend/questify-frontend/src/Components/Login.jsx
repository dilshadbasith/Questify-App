import React from 'react'
import './css/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Logo from './assets/Questify.png'
import Google from './assets/google.png'
import {signInWithPopup} from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useCookies } from 'react-cookie';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function Login() {
    const navigate=useNavigate()
    const [_,setcookie]=useCookies(["cookie"])
    const Login = async (e) =>{
        e.preventDefault()
        const username = e.target.username.value
        const password=e.target.password.value
        const logger=await axios.post("https://questify-ttdm.onrender.com/api/login",{
            "username":username,
            "password":password
        })
        
        if(logger.data.status=="success"){
            if(logger.data.message=="Admin Logged in"){
                setcookie("admincookie",logger.data.data)
                navigate('/adminhome')
                toast.success("Admin Login Successfull")
            }else{

                setcookie("cookie",logger.data.data)
                navigate('/home')
                toast.success(data.message)
            }
        }else{
            alert("not a user")
        }
    }

    const handleSubmit= async() =>{
        await signInWithPopup(auth,provider)
        .then((result)=>{
            setcookie("cookie","auth")
            navigate('/home')
            toast.success("Login successfull")
        }).catch((error)=>{
            console.log(error)
            toast.error(error.message)
        })
    }
  return (
    <div className='page'>
        <form action="" onSubmit={Login}>
    <div className='cover'>
        <img className='logo' src={Logo} alt="logo" />
       <div> <h1 className='loginh1'>Login</h1></div>
       <div> <input className='textbox' type="text" id='username' placeholder='username' required/><br /><br /><br />
        <input className='textbox' type="text" id='password' placeholder='password' required/></div>
        <div><button className='login-btn'>Login</button></div>
    <p>Don't have an account?<Link to='/register'>SignUp</Link></p>
    <button className='google-btn' onClick={()=>handleSubmit()}><img className='google' src={Google} alt="google" />SignIn with Google</button>
    </div>
    </form>
    </div>
  )
}

export default Login