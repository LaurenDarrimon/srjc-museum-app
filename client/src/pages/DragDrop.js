import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { Dustbin } from "../components/Dustbin";
import { OptionBox } from "../components/OptionBox";

import { quiz } from "../assets/data/questions";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const DragDrop = memo(function DragDrop() {
  const options = quiz[0].options;
  console.log(options);

  return (
    //loading or intro screen and homepage

    <DndProvider backend={HTML5Backend}>
      <Container fluid className="site-content">
        <Row className="d-flex justify-content-center text-center p-5">
          <Col className="align-items-center py-5">
            <h1>Question {quiz[0].number}</h1>

            <h2>{quiz[0].lesson}</h2>

            <div
              style={{ overflow: "hidden", clear: "both" }}
              image={quiz[0].mainImage}
              answer={quiz[0].right_answer}
            >
              <Dustbin
                image={quiz[0].mainImage}
                answer={quiz[0].right_answer}
              />
        
            </div>

            <h2>{quiz[0].question}</h2>
            <br />

            <div>
              {options.map((option) => (
                <OptionBox
                  key={option}
                  option={option}
                  answer={quiz[0].right_answer}
                  correctMessage={quiz[0].correctMessage}
                  wrongMessage={quiz[0].wrongMessage}
                />
              ))}
            </div>

            <br />
            <br />
          
          </Col>
        </Row>
      </Container>
    </DndProvider>
  );
});

export default DragDrop;
