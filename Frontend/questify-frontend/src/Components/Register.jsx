import React from 'react'
import './css/Login.css'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

function Register() {
    const navigate=useNavigate()

    const Register= async (e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const username=e.target.username.value
        const password=e.target.password.value
        await axios.post("http://localhost:3000/api/user/register",{
                   "name":name,
                   "email":email,
                   "username":username,
                   "password":password
       })
       alert("Registered successfully")
    }

  return (
    <div className='d-flex justify-content-center align-items-center '>
        <form action="" onSubmit={Register}>
    <div className='cover'>
       <div> <h1 className='loginh1'>Register</h1></div>
       <div> <input className='textbox' type="text" id='name' placeholder='Full name' required/><br /><br />
       <input className='textbox' type="text" id='email' placeholder='Email' required /><br /><br />
       <input className='textbox' type="text" id='username' placeholder='username' required /><br /><br />
        <input className='textbox' type="text" id='password' placeholder='password'required/></div>
        <div><button className='login-btn' type='submit'>SignUp</button></div>
    <p>Already have an account?<a href="" onClick={()=>navigate('/login')}>Login</a></p>
    </div>
    </form>
    </div>
  )
}

export default Register