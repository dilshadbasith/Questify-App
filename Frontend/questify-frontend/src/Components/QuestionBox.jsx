import { Avatar } from '@mui/material'
import React from 'react'
import './css/QuestionBox.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../feature/userSlice'


function QuestionBox()  {
  const user = useSelector(selectUser)
  return (
    <div className='QuestionBox'>
        <div className='QuestionBox-info'>
            <Avatar alt='image' src={user?.photo}/>
        </div>
        <div className='QuestionBox-question'>
          <h5>Hello, {user?.userName}</h5>
            
        </div>
    </div>
  )
}

export default QuestionBox