import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import next from "../assets/images/next.png";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { PotteryDrop } from "../components/PotteryDrop";
import { PotteryDesigns } from "../components/PotteryDesigns";

import { potteryData } from "../assets/data/southwest-data";

const Southwest = () => {
  //functions, hooks, state, etc go here

  //return JSX
  return (
    //loading or intro screen and homepage
    <DndProvider backend={HTML5Backend}>
      <Container fluid>
        <Row className="justify-content-center p-5">
          <Col xs={12} className="text-center">
            <h1 className="subtitle p-5">Southwest Game</h1>
          </Col>

          <Col xs={11} md={5}>

          {potteryData.map((design) => (
                <PotteryDesigns
                  key={design.number}
                  title={design.title}
                  description={design.description}
                  image={design.image}
                />
              ))}
               
          </Col>

          <Col xs={11} md={5}>

          <PotteryDrop />

          </Col>

          

          <Col xs={11} md={8} className="text-end">
            <Link to="/pacificNW">
              <img src={next} alt="next question" className="p-4" />
            </Link>
          </Col>
        </Row>
      </Container>
    </DndProvider>
  );
};

export default Southwest;