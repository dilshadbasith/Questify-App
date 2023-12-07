import React, { useContext, useEffect, useState } from "react";
import QuestionBox from "./QuestionBox";
import "./css/Feed.css";
import Post from "./Post";
import axios from "axios";
import { myContext } from "./Context";

function Feed() {
  const [posts, setPosts] = useState([]);
  const { search } = useContext(myContext);

  useEffect(() => {
    axios
      .get("https://questify-ttdm.onrender.com/api/questions")
      .then((res) => {
        // console.log(res?.data?.reverse());
        setPosts(res?.data?.reverse());
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  //console.log(posts)
  return (
    <div className="feed">
      <QuestionBox />
      {posts
        .filter((item) => {
          return search?.toLowerCase() === ""
            ? item
            : item.questionName.toLowerCase().includes(search);
        })
        .map((post, index) => (
          <Post key={index} post={post} />
        ))}
    </div>
  );
}

export default Feed;
