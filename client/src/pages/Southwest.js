import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import next from "../assets/images/next.png";

import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";

import { PotteryDrop } from "../components/PotteryDrop";
import { PotteryInfoCard } from "../components/PotteryInfoCard";

import { potteryData } from "../assets/data/southwest-data";

// Import our custom hook
import { useCounter } from "../utils/GameContext";
//import game slide sequence
import { gameData } from "../assets/data/game-data";

//import modal components
import InstructionModal from "../components/MiniGameInstModal";
import TryAgainModal from "../components/TryAgainModal";
import { modalData } from "../assets/data/modal-data";

const Southwest = () => {
  //functions, hooks, state, etc go here

  //track which mini-game slide we are on
  const { gameCounter, gameIncrement } = useCounter();

  //track which slide we are on
  const { slideCounter, setSlideIncrement } = useCounter();
  //the next slide in the sequence
  let nextPath = gameData[slideCounter].nextPath;

  //get the data for the game we're on
  const currentModal = modalData[gameCounter];
  console.log("currentModal");
  console.log(currentModal);

  const options = {
    enableMouseEvents: true,
  };

  //return JSX
  return (
    //loading or intro screen and homepage
    <DndProvider backend={TouchBackend} options={options}>
      <Container fluid>
        <Row className="justify-content-center p-5">
          <Col xs={12} className="text-center">
            <h1 className="subtitle p-5">Design Your Own Pottery</h1>
          </Col>
        </Row>

        <Row className="text-center" >
          <Col xs={6}>
            <p>Drag patterns from here:</p>
          </Col>
          <Col xs={6}>
            <p>onto the pot:</p>
          </Col>
        </Row>

        <PotteryDrop />
        <br>
        </br>

        <h2>Symbols & Meanings:</h2>
        <br>
        </br>

        <Row className="pot-design-bank flex-nowrap">
          {potteryData.map((design) => (
            <PotteryInfoCard
              key={design.number}
              title={design.title}
              description={design.description}
              image={design.image}
            />
          ))}
        </Row>

        <Row>
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

          <Col xs={11} md={8} className="text-end">
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

export default Southwest;
