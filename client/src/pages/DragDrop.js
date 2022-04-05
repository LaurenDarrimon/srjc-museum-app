import React, { useReducer } from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { Dustbin } from "../components/Dustbin";
import { OptionBox } from "../components/OptionBox";

import { quiz } from "../assets/data/questions";
import next from "../assets/images/next.png";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Import our custom hook
import { useCounter } from '../utils/GameContext';

const DragDrop = memo(function DragDrop() {
  

  // Pluck values from our ThemeContext by invoking our useCounter hook
  const { triviaCounter, triviaIncrement } = useCounter();

  const options = quiz[triviaCounter].options;
  console.log(options);

  return (
    //loading or intro screen and homepage

    /* Dnd Provider wraps the drag and drop components */
    <DndProvider backend={HTML5Backend}>
      <Container fluid className="site-content">
        <Row className="justify-content-center text-center p-5">
          <Col xs={11} md={7} className="py-5">
            <h1>Question {quiz[triviaCounter].number}</h1>

            <h2>{quiz[triviaCounter].lesson}</h2>

            <div
              style={{ overflow: "hidden", clear: "both" }}
              image={quiz[triviaCounter].mainImage}
              answer={quiz[triviaCounter].right_answer}
            >
              {/* dustbin is the colored box with the image where we will drag the right answer */}
              <Dustbin
                image={quiz[triviaCounter].mainImage}
                answer={quiz[triviaCounter].right_answer}
              />
            </div>

            <h2>{quiz[triviaCounter].question}</h2>
            <br />

            {/* map through the array of options to render a button for each answer option */}
            <div>
              {options.map((option) => (
                <OptionBox
                  key={option}
                  option={option}
                  answer={quiz[triviaCounter].right_answer}
                  correctMessage={quiz[triviaCounter].correctMessage}
                  wrongMessage={quiz[triviaCounter].wrongMessage}
                />
              ))}
            </div>

            <br />
            <br />

            <Link to="/dragdrop">
              <img src={next} alt="white arrow play button" className="p-4" onClick={() => triviaIncrement()}/>
            </Link>
          </Col>
        </Row>
      </Container>
    </DndProvider>
  );
});

export default DragDrop;
