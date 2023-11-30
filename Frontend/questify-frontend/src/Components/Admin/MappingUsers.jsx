import { Avatar } from "@mui/material";
import Card from "react-bootstrap/Card";
import React from "react";
import "../css/usersList.css";
import "../css/AdminHome.css";
import { useNavigate } from "react-router-dom";

function MappingUsers({ userlists }) {
  const navigate = useNavigate();
  return (
    <div>
      {userlists
        ? userlists?.map((value, index) => (
            <Card
              style={{ cursor: "pointer" }}
              className="listgroup"
              onClick={() => navigate(`/browseuser/${value._id}`)}
              key={index}
            >
              <div className="elements">
                <Avatar />
                <Card.Body>
                  <h6>{value.name}</h6>
                </Card.Body>
              </div>
            </Card>
          ))
        : null}
    </div>
  );
}

export default MappingUsers;
