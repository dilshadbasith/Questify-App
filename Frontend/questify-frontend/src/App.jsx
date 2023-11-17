import './App.css'
import { Route, Routes } from 'react-router-dom'
import { myContext } from './Components/Context';
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './feature/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useCookies } from 'react-cookie';
import Profile from './Components/Profile';
import AdminHome from './Components/Admin/AdminHome';
import BrowseUser from './Components/Admin/BrowseUser';
import UsersList from './Components/Admin/UsersList';

function App() {
  const [search,setSearch]=useState('')
  const dispatch=useDispatch() 
  const [cookie]=useCookies(["cookie"])
  const [cookies]=useCookies(["admincookie"])

  useEffect(()=>{
    onAuthStateChanged(auth,(authUser)=>{
      if(authUser){
        dispatch(
          login({
            userName:authUser.displayName,
            photo:authUser.photoURL,
            email:authUser.email,
            uid:authUser.uid
          })
        )
        console.log("AuthUser",authUser)
      }
    })
  },[dispatch])

  return (
    <>
    <myContext.Provider value={{search,setSearch}}>
    {/* {
      user? (<Home/>) : (<Login/>)
    } */}
   <Routes>
    <Route path='/home' element={cookie.cookie?<Home/>:<Login/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/adminhome' element={cookies.admincookie?<AdminHome/>:<Login/>}/>
    <Route path='/userslist' element={<UsersList/>}/>
    <Route path='/browseuser/:id' element={<BrowseUser/>}/>
   </Routes>
   </myContext.Provider>
    </>
  )
}

export default App
