import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar } from "@mui/material";
import "../css/Profile.css";

function BrowseUser() {
  const { id } = useParams();
  const navigate = useNavigate();
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
    <div>
      {userlists
        .filter((value) => value._id == id)
        .map((value) => (
          <div>
            <div>
              <ArrowBackIcon
                className="back-btn"
                onClick={() => navigate("/adminhome")}
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
            </div>
          </div>
        ))}
    </div>
  );
}

export default BrowseUser;
