import './App.css'
import { Route, Routes } from 'react-router-dom'
import { myContext } from './Components/Context';
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './feature/userSlice';

function App() {
  const [search,setSearch]=useState('')
  const user = useSelector(selectUser)

  return (
    <>
    {
      user? (<Home/>) : (<Login/>)
    }
    <myContext.Provider value={{search,setSearch}}>
   <Routes>
    {/* <Route path='/login' element={<Login/>}/> */}
    <Route path='/register' element={<Register/>}/>
   </Routes>
   </myContext.Provider>
    </>
  )
}

export default App
