import './App.css'
import { Route, Routes } from 'react-router-dom'
import { myContext } from './Components/Context';
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import { useState } from 'react';

function App() {
  const [search,setSearch]=useState('')

  return (
    <>
    <myContext.Provider value={{search,setSearch}}>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
   </myContext.Provider>
    </>
  )
}

export default App
