import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//images
import next from "../assets/images/next.png";
//drag and drop
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
//mini-game components
import { PotteryDrop } from "../components/PotteryDrop";
import { PotteryInfoCard } from "../components/PotteryInfoCard";
//data
import { potteryData } from "../assets/data/southwest-data";
import { gameData } from "../assets/data/game-data"; // game slide sequence
// hooks
import { useCounter } from "../utils/GameContext";
import { useEffect } from "react";
//import modal components
import InstructionModal from "../components/MiniGameInstModal";
import TryAgainModal from "../components/TryAgainModal";
import { modalData } from "../assets/data/modal-data"; //instructions data

const Southwest = () => {
  //functions, hooks, state, etc go here

  //track which mini-game slide we are on
  const { gameCounter, gameIncrement } = useCounter();

  //set all counters when you land on this slide from nav or refresh
  const { countSW, setSW } = useCounter();
  useEffect(() => {
    setSW();
  });

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
      <Container fluid className="site-content region-southwest">
        <Row className="justify-content-center p-5">
          <Col xs={12} className="text-center">
            <div className="region-southwest">
              <h1 className="subtitle p-5">Design Your Own Pottery</h1>
            </div>
          </Col>
        </Row>

        <Row className="text-center">
          <Col xs={6}>
            <h3>Drag patterns from here:</h3>
          </Col>
          <Col xs={6}>
            <h3>onto the pot:</h3>
          </Col>
        </Row>

        <PotteryDrop />
        <br></br>

        <h4>Symbols & Meanings Key:</h4>
        <br></br>

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
