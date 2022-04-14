import React from "react";
import { useDrag } from "react-dnd";

import { Container, Row, Col } from "react-bootstrap";

export function PotteryPattern({ src, number }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { number: number },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <>
      <Col m={0} p={0} >
        <img
          ref={drag}
          src={src}
          alt=""
          width={"100px"}
          style={{ opacity }}
        />
      </Col>
    </>
  );
}
