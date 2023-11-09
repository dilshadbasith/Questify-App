import React from "react";
import "./css/Profile.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="maindiv">
      <div>
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
      </div>
    </div>
  );
}

export default Profile;
