import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

//images
import mascotGuideInstructions from "../assets/images/speech-bubble-mascot-instructions.svg";
import go from "../assets/images/go-btn.png"
import mascotGuide from "../assets/images/speech-bubble-mascot-instructions-3.svg";

const InstructionModal = (props) => {
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
            width= "300px"
          />
        </div>
  
        <Modal 
          show={show}
          onHide={handleClose}
          dialogClassName="custom-modal"
          aria-labelledby="instructions-modal-title"
          >
          <Modal.Header closeButton>
            <Modal.Title as="h1"className="instructions-modal-title">{props.title} <br /><span className="instructions-modal-subtitle">Mini-Game</span></Modal.Title>  
          </Modal.Header>
          <Modal.Body className="instructions-modal-body">
            <p>
            {props.p1}
            </p>
            <p className='bold-text'>
            {props.pBold}
            </p>
            <p>
            {props.p3}
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