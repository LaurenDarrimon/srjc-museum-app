import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import go from "../assets/images/go-btn.svg";
import mascotBubble from "../assets/images/speech-bubble-mascot-guide.svg";
import basket from "../assets/images/basket-red.svg";


const Instructions = () => {
  //functions, hooks, state, etc go here

  //return JSX
  return (
    //instructions
    <Container fluid>
      <Row className="instructions site-content">
        <Col xs={{span: 10}} className="speech-bubble text-end mx-auto">
          <h1 className="display-5 text-400 text-center pangolin-font">Instructions</h1>
          <p className="text-start py-3">
            Follow the prompts to find the objects in the <span className="text-400">real-life exhibit</span>.
            <img className="img-fluid w-25 float-end py-2 pt-lg-3 pe-1"
            src={basket}
            alt="piece of pottery"
          />
          </p>
    
          
          <p className="text-start pb-3 pt-4 py-lg-5">
            <span className="text-400">Tap or Click</span> on the right answer. Then click <span className="text-400">NEXT</span>.
          </p>

          <img className="img-fluid py-3"
            src={mascotBubble}
            alt='Coyote says "Hi, Ill be your guide through the game"'
            width="100%"
          />
        <Row>
        <Col xs={{span:7}} md={{span:5, offset:1}}>
          <h2 className="display-4 text-start pangolin-font text-400">Let's go exploring!</h2>
        </Col>
        <Col xs={{span:5}}>
          <Link to="/trivia">
            <img className="big-round-GO-btn img-fluid pe-3" src={go} alt="GO!" width="100%" />
          </Link>
        </Col>
        </Row>
        </Col>
      </Row>
    </Container>
      
  );
};

export default Instructions;
