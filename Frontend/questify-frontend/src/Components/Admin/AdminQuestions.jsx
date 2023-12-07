import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../Post";
import SidebarAdmin from "./SidebarAdmin";
import "../css/AdminHome.css";

function AdminQuestions() {
  const [questionlists, setQuestionlists] = useState([]);
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete?")) {
      await axios.delete(
        `https://questify-ttdm.onrender.com/api/admin/deletequestion/${id}`
      );
      location.reload();
    }
  };
  useEffect(() => {
    async function question() {
      const questionlist = await axios.get(
        "https://questify-ttdm.onrender.com/api/admin/getquestions"
      );
      setQuestionlists(questionlist.data);
    }
    question();
  }, []);
  return (
    <div>
      <div>
        <SidebarAdmin />
      </div>
      <div className="questions">
        <h1>Questions</h1>
        {questionlists.map((post, index) => (
          <div>
            <Post key={index} post={post} />
            <button className="dlt-btn" onClick={() => handleDelete(post._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminQuestions;
