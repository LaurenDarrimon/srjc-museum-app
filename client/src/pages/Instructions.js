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
            Some text describing how the game works. Each item in the museum has a
            small number next to it. We will show you a picture of an art piece,
            and you'll look around to find it in the museum (along with its
            number.)
          </p>
          <img className="img-fluid"
            src={potNumbers}
            alt="illustration of dragging the number onto the image of a piece of pottery"
          />
          <p>
            <strong>Drag and Drop</strong> the item's number onto its picture when
            you find it in the real-life exhibit.
          </p>

          <img className="img-fluid"
            src={mascotBubble}
            alt='little mascot says "Hi my name is __, Ill be your guide through the game"'
          />
        <Row>
        <Col xs={6}>
          <h2 className="display-5">Are you ready?</h2>
        </Col>
        <Col xs={6}>
          <Link className="img-fluid big-round-GO-btn" to="/dragdrop">
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
