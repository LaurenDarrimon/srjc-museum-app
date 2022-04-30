import React, { useState } from "react";
import { PotteryPattern } from "./PotteryPattern";
import { useDrop } from "react-dnd";
import { Container, Row, Col } from "react-bootstrap";

//import { TestPotteryDesigns } from "./TestPotteryDesigns";

import { potteryData } from "../assets/data/southwest-data";

export function PotteryDrop() {
  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImage(item.number),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImage = (number) => {
    const droppedPictures = potteryData.filter(
      (picture) => number === picture.number
    );
    setBoard((board) => [...board, droppedPictures[0]]);
  };

  return (
    <div className="container">
      <div className="drag-box">
    
        <Row xs={11} md={5}>
          {potteryData.map((picture) => (
            <PotteryPattern
              key={picture.number}
              src={require(`../assets/images/southwest/pottery/${picture.image}`)}
              number={picture.number}
            />
          ))}
        </Row>
      </div>

      <div
        className="drop-board"
        ref={drop}
        style={{ border: isOver ? "3px solid red" : "1px solid black" }}
      >
        <Row xs={11} md={5} className="pot-design-row">
          {board.map((picture) => (
            <PotteryPattern
              key={picture.number}
              src={require(`../assets/images/southwest/pottery/${picture.image}`)}
              number={picture.number}
            />
          ))}
        </Row>
      </div>
    </div>
  );
} 