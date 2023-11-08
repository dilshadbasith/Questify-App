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

function App() {
  const [search,setSearch]=useState('')
  const user = useSelector(selectUser)
  const dispatch=useDispatch()

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
    {
      user? (<Home/>) : (<Login/>)
    }
   <Routes>
    {/* <Route path='/login' element={<Login/>}/> */}
    <Route path='/register' element={<Register/>}/>
   </Routes>
   </myContext.Provider>
    </>
  )
}

export default App
