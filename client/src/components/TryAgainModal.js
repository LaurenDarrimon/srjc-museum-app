import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

//images
import mascotGuideInstructions from "../assets/images/speech-bubble-mascot-instructions.png";
import go from "../assets/images/go-btn.png"
import mascotTryAgain from "../assets/images/speech-bubble-mascot-tryagain.png";

const TryAgainModal = () => {
  //full screen modal to show when user answers a question wrong
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Launch "Try Again" Modal
        </Button>
  
        <Modal 
          show={show}
          onHide={handleClose}
          dialogClassName="custom-modal"
          aria-labelledby="modal-title"
          >
          <Modal.Header closeButton>
            <Modal.Title as="h1">Try Again!</Modal.Title>  
          </Modal.Header>
          <Modal.Body className="instructions-modal-body">
            <p className='bold-text'>
              Sorry that's not the right answer.
            </p>
            <p>
              Look around at the signs on the walls in the museum, and the pictures next to the artifacts. There you'll find clues to the right answer.
            </p>
            <img className='modal-img-mascot-instructions img-fluid' src={mascotTryAgain} alt="Click on the Mascot in the lower left corner to see these instructions again" />
            </Modal.Body>
          <Modal.Footer>
            <img onClick={handleClose} className='img-fluid' src={go} alt="GO!" />
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default TryAgainModal;