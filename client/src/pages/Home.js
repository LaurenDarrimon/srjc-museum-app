import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/srjc-museum-logo.jpg";
import play from "../assets/images/play-btn.png";

const Home = () => {
  return (
    //loading or intro screen and homepage
    <main className="home">
      <img
        src="logo"
        alt="round SRJC logo showing black on white pottery design"
      />
      <h2 className="subtitle">North American Art</h2>
      <h1>SCAVENGER HUNT</h1>
      <a>
        <img src="play" alt="white arrow play button" />
      </a>
    </main>
  );
};

export default Home;
