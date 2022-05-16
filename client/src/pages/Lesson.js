import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//our components
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
// custom hook
import { useCounter } from "../utils/GameContext";
//data
import { lessonData } from "../assets/data/lesson-data";
import { regionData } from "../assets/data/region-data";
//images
import coyote from "../assets/images/coyote.svg";
import coyoteHead from "../assets/images/coyote-head.svg"


const Lesson = () => {

  const { allGameState, setAllGameState } = useCounter();

  //check and see if there is a game counter in local storage. 
  if (localStorage.getItem("allGameCounters")){
    //if there is, parse the stored string back into an array
    var allGameCounters = JSON.parse(localStorage.getItem("allGameCounters"));
    //set the game counters to the stored array 
    setAllGameState(allGameCounters);
  }
 
  //track which mini-game slide we are on
  const { lessonCounter, lessonIncrement } = useCounter();
  const { gameCounter, setGameCounter } = useCounter();

  const currentLessonSlide = lessonData[lessonCounter];

  let regionClass = regionData[gameCounter].region;

  //return JSX
  return (
    //Lesson before each  mini-game
    <Container className={`${regionClass} lesson`}>
      <Row className="lesson site-content text-center">
        <Col
          xs= {{ span: 10, offset: 1 }}
          sm= {{ span: 9, offset: 2 }}
          md= {{ span: 9, offset: 2}}
          lg={{ span: 8, offset: 3 }}
          className="speech-bubble"
        >
          <div className={`region  ${regionClass}`}>
            <h1>{currentLessonSlide.title}</h1>
          </div>
          <figure>
          <img
            className="img-fluid"
            src={require(`../assets/images/${currentLessonSlide.imagePath}`)}
            alt={currentLessonSlide.imageDescription}
          />
          <figcaption>{currentLessonSlide.imageDescription}</figcaption>
          </figure>
          
          <div className="ps-3">
            <p>{currentLessonSlide.p1}</p>
            <p>{currentLessonSlide.p2}</p>
            <p>{currentLessonSlide.p3}</p>
          </div>
          
        </Col>
        <Row className="mt-5">
          <Col xs={6} className="pt-5 mt-5 text-center">
            <BackButton />
          </Col>
          <Col xs={6} className="pt-5 mt-5 text-center">
            <NextButton />
          </Col>
        </Row>
        <div className="mascot-container">
        <picture>
          <source media="(max-width:630px)" srcSet= {coyoteHead} />
          <source media="(min-width:630px)" srcSet={coyote} />
          <img src={coyote} alt="coyote guide" />
        </picture>
          
        </div>
        
        
       
      </Row>
    </Container>
  );
};

export default Lesson;
