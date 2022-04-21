import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//data
import { triviaData } from "../assets/data/questions";
import { regionData } from "../assets/data/region-data";

//our components
import NextButton from "../components/NextButton";
import TriviaChoices from "../components/TriviaChoices";

// Import our custom hook
import { useCounter } from "../utils/GameContext";

const Trivia = () => {
  // Pluck values from our GameContext by invoking our useCounter hook
  const { triviaCounter, triviaIncrement } = useCounter();

  const { gameCounter, setGameCounter } = useCounter();

  const quiz = triviaData[triviaCounter];
  const options = quiz.options;
  console.log(options);

  console.log("triviacounter:");
  console.log(triviaCounter);

  console.log("gamecounter:");
  console.log(gameCounter);

  let regionClass = regionData[gameCounter].region

  return (
    //loading or intro screen and homepage
    <Container fluid className={`trivia site-content ${regionClass}`}>
      <Row className="justify-content-center text-center p-5">
        <Col xs={{ span: 11 }} className="speech-bubble py-5 mx-auto">
          <div className={`region  ${regionClass}`} >
            <h1>{quiz.region}</h1> 
          </div>

          <h2>Question {quiz.number}</h2>

          <h3>{quiz.lesson}</h3>

          <div
            style={{ overflow: "hidden", clear: "both" }}
            image={quiz.mainImage}
            answer={quiz.right_answer}
          >
            <img
              className="characters"
              id="main-pic"
              style={{ maxWidth: "70%" }}
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
