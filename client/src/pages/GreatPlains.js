import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import waves from "../assets/images/waves.jpg";
import next from "../assets/images/next.png";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { BonnetDrop } from "../components/BonnetDrop";
import { FeatherOptions } from "../components/FeatherOptions";

import { featherDeeds } from "../assets/data/great-plains-data";

const greatPlains = () => {
  //functions, hooks, state, etc go here

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
            <Link to="/dragdrop">
              <img src={next} alt="next question" className="p-4" />
            </Link>
          </Col>
        </Row>
      </Container>
    </DndProvider>
  );
};

export default greatPlains;
