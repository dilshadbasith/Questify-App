import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar } from "@mui/material";
import { Card } from 'react-bootstrap';
import "../css/Profile.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";

function BrowseUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [userlists, setUserlists] = useState([]);
  // console.log(userlists);
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
    <div>
      {userlists
        .filter((value) => value._id == id)
        .map((value) => (
          <div className="maindiv">
            {/* <div>
              <ArrowBackIcon
                className="back-btn"
                onClick={() => navigate("/userslist")}
              />
              <Avatar
                sx={{
                  width: "100px !important",
                  height: "100px !important",
                }}
                src={value.photo}
              />
            </div>
            <div>
              <h1>{value.name}</h1>
              <h4 className="email">Email:{value.email}</h4>
              <h4 className="email">Username:{value.username}</h4>
            </div> */}
            
            <Card
              style={{ width: "20rem" }}
              className="shadow p-3 mb-5 bg-body-tertiary rounded "
            >
              <Card.Body>
                <Card.Title>
                  <Avatar src={user?.photo} />
                </Card.Title>
                <Card.Title>{value.name}</Card.Title>
                <Card.Text>Email: {value.email}</Card.Text>
                <Card.Text>Username: {value.username}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
}

export default BrowseUser;
