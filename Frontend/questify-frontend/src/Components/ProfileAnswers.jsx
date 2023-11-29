import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';
import ProfileNavbar from './ProfileNavbar';
import { Avatar } from '@mui/material';
import ReactHtmlParser from "html-react-parser";
import ReactTimeAgo from "react-time-ago";


function LastSeen({ date }) {
  
    return (
      <div>
        <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
      </div>
    );
  }
function ProfileAnswers() {
    const [answerlists, setAnswerlists] = useState([]);
    const user = useSelector(selectUser);
    useEffect(() => {
        axios
          .post("http://localhost:3000/api/user/profileanswers", {
            uid: user?.uid,
          })
          .then((res) => {
            console.log(res.data.reverse());
            setAnswerlists(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }, [user]);
  return (
    <div>
        <div className="sticky-top">
        <ProfileNavbar />
      </div>
        {answerlists?.map((a) => (
          <>
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
                <Avatar alt="image" src={a?.user?.photo} />
                <div
                  style={{
                    margin: "0px 10px",
                  }}
                  className="post-info"
                >
                  <p>{a?.user?.userName} ● </p>
                  <p className="timespan">
                    <LastSeen date={a?.createdAt} />
                  </p>
                </div>
              </div>
              <div className="post-answer">{ReactHtmlParser(a.answer)}</div>
              <div>
                
              </div>
            </div>
          </>
        ))}
    </div>
  )
}

export default ProfileAnswers