import React from "react";
import { useDrag } from "react-dnd";

import { Container, Row, Col } from "react-bootstrap";

export function PotteryPattern({ src, number }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { number: number },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <>
      <Col xs={6}>
        <img
          ref={drag}
          src={src}
          alt=""
          width={"150px"}
          style={{ opacity: isDragging ? "50%" : "100%" }}
        />
      </Col>
    </>
  );
}
