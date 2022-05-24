// Mini-Game #4 - Pacific NW - Matching

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// hooks
import { useCounter } from "../utils/GameContext";
import { useEffect } from "react";

//data
import { pnwCardsArray } from "../assets/data/mini-game-data/matching-card-data";
import { modalData } from "../assets/data/mini-game-data/instructions-data"; //instruction modal data (instructions modal imported in Matching component)

//components
import Matching from "../components/matching-game/Matching";
import NextButton from "../components/navigation/NextButton";
import BackButton from "../components/navigation/BackButton";

const PacificNW = () => {

  //set all game counters when you land on this slide from nav or refresh
  const { countPacificNW, setPacificNW } = useCounter();
  useEffect(() => {
    setPacificNW();
  });

  //track which mini-game slide we are on
  const { gameCounter, gameIncrement } = useCounter();

  //then, get the modal data for the game we're on
  const currentModal = modalData[gameCounter];

  //return JSX
  return (
    //loading or intro screen and homepage
    <Container fluid className="pnw-game site-content region-northwest pt-lg-5">
      <Row className="justify-content-center py-3 px-5 mx-auto">
        <Col xs={12} className="text-center">
          <div className="region-northwest">
            <h1 className="display-5 p-3">Pacific Northwest </h1>
          </div>
        </Col>

        <Col xs={12} className="">
          <Matching
            cardsArray={pnwCardsArray}
            currentModal={currentModal}
            gameCounter={gameCounter} //need to pass to <Cards>
          />
        </Col>
        <br></br>
        <br></br>
      </Row>
      <Row>
        <Row>
          <Col xs={6} className="justify-content-center text-center">
            <BackButton />
          </Col>
          <Col xs={6} className="justify-content-center text-center">
            <NextButton />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default PacificNW;
