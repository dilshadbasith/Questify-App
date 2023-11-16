import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "../css/usersList.css";
import axios from "axios";
import { Avatar } from "@mui/material";

function UsersList() {
  const [userlists, setUserlists] = useState([]);
  console.log(userlists);
  useEffect(() => {
    async function user() {
      const userlist = await axios.get(
        "http://localhost:3000/api/admin/getuser"
      );
      setUserlists(userlist);
    }
    user();
  }, []);
  return (
    <div className="main">
      <h1>users</h1>
      <div className="d-flex flex-column gap-3 ">
        {userlists.data
        ? userlists.data?.map((value) => (
            <Card className="listgroup">
              <div className="elements">
                <Avatar />
                <Card.Body>{value.name}</Card.Body>          
              </div>
            </Card>
          ))
        : null}
        </div>
      
    </div>
  );
}

export default UsersList;
