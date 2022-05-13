import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// hooks
import { useCounter } from "../utils/GameContext";
import { useEffect } from "react";

//data
import { pnwCardsArray } from "../assets/data/matching-card-data";
import { modalData } from "../assets/data/modal-data"; //instruction modal data (instructions modal imported in Matching component)

//components
import Matching from "../components/Matching";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";

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
    <Container fluid className="site-content region-northwest pt-lg-5">
      <Row className="justify-content-center py-3 px-5 mx-auto">
        <Col xs={12} className="text-center">
          <div className="region-northwest">
            <h1 className="display-5 p-2">Pacific Northwest </h1>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="px-1">
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
