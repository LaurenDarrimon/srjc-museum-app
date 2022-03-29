import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import waves from "../assets/images/waves.jpg";
import next from "../assets/images/next.png";

const About = () => {
  //functions, hooks, state, etc go here

  //return JSX
  return (
    //loading or intro screen and homepage
    <Container fluid>
      <Row className="justify-content-center p-5">
        <Col xs={12} className="text-center">
          <h1 className="subtitle p-5">Mini-Game Placeholder </h1>
        </Col>
        <Col xs={11} md={8}>
        
          <img
            src={waves}
            className="game-background"
            alt="waves and fish placeholder image"
            caption="Next Game"
          />

        </Col>

        <Col xs={11} md={8} className="text-end">

        <Link to="/dragdrop">
              <img src={next} alt="next question" className="p-4" />
        </Link>

        </Col>

      </Row>
    </Container>
  );
};

export default About;