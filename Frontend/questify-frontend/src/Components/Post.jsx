import React from "react";
import "./css/Post.css";
import { Avatar } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Post() {
  return (
    <div className="post">
      <div className="post-info">
        <Avatar />
        <h4>User Name</h4>
        <small>Timestamp</small>
      </div>
      <div className="post-body">
        <p>This is test question</p>
        <button className="post-answerbtn">Answer</button>
      </div>
      <div className="post-footer">
        <div className="post-footerAction">
          <ArrowUpwardIcon />
          <ArrowDownwardIcon />
        </div>
        <ChatBubbleOutlineIcon />
        <ShareIcon />
      </div>
      <div className="post-footer-right">
        <MoreHorizIcon />
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        1 Answer
      </p>
      <div
        style={{
          margin: "5px 0px 0px 0px",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post-answer"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px 5px",
            borderTop: "1px solid lightgray",
          }}
          className="post-answer-container"
        >
          <div  style={{
            display: "flex",
            alignItems:"center",
            marginBottom:"10px",
            fontSize:"12px",
            fontWeight:600,
            color:"#888"
          }} className="post-answered">
            <Avatar />
            <div style={{
                margin:"0px 10px"
            }} className="post-info">
              <p>User Name</p>
              <span>Timestamp</span>
            </div>
          </div>
          <div className="post-answer">This is test Answer</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
