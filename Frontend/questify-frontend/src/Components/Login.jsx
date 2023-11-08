import React from 'react'
import './css/Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Logo from './assets/Questify.png'
import Google from './assets/google.png'
import {signInWithPopup} from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useCookies } from 'react-cookie';


function Login() {
    const navigate=useNavigate()
    const [_,setcookie]=useCookies(["cookie"])
    const Login = async (e) =>{
        e.preventDefault()
        const username = e.target.username.value
        const password=e.target.password.value
        const logger=await axios.post("http://localhost:3000/api/user/login",{
            "username":username,
            "password":password
        })
        
        if(logger.data.status=="success"){
            setcookie("cookie",logger.data.data)
            navigate('/home')
        }else{
            alert("not a user")
        }
    }

    const handleSubmit= async() =>{
        await signInWithPopup(auth,provider)
        .then((result)=>{
            setcookie("cookie","auth")
            navigate('/home')
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='d-flex justify-content-center align-items-center '>
        <form action="" onSubmit={Login}>
    <div className='cover'>
        <img className='logo' src={Logo} alt="logo" />
       <div> <h1 className='loginh1'>Login</h1></div>
       <div> <input className='textbox' type="text" id='username' placeholder='username' required/><br /><br /><br />
        <input className='textbox' type="text" id='password' placeholder='password' required/></div>
        <div><button className='login-btn'>Login</button></div>
    <p>Don't have an account?<a href="" onClick={()=>navigate('/register')}>SignUp</a></p>
    <button className='google-btn' onClick={handleSubmit}><img className='google' src={Google} alt="google" />SignIn with Google</button>
    </div>
    </form>
    </div>
  )
}

export default Login