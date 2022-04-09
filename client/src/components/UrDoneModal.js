import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

//images
import mascotGreatJob from "../assets/images/speech-bubble-mascot-greatjob.png";

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
          dialogClassName="custom-modal modal-urdone"
          aria-labelledby="modal-title"
          >
          <Modal.Header closeButton>
            <Modal.Title as="h1">Yay!</Modal.Title>  
          </Modal.Header>
          <Modal.Body>
            <h2>
                You Completed the Game!
            </h2>
            <img className='mascot-urdone img-fluid' src={mascotGreatJob} alt="Mascot says 'Woohoo! Great Job'" />
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