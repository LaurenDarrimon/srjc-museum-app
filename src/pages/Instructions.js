// Main Instructions

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import go from "../assets/images/buttons/go-btn.svg";
import mascotBubble from "../assets/images/guide-animal/speech-bubble-mascot-guide.svg";
import basket from "../assets/images/guide-animal/basket-red.svg";
import next from "../assets/images/buttons/next.png";
import back from "../assets/images/buttons/go-back-arrow.png";

const Instructions = () => {
  //functions, hooks, state, etc go here

  //return JSX
  return (
    //instructions
    <Container fluid>
      <Row className="instructions site-content">
        <Col xs={{ span: 10 }} className="speech-bubble text-end mx-auto">
          <h1 className="display-5 text-400 text-center pangolin-font">
            Instructions
          </h1>
          <p className="text-start py-3">
            Follow the prompts to find the objects in the{" "}
            <span className="text-400">real-life exhibit</span>.
            <img
              className="img-fluid w-25 float-end py-2 pt-lg-3 pe-1"
              src={basket}
              alt="piece of pottery"
            />
          </p>

          <p className="text-start pb-3 pt-4 py-lg-5">
            <span className="text-400">Tap or Click</span> on the right answer.
            Then click <span className="text-400">NEXT</span>.
          </p>



          <p className="text-start">
            Only use <span className="text-400" >the game's Back and Next
            Arrows.</span>
            <br />
          </p>
          <div className="w-50 pt-md-2">
          <img
              className="img-fluid pe-2 pt-3 float-start"
              src={back}
              alt="Back Arrow"
              width="40%"
            />
            <img
              className="img-fluid pe-2 pt-3 float-start"
              src={next}
              alt="Next Arrow"
              width="40%"
            />
          </div>
          <p className="w-50 float-end pt-2 pt-md-4">The back button on your browser will mess up the game. 
          If this happens, use the top menu to start over or go to the nearest mini-game. </p>
          

          <img
            className="img-fluid py-3 py-md-5"
            src={mascotBubble}
            alt='Coyote says "Hi, Ill be your guide through the game"'
            width="100%"
          />
          <Row>
            <Col xs={{ span: 7 }} md={{ span: 5, offset: 1 }}>
              <h2 className="display-4 text-start pangolin-font text-400">
                Let's start exploring!
              </h2>
            </Col>
            <Col xs={{ span: 5 }}>
              <Link to="/museum/trivia">
                <img
                  className="big-round-GO-btn img-fluid pe-3"
                  src={go}
                  alt="GO!"
                  width="100%"
                />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Instructions;
