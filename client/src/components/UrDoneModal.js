import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

//images
import mascotTryAgain from "../assets/images/speech-bubble-mascot-tryagain.png";

const UrDoneModal = () => {
  //full screen modal to show when user answers a question wrong
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Launch "You've Completed the Game!" Modal
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
            <h1>
              Yay! You Completed the Game!
            </h1>
            <img className='modal-img-mascot-instructions img-fluid' src={mascotTryAgain} alt="Mascot says 'Woohoo! Great Job'" />
            </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
      </>
    );
  }
  
  export default UrDoneModal;