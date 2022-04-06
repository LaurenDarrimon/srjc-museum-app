import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import waves from "../assets/images/waves.jpg";
import next from "../assets/images/next.png";

import { gameData } from "../assets/data/game-data";
// Import our custom hook
import { useCounter } from "../utils/GameContext";

const Fishing = () => {
  //functions, hooks, state, etc go here

  //track which mini-game slide we are on
  const { gameCounter, gameIncrement } = useCounter();

  //track overall game slide 
  const { slideCounter, setSlideIncrement } = useCounter();
  let nextPath = gameData[slideCounter].nextPath

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
          <Link to={nextPath}>
            <img src={next} alt="next question" className="p-4" onClick={() => gameIncrement()} />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Fishing;
