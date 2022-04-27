import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// hooks
import { useCounter } from "../utils/GameContext";
import { useEffect } from "react";

import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";

//data
import { caliCardsArray } from "../assets/data/matching-card-data";
import { modalData } from "../assets/data/modal-data"; //instructions data (instr. modal moved to Matching.js)
// mini-game components
import Matching from "../components/Matching";

const California = () => {
  //functions, hooks, state, etc go here

  //track which mini-game slide we are on
  const { gameCounter, gameIncrement } = useCounter();

  //set all counters when you land on this slide from nav or refresh
  const { countCalifornia, setCalifornia } = useCounter();
  useEffect(() => {
    setCalifornia();
  });

  //get the modal data for the game we're on
  const currentModal = modalData[gameCounter];
  console.log("currentModal");
  console.log(currentModal);

  //return JSX
  return (
    //loading or intro screen and homepage
    <Container fluid className="site-content region-california">
      <Row className="justify-content-center py-3 px-5">
        <Col xs={12} className="text-center">
          <div className="region-california">
            <h1 className="subtitle p-3">California </h1>
          </div>
        </Col>

        <Col xs={12}>
          <Matching cardsArray={caliCardsArray} currentModal={currentModal} />
        </Col>

        <br></br>
        <br></br>
      </Row>

      <Row>
        <Col xs={6}>
          <BackButton />
        </Col>
        <Col xs={6}>
          <NextButton />
        </Col>
      </Row>
    </Container>
  );
};

export default California;
