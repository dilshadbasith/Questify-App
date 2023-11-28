import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';
import { Avatar } from '@mui/material';
import './css/ProfileNavbar.css'

function ProfileNavbar() {
    const user = useSelector(selectUser);
  return (
    <div className='navprofile'>
        <div className='avatardiv'>
        <Avatar src={user?.photo} sx={{height:60,width:60}}/>&nbsp;&nbsp;
        <h2>{user?.userName}</h2>
        </div>
    </div>
  )
}

export default ProfileNavbar