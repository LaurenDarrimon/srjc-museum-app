import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/images/logo-500.png";
import play from "../assets/images/play-btn.png";
import { quiz } from "../assets/data/questions";


const DragDrop = () => {



  return (
    //loading or intro screen and homepage
    <Container fluid className="site-content">
      <Row className="d-flex justify-content-center text-center p-5">
        <Col className="align-items-center py-5">
          <h1>
            Question <span id="question_number"></span>
          </h1>

          <h2 id="lesson"></h2>

          <img id="main-pic" />

          <h4 id="message">
            <em> Drag the right answer onto the picture. </em>
          </h4>

          <h2 id="question"></h2>
          <br />

          <div id="answers"></div>
          <br />
          <div id="wrong"></div>
          <br />
          <div id="dialog" title="Bingo!">
            You got it right.
          </div>
          <br />
          <div id="end"></div>
          <br />
          <br />
          <br />
          <div id="progressbar"></div>
          <p>You're this far through the quiz!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DragDrop;
