import React from 'react'
import './css/Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const navigate=useNavigate()
    const Login = async (e) =>{
        e.preventDefault()
        const username = e.target.username.value
        const password=e.target.password.value
        const logger=await axios.post("http://localhost:3000/api/user/login",{
            "username":username,
            "password":password
        })
        
        if(logger.data.status=="success"){
            navigate('/')
        }else{
            alert("not a user")
        }
    }
  return (
    <div className='d-flex justify-content-center align-items-center '>
        <form action="" onSubmit={Login}>
    <div className='cover'>
       <div> <h1 className='loginh1'>Login</h1></div>
       <div> <input className='textbox' type="text" id='username' placeholder='username' /><br /><br /><br />
        <input className='textbox' type="text" id='password' placeholder='password'/></div>
        <div><button className='login-btn'>Login</button></div>
    <p>Don't have an account?<a href="" onClick={()=>navigate('/register')}>SignUp</a></p>
    </div>
    </form>
    </div>
  )
}

export default Login