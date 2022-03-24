import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import go from "../assets/images/go-btn.png";
import mascotLarge from "../assets/images/mascot-lg.png";

const Overview = () => {
  //functions, hooks, state, etc go here

  //return JSX
  return (
    //loading or intro screen and homepage
    <main className="overview row site-content">
      <div className="speech-bubble-md col-md-8">
        <h1>Welcome!</h1>
        <p>
          Some text describing what the game is about and how it works. North
          American / Native American art. Will take you through 4 geographic
          regions, and their art by looking for artifacts in the
          museum...etc..etc.
        </p>

        <h2>Let's test your skills!</h2>
        <Link to="/instructions" className="big-round-GO-btn">
          <img src={go} alt="GO!" />
        </Link>
      </div>
      <div className="mascot-container col-md-8">
        <img src={mascotLarge} alt="mascot animal illustration" />
      </div>
    </main>
  );
};

export default Overview;
