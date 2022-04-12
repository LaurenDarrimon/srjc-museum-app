import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import go from "../assets/images/go-btn.png";
import mascotBubble from "../assets/images/speech-bubble-mascot-guide.png";
import potNumbers from "../assets/images/pot-and-numbers-graphic.png";


const Instructions = () => {
  //functions, hooks, state, etc go here

  //return JSX
  return (
    //loading or intro screen and homepage
    <Container fluid>
      <Row className="instructions site-content">
        <Col xs={11} className="speech-bubble speech-bubble-fullscreen">
          <h1 className="display-5">Instructions</h1>
          <p>
            Follow the prompts on the next page to find the artifacts in the museum.
          </p>
          <img className="img-fluid"
            src={potNumbers}
            alt="illustration of dragging the number onto the image of a piece of pottery"
          />
          <p>
            <span className="bold-text">Tap or Click</span> on the right answer when you find the item in the real life exhibit.
          </p>

          <img className="img-fluid"
            src={mascotBubble}
            alt='little mascot says "Hi, Ill be your guide through the game"'
          />
        <Row>
        <Col xs={6}>
          <h2 className="display-5">Are you ready?</h2>
        </Col>
        <Col xs={6}>
          <Link className="img-fluid big-round-GO-btn" to="/trivia">
            <img src={go} alt="GO!" />
          </Link>
        </Col>
        </Row>
        </Col>
      </Row>
    </Container>
      
  );
};

export default Instructions;
