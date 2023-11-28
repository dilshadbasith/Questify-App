import React, { useEffect, useState } from "react";
import ProfileNavbar from "./ProfileNavbar";
import Post from "./Post";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";

function ProfilePosts() {
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  useEffect(() => {
    axios
      .post("http://localhost:3000/api/user/profilequestions", {
        uid: user?.uid,
      })
      .then((res) => {
        console.log(res.data.reverse());
        setPosts(res.data);
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
      <div>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default ProfilePosts;
