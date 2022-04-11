import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import go from "../assets/images/go-btn.png";
import mascotLarge from "../assets/images/mascot-lg.png";

const Overview = () => {
  //functions, hooks, state, etc go here

  //return JSX
  return (
    //Overview of game
    <Container>
      <Row xs={1} className="overview site-content">
        <Col xs={11} md={{ span: 8, offset: 3 }} className="speech-bubble speech-bubble-md">
          <h1 className="display-5">Welcome!</h1>
          <h2> North American Art Scavenger Hunt Game</h2>
          <p>
            Welcome to the North American Art Scavenger Hunt! Today we'll learn about native North American art while exploring the museum!
          </p>
          <p>
            We'll look at art from across America, from California, the Pacific Northwest, the Southwest, and the Great Plains.
          </p>
          <p>
            The game is intended to be played in person at the SRJC Multi-Culural Museum.
          </p>

          <h3>If You're in the Museum</h3>
          <p>
            Play by clikcing the GO button below! We will take you through each
            region and its art by looking for artifacts in the museum. There
            will be a mix of scavenger hunt activity questions and mini-games.
          </p>

          <h3>If You're Anywhere Else</h3>
          <p>
            You can still try your best! It will be harder to answer the
            scavenger hunt questions that are designed with your physical
            presence in the musuem in mind. However, there is no penalty for
            guessing, so give it a try! Also, everyone can play the four
            minigames for each region from the navigation bar at the top of the
            screen. Those games don't need you to be at the museum at all!
          </p>

          <h2 className="display-5 d-inline-block">Let's go exploring!</h2>
          <Link to="/instructions" className="big-round-GO-btn float-end">
            <img className="img-fluid" src={go} alt="GO!" />
          </Link>
        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 6, offset: 1 }} className="mascot-container">
          <img className="img-fluid" src={mascotLarge} alt="mascot animal illustration" />
        </Col>
      </Row>
    </Container>


  );
};

export default Overview;
