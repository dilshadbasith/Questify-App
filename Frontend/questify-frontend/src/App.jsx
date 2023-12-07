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
import AdminQuestions from './Components/Admin/AdminQuestions';
import AdminAnswers from './Components/Admin/AdminAnswers';
import ErrorPage from './Components/ErrorPage';
import ProfilePosts from './Components/ProfilePosts';
import ProfileAnswers from './Components/ProfileAnswers';
import { ToastContainer } from 'react-toastify';

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

      }
    })
  },[dispatch])

  return (
    <>
    <ToastContainer/>
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
    <Route path='/posts' element={<AdminQuestions/>}/>
    <Route path='/adminanswers' element={<AdminAnswers/>}/>
    <Route path='/profileposts' element={<ProfilePosts/>}/>
    <Route path='/profileanswers' element={<ProfileAnswers/>}/>
    <Route path='/*' element={<ErrorPage/>}/>
   </Routes>
   </myContext.Provider>
    </>
  )
}

export default App
