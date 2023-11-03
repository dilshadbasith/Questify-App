import React from "react";
import "./css/Post.css";
import { Avatar } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import ReactTimeAgo from "react-time-ago";
import axios from "axios";

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}

function Post({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer,setAnswer]=useState("")
  const Close = <CloseIcon />;


  const handleSubmit=async()=>{
    if(post?._id&&answer!==""){
      const config={
        headers:{
          "Content-Type":"application/json"
        }
      }
      const body={
        answer:answer,
        questionId:post?._id
      }
      await axios.post('http://localhost:3000/api/answers',body,config).then((res)=>{
        console.log(res.data)
        alert("Answer added successfully")
        setIsModalOpen(false)
        window.location.href = '/'
      }).catch((e)=>{
        console.log(e)
      })
    }
  }

  const handleQuill = (value) =>{
    setAnswer(value)
  }
  return (
    <div className="post">
      <div className="post-info">
        <Avatar />
        <h4>User Name</h4>
        <br />
        <small>
          <LastSeen date={post?.createdAt} />
        </small>
      </div>
      <div className="post-body">
        <div className="post-question">
          <p>{post?.questionName}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="post-answerbtn"
          >
            Answer
          </button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
            classNames={{
              modal: "custom-modal",
            }}
          >
            <div className="modal-question">
              <h1>{post?.questionName}</h1>
              <p>
                asked by <span className="name">username</span>on{" "}
                <span className="name">{new Date(post?.createdAt).toLocaleString()}</span>{" "}
              </p>
            </div>
            <div className="modal-answer">
              <ReactQuill value={answer} onChange={handleQuill} placeholder="Enter your answer" />
            </div>
            <div className="modal-button">
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} type="submit" className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        {
          post.questionUrl?<img src={post.questionUrl} alt="no image" />:""
        }
      </div>
      <div className="post-footer">
        <div className="post-footerAction">
          <ArrowUpwardIcon />
          <ArrowDownwardIcon />
        </div>
        <ChatBubbleOutlineIcon />
        <ShareIcon />
        <div className="post-footer-right">
          <MoreHorizIcon />
        </div>
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        {post.allAnswers.length < 2 ? `${post.allAnswers.length} answer` : `${post.allAnswers.length} answers`}

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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#888",
            }}
            className="post-answered"
          >
            <Avatar />
            <div
              style={{
                margin: "0px 10px",
              }}
              className="post-info"
            >
              <p>User Name</p>
              <br />
              {/* <span>Timestamp</span> */}
            </div>
          </div>

          <div className="post-answer">This is test Answer</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
