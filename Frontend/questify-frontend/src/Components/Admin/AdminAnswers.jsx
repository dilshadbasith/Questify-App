import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import ReactHtmlParser from "html-react-parser";
import "../css/AdminHome.css";
import SidebarAdmin from "./SidebarAdmin";

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}
function AdminAnswers() {
  const [answerlists, setAnswerlists] = useState([]);
  console.log(answerlists);

  useEffect(() => {
    async function answer() {
      const answerlist = await axios.get(
        "http://localhost:3000/api/admin/getanswers"
      );
      setAnswerlists(answerlist.data);
    }
    answer();
  }, []);

  return (
    <div>
      <div>
        <SidebarAdmin />
      </div>
      <div className="answers">
        <h1>Answers</h1>
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
                <button>Delete</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default AdminAnswers;
