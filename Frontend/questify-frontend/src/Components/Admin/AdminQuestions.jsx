import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Post from '../Post';
import SidebarAdmin from './SidebarAdmin';
import '../css/AdminHome.css'


function AdminQuestions() {
    const [questionlists, setQuestionlists] = useState([]);
    useEffect(() => {
        async function question() {
          const questionlist = await axios.get(
            "http://localhost:3000/api/admin/getquestions"
          );
          setQuestionlists(questionlist.data);
        }
        question();
      }, []);
  return (
    <div className="homepage">
        <div><SidebarAdmin/></div>
        <div>
        {questionlists.map((post,index)=>(
            <Post key={index} post={post}/>
        ))}
        </div>
    </div>
  )
}

export default AdminQuestions