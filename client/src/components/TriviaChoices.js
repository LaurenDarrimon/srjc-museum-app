import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

//images
import go from "../assets/images/go-btn.png";
import mascotTryAgain from "../assets/images/speech-bubble-mascot-tryagain.png";
import mascotGoodJob from "../assets/images/speech-bubble-mascot-greatjob.png";
//data
import { triviaData } from "../assets/data/questions";

// Import our custom hook
import { useCounter } from "../utils/GameContext";

const TriviaChoices = () => {
  //full screen modal to show when user answers a question wrong
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [playerChoice, setPlayerChoice] = useState("");

  const handleShow = (e) => {
    //display the modal
    setShow(true);
    //set the player choice from the data attribute on the click event 
    setPlayerChoice(e.target.dataset.player_choice);
  }


  // Pluck values from our GameContext by invoking our useCounter hook
  const { triviaCounter, triviaIncrement } = useCounter();

  const quiz = triviaData[triviaCounter];
  const options = quiz.options;

  return (
    <>
      {/* map through the array of options to render a button for each answer option */}
      {options.map((option) => (
        <Button
          key={option}
          className="answers"
          data-answer={quiz.right_answer}
          data-player_choice = {option}
          onClick={handleShow}
        >
          {option}
        </Button>
      ))}

    
      {/* if the player chose the WRONG answer show this modal */}
      {quiz.right_answer != playerChoice ? (
        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName="custom-modal"
          aria-labelledby="modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title as="h1">Try Again, Explorer!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="instructions-modal-body">
            <p className="bold-text">Sorry that's not the right answer.</p>
            <p>
              Look around at the signs on the walls in the museum, and the
              pictures next to the artifacts. There you'll find clues to the
              right answer.
            </p>
            <img
              className="modal-img-mascot-instructions img-fluid"
              src={mascotTryAgain}
              alt="Click on the Mascot in the lower left corner to see these instructions again"
            />
          </Modal.Body>
          <Modal.Footer>
            <img
              onClick={handleClose}
              className="img-fluid"
              src={go}
              alt="GO!"
            />
          </Modal.Footer>
        </Modal>
      ) 
      : 
      (
        //  if the player chose the the RIGHT answer show this modal
        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName="custom-modal"
          aria-labelledby="modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title as="h1">That's Right!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="instructions-modal-body">
            <p className="bold-text">Good work, Explorer.</p>
            <p>
              {quiz.correctMessage}
            </p>
            <img
              className="modal-img-mascot-instructions img-fluid"
              src={mascotGoodJob}
              alt="Click on the Mascot in the lower left corner to see these instructions again"
            />
          </Modal.Body>
          <Modal.Footer>
            <img
              onClick={handleClose}
              className="img-fluid"
              src={go}
              alt="GO!"
            />
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default TriviaChoices;
