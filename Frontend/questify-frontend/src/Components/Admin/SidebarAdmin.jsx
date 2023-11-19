import React from 'react'
import '../css/sidebarAdmin.css'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import '../css/AdminSidebar.css'

function SidebarAdmin() {
    const navigate = useNavigate()
    const [cookie,setCookie,removeCookie]=useCookies(["admincookie"])
    const handleLogout=()=>{
      window.confirm("Are you sure to logout?")
        removeCookie('admincookie')
        navigate('/')
    }
  return (
    <div className='sidebar-admin'>
        <div><h2>Admin</h2></div><br /><br />
        <div className='sidebarsubdiv'><h4 onClick={()=>navigate('/userslist')}>Users List</h4></div><br />
        <div className='sidebarsubdiv'><h4 onClick={()=>navigate('/posts')}>Questions</h4></div><br />
        <div className='sidebarsubdiv'><h4 onClick={()=>navigate('/adminanswers')}>Answers</h4></div><br /><br /><br />
        <div><h4 onClick={handleLogout} style={{cursor:"pointer"}}>Logout</h4></div>
    </div>
  )
}

export default SidebarAdmin