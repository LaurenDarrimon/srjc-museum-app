import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

//images
import mascotGuideInstructions from "../assets/images/speech-bubble-mascot-instructions.png";
import go from "../assets/images/go-btn.png"
import mascotGuide from "../assets/images/speech-bubble-mascot-tip-2.png";

const InstructionModal = () => {
  //full screen modal with instructions for mini-games
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div className='showInstructions-btn'>
          <img 
            onClick={handleShow}
            src={mascotGuide}
            alt="You've got this!"
            className="img-fluid"
          />
        </div>
  
        <Modal 
          show={show}
          onHide={handleClose}
          dialogClassName="custom-modal"
          aria-labelledby="instructions-modal-title"
          >
          <Modal.Header closeButton>
            <Modal.Title as="h1"className="instructions-modal-title">Region / Title <br /><span className="instructions-modal-subtitle">Mini-Game</span></Modal.Title>  
          </Modal.Header>
          <Modal.Body className="instructions-modal-body">
            <p>
              Now that you've learned about 
              the people of the American Great Plains, lets put your brain to work!
            </p>
            <p className='bold-text'>
              What sorts of actions would earn a feather in your ceremonial war bonnet?
            </p>
            <p>
              If a card contains a good deed that would earn a feather, Drag and Drop 
              the card onto the War Bonnet on the right. (Definitely need to workshop the wording)
            </p>
            <img className='modal-img-mascot-instructions img-fluid' src={mascotGuideInstructions} alt="Click on the Mascot in the lower left corner to see these instructions again" />
            </Modal.Body>
          <Modal.Footer>
            <img onClick={handleClose} className='img-fluid' src={go} alt="GO!" />
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default InstructionModal;