import React, {  useEffect, useState } from "react";
import "./css/Profile.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { Card } from 'react-bootstrap';
import axios from "axios";
import Post from "./Post";

function Profile() {
  const user = useSelector(selectUser);
  console.log(user)
  const navigate = useNavigate() 
  const [posts, setPosts] = useState([]);


  
  return (
    <div className="maindiv">
      {/* <div>
        <ArrowBackIcon className="back-btn" onClick={()=>navigate('/home')}/>
        <Avatar
          sx={{
            width: "100px !important",
            height: "100px !important",
          }}
          src={user?.photo}
        />
      </div>
      <div>
        <h1>{user?.userName}</h1>
        <h4 className="email">Email:{user?.email}</h4>
      </div> */}
      {/* <div className="card"> */}
      <Card style={{ width: '20rem' }} className="shadow p-3 mb-5 bg-body-tertiary rounded ">
      <Card.Body>
        <Card.Title><Avatar src={user?.photo}/></Card.Title>
        <Card.Title>{user?.userName}</Card.Title>
        <Card.Text>
        Email:{user?.email}
        </Card.Text>      
        <Card.Text>
        <button className="postbutton" onClick={()=>navigate('/profileposts')}>show my posts</button>
        </Card.Text>      
      </Card.Body>
    </Card>
    {/* </div> */}
    
    </div>
  );
}

export default Profile;
