import { React, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

// drag and drop
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";

// hooks
import { useCounter } from "../utils/GameContext";

//mini-game components
import { BonnetDrop } from "../components/BonnetDrop";
import { FeatherOptions } from "../components/FeatherOptions";

//data
import { featherDeeds } from "../assets/data/great-plains-data";
import { modalData } from "../assets/data/modal-data"; //instructions modal data
//modal & botton components
import InstructionModal from "../components/MiniGameInstModal";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";

const greatPlains = () => {
   //set all counters when you land on this slide from nav or refresh
  const { countGreatPlains, setGreatPlains } = useCounter();
  useEffect(() => {
    setGreatPlains();
  });

  //track which mini-game slide we are on
  const { gameCounter, gameIncrement } = useCounter();
 
  //get the data for the game we're on
  const currentModal = modalData[gameCounter];

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
      <Container fluid className="site-content region-greatplains">
        <Row className="justify-content-center p-5">
          <Col xs={12} className="text-center">
            <div className="region-greatplains">
              <h1 className="subtitle p-5">Great Plains Game</h1>
            </div>
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
    </DndProvider>
  );
};

export default greatPlains;
