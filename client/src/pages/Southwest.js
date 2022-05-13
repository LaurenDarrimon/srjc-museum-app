import { useEffect, React } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

//drag and drop
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";

//mini-game components
//import { PotteryDrop } from "../components/PotteryDrop";
import {PotteryInfoCard} from "../components/pottery-game/PotteryInfoCard";
import PotteryDNDResponsiveContainer from "../components/pottery-game/PotteryDNDResponsiveContainer";
import PotteryDNDmd from "../components/pottery-game/PotteryDNDmd";
import PotteryDNDxs from "../components/pottery-game/PotteryDNDxs";

//data
import { potteryData } from "../assets/data/southwest-data";
import { modalData } from "../assets/data/modal-data"; //instructions data

// hooks
import { useCounter } from "../utils/GameContext";

//import modal & button components
import InstructionModal from "../components/MiniGameInstModal";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";




const Southwest = () => {

  //set all game counters when you land on this slide from nav or refresh
  const { countSW, setSW } = useCounter();
  useEffect(() => {
    setSW();
  });

  //track which mini-game slide we are on
  const { gameCounter, gameIncrement } = useCounter();

  //then, get the data for the game we're on
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
  
  let wasPotCleared = false; 
  function pageRefresh() {
    window.location.reload(false)
    wasPotCleared = true; 
  }

  const isTouchScreen = isTouchDevice() ? TouchBackend : HTML5Backend;

  //return JSX
  return (
    //loading or intro screen and homepage

    <DndProvider backend={isTouchScreen} options={options}>
      <Container fluid className="site-content southwest-game region-southwest p-0 pt-lg-5">
          <Col xs={10} className="text-center pb-4 mx-auto">
            <div className="region-southwest">
                <h1 className="region-southwest display-5 pb-2 pb-sm-3 pb-md-5">Southwestern Pottery</h1>
            </div>
          </Col>

          {/**DND section */}
        <Row>
          <Col xs={12} className="mx-auto">
            <PotteryDNDResponsiveContainer />
            <Button onClick={pageRefresh} className=" pot-reset ms-3 ms-lg-4 ms-xl-5">Clear Pot</Button>
            <h4 className="pot-design-bank-title display-6 p-3 ps-lg-4 ps-xl-5">Symbols & Meanings Key:</h4>
            <Row className="pot-design-bank flex-nowrap mx-2 mx-md-3 mx-lg-4 mx-xl-5">
              {potteryData.map((design) => (
                <PotteryInfoCard
                  key={design.number}
                  title={design.title}
                  description={design.description}
                  image={design.image}
                />
              ))}
            </Row>
          </Col>
        </Row>
        

        {/* check to see if the Clear Pot button was clicked. Only show the instruction modal if the button wasn't clicked */}
        {console.log(wasPotCleared)}
        {wasPotCleared ? <Row></Row> :
        <Row>
          <Col xs={{ span:4, offset:7 }} className="p-3 p-sm-4 p-md-5">
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
        </Row>} 

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

export default Southwest;