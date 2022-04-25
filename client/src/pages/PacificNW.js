import React from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import next from "../assets/images/next.png";

// import instruction modal data (instructions modal imported in Matching component)
import { modalData } from "../assets/data/modal-data";

// Import our custom hook
import { useCounter } from "../utils/GameContext";

//import game slide sequence
import { gameData } from "../assets/data/game-data";
import { pnwCardsArray } from "../assets/data/matching-card-data";

import Matching from "../components/Matching";

const PacificNW = () => {
  //functions, hooks, state, etc go here

  //track which mini-game slide we are on
  const { gameCounter, gameIncrement } = useCounter();
  
  //set game counter when you land on this slide from refresh
  const {setGameCounter} = useCounter();
  setGameCounter(3);

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
    <Container fluid className="site-content region-northwest">
      <Row className="justify-content-center py-3 px-5">
        <Col xs={12} className="text-center">
          <div className="region-northwest">
            <h1 className="subtitle p-2">Pacific Northwest </h1>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Matching 
            cardsArray={pnwCardsArray} 
            currentModal={currentModal} 
            gameCounter={gameCounter} //need to pass to <Cards>
          />
        </Col>

        {/* Moved modal to Matching component
          <Col xs={12}>
          {/* Click for modal */}
        {/* pass in props for current instruction modal */}
        {/*<br></br>
          <br></br>
          <InstructionModal
            title={currentModal.title}
            p1={currentModal.p1}
            pBold={currentModal.pBold}
            p3={currentModal.p3}
            imagePath={currentModal.imagePath}
            imageDescription={currentModal.imageDescription}
          />
        </Col>*/}
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

export default PacificNW;
