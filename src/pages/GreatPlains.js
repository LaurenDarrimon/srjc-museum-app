// Mini-Game #3 - Great Plains - Feather Game

import { React, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

// drag and drop
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";

// hooks
import { useCounter } from "../utils/GameContext";

//mini-game components
import { BonnetDrop } from "../components/feather-game/BonnetDrop";
import { FeatherOptions } from "../components/feather-game/FeatherOptions";

//data
import { featherDeeds } from "../assets/data/mini-game-data/great-plains-data";
import { modalData } from "../assets/data/mini-game-data/instructions-data"; //instructions modal data
//modal & botton components
import InstructionModal from "../components/modals/MiniGameInstModal";
import NextButton from "../components/navigation/NextButton";
import BackButton from "../components/navigation/BackButton";

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
    <DndProvider backend={isTouchScreen} options={options}>
      <Container fluid className="greatplains-game site-content region-greatplains pt-1 pt-lg-5"> 
        <Row className="">
          <Col xs={12} className="text-center">
            <div className="region-greatplains">
              <h1 className="display-5 p-5">The Great Plains</h1>
            </div>
          </Col>
          
          
          <Col className="feather-container order-1 order-sm-0" xs={11} sm={4} lg={{span:4, offset:1 }} xl={{span:3, offset:2}}>
            <div className="text-center p-2">
              <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="white">{/*<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"/></svg>
              &nbsp; &nbsp;
              <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white">{/*<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
            </div>
            {featherDeeds.map((feather) => (
              <FeatherOptions
                key={feather.number}
                deed={feather.deed}
                rightAnswer={feather.rightAnswer}
              />
            ))}
          </Col>

          <Col xs={8} sm={7} lg={{span:6 }} xl={6} className="px-4 p-sm-2 p-lg-0 overflow-hidden">
            <BonnetDrop />
          </Col>

          <Col xs={4} className="instr-btn-col order-0 order-sm-0">
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
