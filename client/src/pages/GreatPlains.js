import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import next from "../assets/images/next.png";

import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";

import { gameData } from "../assets/data/game-data";
// Import our custom hook
import { useCounter } from "../utils/GameContext";

import { BonnetDrop } from "../components/BonnetDrop";
import { FeatherOptions } from "../components/FeatherOptions";

import { featherDeeds } from "../assets/data/great-plains-data";

//import modal components
import InstructionModal from "../components/MiniGameInstModal";
import TryAgainModal from "../components/TryAgainModal";
import UrDoneModal from "../components/UrDoneModal";
import { modalData } from "../assets/data/modal-data";
import NextButton from "../components/NextButton";

const greatPlains = () => {
  //functions, hooks, state, etc go here

  //track which mini-game slide we are on
  const { gameCounter, gameIncrement } = useCounter();
  //gameIncrement(3);

  //track overall game slide
  const { slideCounter, setSlideIncrement } = useCounter();
  //setSlideIncrement(20);
  let nextPath = gameData[slideCounter].nextPath;

  //get the data for the game we're on
  const currentModal = modalData[gameCounter];
  console.log("currentModal");
  console.log(currentModal);

  const options = {
    enableMouseEvents: true,
  };

  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }

  const isTouchScreen = isTouchDevice() ? TouchBackend : HTML5Backend;

  //return JSX
  return (
    //loading or intro screen and homepage
    <DndProvider backend={isTouchScreen} options={options}>
      <Container fluid>
        <Row className="justify-content-center p-5">
          <Col xs={12} className="text-center">
            <h1 className="subtitle p-5">Great Plains Game</h1>
          </Col>

          <Col className="feather-container" xs={11} md={5}>
            {featherDeeds.map((feather) => (
              <FeatherOptions
                key={feather.number}
                deed={feather.deed}
                rightAnswer={feather.rightAnswer}
              />
            ))}
          </Col>

          <Col xs={11} md={5}>
            <BonnetDrop />
          </Col>

          <Col xs={4}>
            {/* Click for modal */}
            {/* pass in props for current instruction modal */}
            <InstructionModal
              title={currentModal.title}
              p1={currentModal.p1}
              pBold={currentModal.pBold}
              p3={currentModal.p3}
              imagePath={currentModal.imagePath}
              imageDescription={currentModal.imageDescription}
            />
          </Col>

          <Col xs={8} md={8} className="text-end">
            <Link to={nextPath}>
              <img
                src={next}
                alt="next question"
                className="p-4"
                onClick={() => gameIncrement()}
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </DndProvider>
  );
};

export default greatPlains;
