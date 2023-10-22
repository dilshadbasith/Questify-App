import { Avatar } from '@mui/material'
import React from 'react'
import './css/QuestionBox.css'

function QuestionBox()  {
  return (
    <div className='QuestionBox'>
        <div className='QuestionBox-info'>
            <Avatar/>
        </div>
        <div className='QuestionBox-question'>
            <h5>What is your question?</h5>
        </div>
    </div>
  )
}

export default QuestionBox