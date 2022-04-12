import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

//data
import { triviaData } from "../assets/data/questions";

//our components
import NextButton from "../components/NextButton";
import TriviaChoices from "../components/TriviaChoices";

// Import our custom hook
import { useCounter } from "../utils/GameContext";

const Trivia = () => {
  // Pluck values from our GameContext by invoking our useCounter hook
  const { triviaCounter, triviaIncrement } = useCounter();

  const quiz = triviaData[triviaCounter];
  const options = quiz.options;
  console.log(options);

  console.log("triviacounter");
  console.log(triviaCounter);

  return (
    //loading or intro screen and homepage
    <Container fluid className="site-content">
      <Row className="justify-content-center text-center p-5">
        <Col xs={11} md={7} className="py-5">
          <h1>Question {quiz.number}</h1>

          <h2>{quiz.lesson}</h2>

          <div
            style={{ overflow: "hidden", clear: "both" }}
            image={quiz.mainImage}
            answer={quiz.right_answer}
          >
            <img
              className="characters"
              id="main-pic"
              style={{ maxWidth: "30%" }}
              src={require(`../assets/images/${quiz.mainImage}`)}
            />
          </div>

          <h2>{quiz.question}</h2>
          <br />
          <TriviaChoices />

          

          <br />
          <br />

          {/*add NextButton as component to allow for conditional rendering (for "you're done" modal at end) */}
          <NextButton />
        </Col>
      </Row>
    </Container>
  );
};

export default Trivia;
