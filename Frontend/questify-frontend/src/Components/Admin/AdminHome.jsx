import React from 'react'
import '../css/AdminHome.css'
import SidebarAdmin from './SidebarAdmin'
import UsersList from './UsersList'
import AdminQuestions from './AdminQuestions'

function AdminHome() {
  return (
    <div className='homepage'>
    <div><SidebarAdmin/></div>
    <h1 style={{position:"relative",right:"450px",top:"250px",fontFamily:"monospace"}}>Welcome Admin</h1>
    {/* <div><UsersList/></div> */}
    {/* <div><AdminQuestions/></div> */}
    </div>
  )
}

export default AdminHome