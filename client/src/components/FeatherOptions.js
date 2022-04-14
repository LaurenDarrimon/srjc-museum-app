import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";

import { Card } from "react-bootstrap";

import feather from "../assets/images/great-plains/single-feather.svg";

const style = {
  padding: "1rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
};
export const FeatherOptions = (props) => {

let featherNumber = 1

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: props.option,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (props && dropResult && props.rightAnswer && featherNumber >= 6) {
        alert(
          `That's right! You have filled the war bonnet. Progress to the next question.  `
        );

        let featherToColor = document.getElementById(`feather${featherNumber}`);
        featherToColor.setAttribute("fill", "#c24744")
      }
      
      if (props && dropResult && props.rightAnswer && featherNumber < 6) {
        alert(
          `That's right! That was a deed worthy of a feather in a war bonnet. Keep adding more deeds.`
        );

        //working here to change the fill color of feathers with a given class 
        let featherToColor = document.getElementById(`feather${featherNumber}`);

        console.log("featherToColor:")
        console.log(featherToColor)
        featherToColor.setAttribute("fill", "#c24744")
        //increase the feather number counter
        featherNumber++; 
      }

      if (props && dropResult && !props.rightAnswer) {
        alert(` Hmm, not quite right! Please try again.`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div
      ref={drag}
      role="Box"
      className="featherCard"
      style={{ ...style, opacity }}
      data-testid={`box-${props.number}`}
    >
      <Card xs={6} style={{ width: "14rem" }} >
        <Card.Img variant="top" src={feather} style={{ height: "12rem" }}/>
        <Card.Body>
          {/* <Card.Title>{props.title}</Card.Title> */}
          <Card.Text>
          {props.deed}
          </Card.Text>
          {/* later we can add a more info button as a stretch goal */}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <h5></h5>
      <p></p>
    </div>
  );
};
