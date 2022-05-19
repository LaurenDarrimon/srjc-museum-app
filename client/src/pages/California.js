// Mini-Game #1 - California - Matching

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// hooks
import { useCounter } from "../utils/GameContext";
import { useEffect } from "react";

import NextButton from "../components/navigation/NextButton";
import BackButton from "../components/navigation/BackButton";

//data
import { caliCardsArray } from "../assets/data/mini-game-data/matching-card-data";
import { modalData } from "../assets/data/mini-game-data/instructions-data"; //instructions data (instr. modal moved to Matching.js)

// mini-game components
import Matching from "../components/matching-game/Matching";

const California = () => {
  //set all counters when you land on this slide from nav or refresh
  const { countCalifornia, setCalifornia } = useCounter();
  useEffect(() => {
    setCalifornia();
  });

  //track which mini-game slide we are on
  const { gameCounter, gameIncrement } = useCounter();

  //get the modal data for the game we're on
  const currentModal = modalData[gameCounter];

  //return JSX
  return (
    <Container fluid className="site-content region-california california-game pt-lg-5">
      <Row className="justify-content-center py-3 px-5 mx-auto">
        <Col xs={12} className="text-center">
          <div className="region-california">
            <h1 className="display-5 p-3">California </h1>
          </div>
        </Col>

        <Col xs={12}>
          <Matching cardsArray={caliCardsArray} currentModal={currentModal} />
        </Col>

        <br></br>
        <br></br>
      </Row>

      <Row>
        <Col xs={6} className="justify-content-center text-center">
          <BackButton />
        </Col>
        <Col xs={6} className="justify-content-center text-center">
          <NextButton />
        </Col>
      </Row>
    </Container>
  );
};

export default California;
