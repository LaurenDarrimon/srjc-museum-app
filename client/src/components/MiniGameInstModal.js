import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";



const InstructionModal = () => {
  //full screen modal with instructions for mini-games
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal 
          show={show}
          onHide={handleClose}
          dialogClassName="instructions-modal"
          aria-labelledby="example-custom-modal-styling-title"
          >
          <Modal.Header closeButton>
            <Modal.Title>Mini Game Title</Modal.Title>
          </Modal.Header>
          <Modal.Body className="instructions-modal-body">
            <p>
              Now that you've learned about 
              the people of the American Great Plains, lets put your brain to work!
            </p>
            <p>
              What sorts of actions would earn a feather in your ceremonial war bonnet?
            </p>
            <p>
              If a card contains a good deed that would earn a feather, Drag and Drop 
              the card onto the War Bonnet on the right. (Definitely need to workshop the wording)
            </p>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default InstructionModal;