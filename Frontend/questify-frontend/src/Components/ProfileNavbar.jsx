import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';
import { Avatar } from '@mui/material';
import './css/ProfileNavbar.css'
import { useNavigate } from 'react-router-dom';

function ProfileNavbar() {
    const user = useSelector(selectUser);
    const navigate=useNavigate()
 
    
  return (
    <div className='navprofile'>
        <div className='navmain'>
        <div className='avatardiv'>
        <Avatar src={user?.photo} sx={{height:60,width:60}}/>&nbsp;&nbsp;
        <h2>{user?.userName}</h2>
        </div>
        <div className='answer-btn-div'>
            <h5 onClick={()=>navigate('/home')} style={{cursor:"pointer"}}>Home</h5>
            <h5 onClick={()=>navigate('/profileposts')} style={{cursor:"pointer"}}>Questions</h5>
            <h5 onClick={()=>navigate('/profileanswers')} style={{cursor:"pointer"}} >Answers</h5>
        </div>
        </div>
    </div>
  )
}

export default ProfileNavbar