import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

//images
import mascotGuideInstructions from "../assets/images/speech-bubble-mascot-instructions.svg";
import go from "../assets/images/go-btn.svg"
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
          dialogClassName="custom-modal instructions-modal"
          aria-labelledby="instructions-modal-title"
          >
          <Modal.Header closeButton>
            <Modal.Title as="h1"className="instructions-modal-title display-5">{props.title} <br /><span className="instructions-modal-subtitle">Mini-Game</span></Modal.Title>  
          </Modal.Header>
          <Modal.Body className="instructions-modal-body">
            <p className='fs-3'>
            {props.p1}
            </p>
            <p className='text-400 fs-3 '>
            {props.pBold}
            </p>
            <p className='fs-3'>
            {props.p3}
            </p>
            <img className='modal-img-mascot-instructions img-fluid mt-4 mb-3 mt-sm-5 mx-auto' src={mascotGuideInstructions} alt="Click on the Mascot in the lower left corner to see these instructions again" />
            </Modal.Body>
          <Modal.Footer>
            <img onClick={handleClose} className='img-fluid p-4' src={go} alt="GO!" />
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default InstructionModal;