import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

//images
import go from "../assets/images/buttons/go-btn.svg";
import mascotTryAgain from "../assets/images/guide-animal/speech-bubble-mascot-tryagain.svg";
import mascotGoodJob from "../assets/images/guide-animal/speech-bubble-mascot-greatjob.svg";
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
          dialogClassName="custom-modal modal-try-again trivia"
          aria-labelledby="modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title as="h1">Try Again, Explorer!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-4 fs-3 text-center">
            <p className="text-start">
              Look around at the signs on the walls, and the
              pictures next to the objects. There you'll find clues to the
              right answer.
            </p>
            <img
              className="mascot-try-again pt-4"
              src={mascotTryAgain}
              alt=""
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
          dialogClassName="custom-modal trivia"
          aria-labelledby="modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title as="h1">Good work, Explorer!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-2 text-center">
            <p className="fs-3 text-start">
              {quiz.correctMessage}
            </p>
            <img
              className="mascot-good-job pt-4"
              src={mascotGoodJob}
              alt="good job!"
            />
          </Modal.Body>
          <Modal.Footer>
            <img
              onClick={handleClose}
              className="img-fluid p-1"
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
