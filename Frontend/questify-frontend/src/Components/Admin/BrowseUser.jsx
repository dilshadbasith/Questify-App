import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function BrowseUser() {
    const {id} =useParams()
    const [userlists, setUserlists] = useState([]);
  console.log(userlists);
  useEffect(() => {
    async function user() {
      const userlist = await axios.get(
        "http://localhost:3000/api/admin/getuser"
      );
      setUserlists(userlist.data);
    }
    user();
  }, []);
  return (
    <div>{userlists.filter((value)=>value._id==id).map((value)=>(
        <h1>{value.email}</h1>
    ))}</div>
  )
}

export default BrowseUser