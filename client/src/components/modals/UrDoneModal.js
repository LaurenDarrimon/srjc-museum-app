// You're Done Modal - very end of game only
// called conditionally by NextButton component

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

//images
import mascotGreatJob from "../../assets/images/guide-animal/speech-bubble-mascot-greatjob.svg";
import next from "../../assets/images/buttons/next.png";
// "next-path" linksdata
import { gameData } from "../../assets/data/game-data";
// Import our custom hook
import { useCounter } from "../../utils/GameContext";

const UrDoneModal = () => {
  //full screen modal to show when user answers a question wrong

  //functions, hooks, state, etc go here
  const { triviaCounter, triviaIncrement } = useCounter();
  //track overall game slide
  const { slideCounter, setSlideIncrement } = useCounter();
 
  let nextPath = gameData[slideCounter].nextPath;

  //modal showing t/f
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <img
          src={next}
          alt="next question"
          className="p-4"
          onClick={handleShow}
        />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="custom-modal modal-urdone"
        aria-labelledby="modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title as="h1">Yay! <br/>You Finished!</Modal.Title>
        </Modal.Header>
        <Modal.Body className=' text-center'>
          <img className='mascot-urdone pt-5' src={mascotGreatJob} alt="Mascot says 'Woohoo! Great Job'" />
        </Modal.Body>
        <Modal.Footer>
          <Link to={nextPath} onClick={() => {triviaIncrement(); handleClose()}}>
            <img
              src={next}
              alt="next question"
              className="p-4"
            /> 
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UrDoneModal;