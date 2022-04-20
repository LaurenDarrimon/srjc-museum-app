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
          <h1 className="display-5 text-400 text-center">Instructions</h1>
          <p className="text-start py-4">
            Follow the prompts to find the objects in the <span className="text-400">real-life exhibit</span>.
            <img className="img-fluid w-25 float-end pt-3 pe-1"
            src={basket}
            alt="piece of pottery"
          />
          </p>
    
          
          <p className="text-start pb-4 pt-5">
            <span className="text-400">Tap or Click</span> on the right answer.
          </p>

          <img className="img-fluid py-5"
            src={mascotBubble}
            alt='Coyote says "Hi, Ill be your guide through the game"'
            width="100%"
          />
        <Row>
        <Col xs={{span:5, offset:1}}>
          <h2 className="display-4 text-start text-400">Let's go exploring!</h2>
        </Col>
        <Col xs={{span:5, offset:1}}>
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
