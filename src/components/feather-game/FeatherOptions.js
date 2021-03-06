// React DND Draggable Compontent 
// (Answer choices containing Feather Image - Feather draggable onto Headdress graphic)

import React, { useState } from "react";
import { Modal, Card , Col } from "react-bootstrap";
import { useDrag } from "react-dnd";

import { ItemTypes } from "../../utils/ItemTypes";

//images
import feather from "../../assets/images/great-plains/single-feather.svg";
import mascotGoodJob from "../../assets/images/guide-animal/coyote-head.svg";
import go from "../../assets/images/buttons/go-btn.svg";

const style = {
  //padding: "1rem 1rem",
  //marginRight: "1.5rem",
  //marginBottom: "1.5rem",
  cursor: "move",
  //float: "left",
};

//moved outside of component, because counter was starting over for each feather, causing the buggy-ness
let featherNumber = 1;

export const FeatherOptions = (props) => {

  

  //right/wrong modal show/hide
  const [showModalRight1, setShowModalRight1] = useState(false);
  const [showModalRight2, setShowModalRight2] = useState(false);
  const [showModalWrong, setShowModalWrong] = useState(false);


  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: props.option,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (props && dropResult && props.rightAnswer && featherNumber == 6) {
        /*alert(
          `Great Job! You have filled headress. Progress to the next question.  `
        );*/
        setShowModalRight2(true);

        let featherToColor = document.getElementById(`feather${featherNumber}`);
        featherToColor.setAttribute("fill", "#4C9BA8")
      }
      
      if (props && dropResult && props.rightAnswer && featherNumber < 6) {
       /* alert(
          `That's right! You earned a feather. Keep adding more.`
        );*/
        setShowModalRight1(true);

        //working here to change the fill color of feathers with a given class 
        let featherToColor = document.getElementById(`feather${featherNumber}`);

        console.log("featherToColor:");
        console.log(featherToColor);
        featherToColor.setAttribute("fill", "#4C9BA8");
        //increase the feather number counter
        featherNumber++; 
        console.log(featherNumber);

    
      }

      if (props && dropResult && !props.rightAnswer) {
        //alert(` Hmm, not quite right! Please try again.`);
        setShowModalWrong(true);
      }

    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <>
    <div
      ref={drag}
      role="Box"
      className="featherCard "
      style={{ ...style, opacity }}
      data-testid={`box-${props.number}`}
    >
      <Card>
        <Card.Img variant="top" src={feather} className="feather-img"/>
        <Card.Body>
          <Card.Text>
          {props.deed}
          </Card.Text>
        </Card.Body>
      </Card>
      <h5></h5>
      <p></p>
    </div>

    {/**Correct Modal 1 (keep playing) */}

      <Modal
      show={showModalRight1}
      onHide= {() => {
        setShowModalRight1(false)
      }}
      dialogClassName="custom-modal modal-feather"
      aria-labelledby="modal-title"
      >
      <Modal.Header closeButton>
        <Modal.Title as="h1" className="pangolin-font">Good work, Explorer!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-2 fs-3 text-center">
        <p className="text-start">
          That's right! You earned a feather. Keep adding more.
        </p>
        <img
          className="mascot-good-job pt-4"
          src={mascotGoodJob}
          alt="Coyote Guide"
        />
      </Modal.Body>
      <Modal.Footer>
        <img
          onClick={() => {
            setShowModalRight1(false)
          }}
          className="img-fluid"
          src={go}
          alt="GO!"
        />
      </Modal.Footer>
      </Modal>

      {/**Correct Modal 2 (done) */}
      <Modal
      show={showModalRight2}
      onHide= {() => {
        setShowModalRight2(false)
      }}
      dialogClassName="custom-modal modal-feather"
      aria-labelledby="modal-title"
      >
      <Modal.Header closeButton>
        <Modal.Title as="h1" className="pangolin-font">Good work, Explorer!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-2 text-center fs-3">
        <p className="text-start">
          Great Job! You have filled headress. 
        </p>
        <p className="text-start">
          <span className="bold-text">Carry On to the next question.</span>
        </p>
        <img
          className="mascot-good-job pt-4"
          src={mascotGoodJob}
          alt="Coyote Guide"
        />
      </Modal.Body>
      <Modal.Footer>
        <img
          onClick={() => {
            setShowModalRight2(false)
          }}
          className="img-fluid"
          src={go}
          alt="GO!"
        />
      </Modal.Footer>
      </Modal>

      {/**Wrong Modal */}
      <Modal
      show={showModalWrong}
      onHide= {() => {
        setShowModalWrong(false)
      }}
      dialogClassName="custom-modal modal-feather"
      aria-labelledby="modal-title"
      >
      <Modal.Header closeButton>
        <Modal.Title as="h1" className="pangolin-font">Hmm, not quite right!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-2 fs-3 text-center">
        <p className="text-start">
          Please try again.
        </p>
        <img
          className="mascot-try-again pt-4"
          src={mascotGoodJob}
          alt="Coyote Guide"
        />
      </Modal.Body>
      <Modal.Footer>
        <img
          onClick={() => {
            setShowModalWrong(false)
          }}
          className="img-fluid"
          src={go}
          alt="GO!"
        />
      </Modal.Footer>
      </Modal>
      
    </>
  );
};
