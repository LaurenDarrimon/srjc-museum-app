import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";

// Import our custom hook
import { useCounter } from "../utils/GameContext";

import { lessonData } from "../assets/data/lesson-data";
import { regionData } from "../assets/data/region-data";

const Lesson = () => {
  //functions, hooks, state, etc go here
  //track which mini-game slide we are on
  const { lessonCounter, lessonIncrement } = useCounter();
  const { gameCounter, setGameCounter } = useCounter();

  const currentLessonSlide = lessonData[lessonCounter];

  let regionClass = regionData[gameCounter].region;

  //return JSX
  return (
    //Lesson before each  mini-game
    <Container className={`${regionClass}`}>
      <Row xs={11} className="lesson site-content text-center">
        <Col
          xs={11}
          md={{ span: 8, offset: 3 }}
          className="speech-bubble speech-bubble-md"
        >
          <div className={`region  ${regionClass}`}>
            <h1>{currentLessonSlide.title}</h1>
          </div>
          <img
            className="img-fluid"
            src={require(`../assets/images/${currentLessonSlide.imagePath}`)}
            alt={currentLessonSlide.imageDescription}
          ></img>
          <p>{currentLessonSlide.p1}</p>
          <p>{currentLessonSlide.p2}</p>
          <p>{currentLessonSlide.p3}</p>
        </Col>
        <Col xs={6} className="justify-content-center text-center">
          <BackButton />
        </Col>
        <Col xs={6} className="justify-content-center text-center">
          <NextButton />
        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 6, offset: 1 }} className="mascot-container"></Col>
      </Row>
    </Container>
  );
};

export default Lesson;
