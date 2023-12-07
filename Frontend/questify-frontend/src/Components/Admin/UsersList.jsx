import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "../css/usersList.css";
import axios from "axios";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SidebarAdmin from "./SidebarAdmin";
import "../css/AdminHome.css";
import MappingUsers from "./MappingUsers";
import Pagination from "./Pagination";

function UsersList() {
  const [userlists, setUserlists] = useState([]);

  const [currentpage, setCurrentpage] = useState(1);
  const [usersperpage, setUsersperpage] = useState(6);

  useEffect(() => {
    async function user() {
      const userlist = await axios.get(
        "https://questify-ttdm.onrender.com/api/admin/getuser"
      );
      setUserlists(userlist);
    }
    user();
  }, []);

  const lastUserIndex = currentpage * usersperpage;
  const firstUserIndex = lastUserIndex - usersperpage;
  const currentUsers = userlists?.data?.slice(firstUserIndex, lastUserIndex);

  return (
    <div className="homepage">
      <div>
        <SidebarAdmin />
      </div>
      <div className="main">
        <h1>users</h1>
        <div className="d-flex flex-column gap-3 ">
          {/* {userlists.data
        ? userlists.data?.map((value) => (
            <Card style={{cursor:"pointer"}} className="listgroup" onClick={()=>navigate(`/browseuser/${value._id}`)}>
              <div className="elements">
                <Avatar />
                <Card.Body>{value.name}</Card.Body>          
              </div>
            </Card>
          ))
        : null} */}
          <MappingUsers userlists={currentUsers} />
          <Pagination
            totalUsers={userlists?.data?.length}
            usersperpage={usersperpage}
            setCurrentpage={setCurrentpage}
            currentpage={currentpage}
          />
        </div>
      </div>
    </div>
  );
}

export default UsersList;
