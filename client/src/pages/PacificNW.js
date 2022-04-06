import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import next from "../assets/images/next.png";

//import modal components
import InstructionModal from "../components/MiniGameInstModal";
import TryAgainModal from "../components/TryAgainModal";

// Import our custom hook
import { useCounter } from "../utils/GameContext";
//import game slide sequence
import { gameData } from "../assets/data/game-data";

const PacificNW = () => {
  //functions, hooks, state, etc go here

  //track which mini-game slide we are on
  const { gameCounter, gameIncrement } = useCounter();

  //track which slide we are on
  const { slideCounter, setSlideIncrement } = useCounter();
  //the next slide in the sequence
  let nextPath = gameData[slideCounter].nextPath;

  //return JSX
  return (
    //loading or intro screen and homepage
    <Container fluid>
      <Row className="justify-content-center p-5">
        <Col xs={12} className="text-center">
          <h1 className="subtitle p-5">Pacific NW Game</h1>
        </Col>
        <Col xs={12} className="speech-bubble-sm">
          <h2>Test your Knowledge!</h2>
          <p>
            A question about potlach hats or potlatch ceremonies. Followed by
            some sort of picture or graphic. Multiple Choice Answer, etc, etc,
            etc..
          </p>
        </Col>
        <Row>
          <Col xs={4}>
            {/* Click for modal */}
            <InstructionModal />
          </Col>
          <Col xs={8} className="multi-choice-container">
            <ol type="A">
              <li className="multi-choice-answer">Answer One</li>
              <li className="multi-choice-answer">Answer Two</li>
              <li className="multi-choice-answer">Answer Three</li>
            </ol>
          </Col>
          <TryAgainModal />
          
        </Row>

        <Col xs={11} md={8} className="text-end">
          <Link to={nextPath}>
            <img
              src={next}
              alt="next question"
              className="p-4"
              onClick={() => gameIncrement()}
            ></img>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default PacificNW;
