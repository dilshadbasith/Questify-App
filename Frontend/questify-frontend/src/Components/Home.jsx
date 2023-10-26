import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import './css/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";

function Home() {
  return (
    <>
     <div className="sticky-top">
      <Navbar />
      </div>
      <div className="quora-contents">
        <div className="quora-content">
          <Sidebar/>
          <Feed/>
      </div>
    </div>
    </>
  );
}

export default Home;
