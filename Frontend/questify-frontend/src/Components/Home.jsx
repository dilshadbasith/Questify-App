import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import './css/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <>
      <div className="quora-contents">
        <div className="quora-content">
          <Sidebar/>
          <Feed/>
          <Widget/>
      </div>
    </div>
    </>
  );
}

export default Home;
