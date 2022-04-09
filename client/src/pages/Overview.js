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
          <p>
            Welcome to the North American Art Scavenger Hunt! Today we'll learn about native North American art while exploring the museum!
          </p>
          <p>
            The game is intended to be played in person at the SRJC Multi-Culural Museum.
          </p>
          <p>
            We'll look at art from across America, from California, the Pacific Northwest, the Southwest, and the Great Plains.
          </p>

          <h2 className="display-5 d-inline-block">Let's test your skills!</h2>
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
