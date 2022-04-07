import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import next from "../assets/images/next.png";
import mascotLarge from "../assets/images/mascot-lg.png";

// Import our custom hook
import { useCounter } from "../utils/GameContext";
//track which turn we are on and which slide is next in sequence
import { gameData } from "../assets/data/game-data";

const Lesson = () => {
  //functions, hooks, state, etc go here
  //track which mini-game slide we are on
  const { lessonCounter, lessonIncrement } = useCounter();

  //track the overall slide we are on
  const { slideCounter, setSlideIncrement } = useCounter();
  let nextPath = gameData[slideCounter].nextPath

  //return JSX
  return (
    //Overview of game
    <Container>
      <Row xs={1} className="lesson site-content">
        <Col xs={11} md={{span: 8, offset: 3}} className="speech-bubble speech-bubble-md">
          <h1>Misc. Lesson Pages (2 slides) </h1>
          <img className="img-fluid" src="" alt="related image"></img>
          <p>
            Some edcational text describing all the things the player needs to know....etc..etc. To go
            before scavenger hunt Q's or mini games.
            <br/>
            <br/>
            Can (and probably will be multiple pages, to avoid big blocks of text on one page). Now
            I'm just trying to fill up this space. 
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Link to={nextPath} className="float-end">
            <img className="img-fluid" src={next} alt="next page" onClick={() => lessonIncrement()}/>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col xs={{span: 6, offset: 1}} className="mascot-container">
          <img className="img-fluid" src={mascotLarge} alt="mascot animal illustration" />
        </Col>
      </Row>
    </Container>
      
 
  );
};

export default Lesson;
