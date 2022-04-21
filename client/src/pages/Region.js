import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import next from "../assets/images/next.png";
import mascotLarge from "../assets/images/mascot-lg.png";

// Import our custom hook
import { useCounter } from "../utils/GameContext";
//track which turn we are on and which slide is next in sequence
import { gameData } from "../assets/data/game-data";
import { regionData } from "../assets/data/region-data";

const Region = () => {
  //functions, hooks, state, etc go here

  //track which region
  const { regionCounter, setRegionCount } = useCounter();

  //track the overall slide we are on
  const { slideCounter, slideIncrement } = useCounter();

  let nextPath = gameData[slideCounter].nextPath;

  let region = regionData[regionCounter];

  //return JSX
  return (
    //Lesson before each  mini-game
    <Container>
      <Row xs={1} className="lesson site-content">
        <Col
          xs={11}
          md={{ span: 8, offset: 3 }}
          className="speech-bubble speech-bubble-md"
        >
          <h1>Welcome to {region.title}</h1>
          <img
            className="img-fluid"
            src={require(`../assets/images/${region.imagePath}`)}
            alt={region.imageDescription}
          ></img>
          <p>{region.welcome}</p>
          <p>
            <em>{region.translation}</em>
          </p>

          <Link to={nextPath} className="float-end">
            <img
              className="img-fluid"
              src={next}
              alt="next page"
              onClick={() => regionIncrement()}
            />
          </Link>
        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 6, offset: 1 }} className="mascot-container">
          <img
            className="img-fluid"
            src={mascotLarge}
            alt="mascot animal illustration"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Region;
