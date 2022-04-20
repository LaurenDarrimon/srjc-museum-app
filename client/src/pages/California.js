import React from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import next from "../assets/images/next.png";

//import modal components
import InstructionModal from "../components/MiniGameInstModal";

//import modal data
import { modalData } from "../assets/data/modal-data";

// Import our custom hook
import { useCounter } from "../utils/GameContext";

//import game slide sequence
import { gameData } from "../assets/data/game-data";
import { caliCardsArray } from "../assets/data/matching-card-data";

import Matching from "../components/Matching";

const California = () => {
  //functions, hooks, state, etc go here

  //track which mini-game slide we are on
  const { gameCounter, gameIncrement } = useCounter();

  //track which slide we are on
  const { slideCounter, setSlideIncrement } = useCounter();
  //the next slide in the sequence
  let nextPath = gameData[slideCounter].nextPath;

  //ERIN get the data for the game we're on
  const currentModal = modalData[gameCounter];
  console.log("currentModal");
  console.log(currentModal);

  //return JSX
  return (
    //loading or intro screen and homepage
    <Container fluid>
      <Row className="justify-content-center p-5">
        <Col xs={12} className="text-center">
          <h1 className="subtitle p-5">California </h1>
          <h2>Flip Card Matching Game</h2>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Matching cardsArray = {caliCardsArray} />
        </Col>

        <Col xs={12}>
          {/* Click for modal */}
          {/* pass in props for current instruction modal */}
          <br></br>
          <br></br>
          <InstructionModal
            title={currentModal.title}
            p1={currentModal.p1}
            pBold={currentModal.pBold}
            p3={currentModal.p3}
            imagePath={currentModal.imagePath}
            imageDescription={currentModal.imageDescription}
          />
        </Col>
        <br></br>

        <br></br>
      </Row>
      <Row>
        <Col xs={12} className="text-end">
          {/* <TryAgainModal /> */}
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

export default California;