import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { quiz } from "../assets/data/questions";

const DragDrop = () => {

  const options = quiz[0].options
  console.log(options)

  return (
    //loading or intro screen and homepage

    <Container fluid className="site-content">
      <Row className="d-flex justify-content-center text-center p-5">
        <Col className="align-items-center py-5">
          <h1>Question {quiz[0].number}</h1>

          <h2>{quiz[0].lesson}</h2>

          <div>
            <img
              className="characters"
              id="main-pic"
              src={require(`../assets/images/${quiz[0].mainImage}`)}
            />
          </div>

          <h4 id="message">
            <em> Drag the right answer onto the picture. </em>
          </h4>

          <h2>{quiz[0].question}</h2>
          <br />

          <div id="answers">
            {options.map(( option ) => (
            
              <span key={option}>{option}</span>
          
            ))}
          </div>

          <br />
          <div id="wrong"></div>
          <br />
          <div id="dialog" title="Bingo!">
            You got it right.
          </div>
          <br />
          <div id="end"></div>
          <br />
          <br />
          <br />
          <div id="progressbar"></div>
          <p>You're this far through the quiz!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DragDrop;
