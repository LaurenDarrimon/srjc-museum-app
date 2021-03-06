// Template for all scavenger hunt/ multiple choice questions
// Content populated from "assets/data/questions.js" - see this file to add or remove content

import { React, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

//data
import { triviaData } from "../assets/data/questions";
import { regionData } from "../assets/data/region-color-classes.js";

//our components
import NextButton from "../components/navigation/NextButton";
import BackButton from "../components/navigation/BackButton";
import TriviaChoices from "../components/TriviaChoices";

// Import our custom hook/ Game counter
import { useCounter } from "../utils/GameContext";

const Trivia = () => {
  const { allGameState, setAllGameState } = useCounter();

  //check and see if there is a game counter in local storage.
  //wrap the setAllGameState call in UseEffect hook so that it does not constantly rerender
  useEffect(() => {
    if (localStorage.getItem("allGameCounters")) {
      //if there is, parse the stored string back into an array
      var allGameCounters = JSON.parse(localStorage.getItem("allGameCounters"));
      //set the game counters to the stored array
      setAllGameState(allGameCounters);
    }
  }, []);

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

  let regionClass = regionData[gameCounter].region;

  return (
    //loading or intro screen and homepage
    <Container fluid className={`trivia site-content ${regionClass}`}>
      <Row className="text-center p-4 p-sm-5">
        <Col xs={12} sm={11} className="speech-bubble py-5 mx-auto">
          <div className={`region  ${regionClass}`}>
            <h1 className="d-inline-block pe-3 mb-2 mb-sm-0">{quiz.region}</h1>
            <h2 className="region-h2-trivia">{quiz.number}</h2>
          </div>

          <div className="trivia-question-container">
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
            <h3 className="pt-4 pb-2 ">{quiz.lesson}</h3>

            <h2 className="py-1 ">{quiz.question}</h2>
          </div>

          <br />
          <TriviaChoices />

          <br />
          <br />
        </Col>

        <Col xs={6}>
          <BackButton />
        </Col>
        <Col xs={6}>
          <NextButton />
        </Col>
      </Row>
    </Container>
  );
};

export default Trivia;
