import React, { useReducer } from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

//dragdrop utils
import { Dustbin } from "../components/Dustbin";
import { OptionBox } from "../components/OptionBox";

//data
import { quiz } from "../assets/data/questions";
import { gameData } from "../assets/data/game-data";
//images
import next from "../assets/images/next.png";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

//our components
import NextButton from "../components/NextButton";

// Import our custom hook
import { useCounter } from "../utils/GameContext";

const DragDrop = memo(function DragDrop() {
  // Pluck values from our GameContext by invoking our useCounter hook
  const { triviaCounter, triviaIncrement } = useCounter();

  const { slideCounter, setSlideIncrement } = useCounter();
  let nextPath = gameData[slideCounter].nextPath;

  const options = quiz[triviaCounter].options;
  console.log(options);
 
  console.log("triviacounter");
  console.log(triviaCounter);

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

            {/*add NextButton as component to allow for conditional rendering (for "you're done" modal at end) */}
            <NextButton />

            {/**<Link to={nextPath}>
              <img
                src={next}
                alt="next question"
                className="p-4"
                onClick={() => triviaIncrement()}
              />
            </Link> */}
          </Col>
        </Row>
      </Container>
    </DndProvider>
  );
});

{
  /* //<Table.Cell>{ user.company !== null ?  <Link to={`/companies/${user.company._id}`}>{user.company.name}</Link> : null }</Table.Cell> */
}

export default DragDrop;
