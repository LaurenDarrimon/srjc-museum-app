import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import next from "../assets/images/next.png";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { gameData } from "../assets/data/game-data";
// Import our custom hook
import { useCounter } from "../utils/GameContext";

import { BonnetDrop } from "../components/BonnetDrop";
import { FeatherOptions } from "../components/FeatherOptions";

import { featherDeeds } from "../assets/data/great-plains-data";

const greatPlains = () => {
  //functions, hooks, state, etc go here

  //track which mini-game slide we are on
  const { gameCounter, gameIncrement } = useCounter();

  //track overall game slide
  const { slideCounter, setSlideIncrement } = useCounter();
  let nextPath = gameData[slideCounter].nextPath;

  //return JSX
  return (
    //loading or intro screen and homepage
    <DndProvider backend={HTML5Backend}>
      <Container fluid>
        <Row className="justify-content-center p-5">
          <Col xs={12} className="text-center">
            <h1 className="subtitle p-5">Great Plains Game</h1>
          </Col>

          <Col xs={11} md={5}>
            {featherDeeds.map((feather) => (
              <FeatherOptions
                key={feather.number}
                title={feather.title}
                deed={feather.deed}
                rightAnswer={feather.rightAnswer}
              />
            ))}
          </Col>

          <Col xs={11} md={5}>
            <BonnetDrop />
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

export default greatPlains;
