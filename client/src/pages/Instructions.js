import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import go from "../assets/images/go-btn.png";
import mascotBubble from "../assets/images/speech-bubble-mascot-guide.png";
import potNumbers from "../assets/images/pot-and-numbers-graphic.png";


const Instructions = () => {
  //functions, hooks, state, etc go here

  //return JSX
  return (
    //loading or intro screen and homepage
    <main className="instructions site-content">
      <div className="speech-bubble-fullscreen">
        <h1>Instructions</h1>
        <p>
          Some text describing how the game works. Each item in the museum has a
          small number next to it. We will show you a picture of an art piece,
          and you'll look around to find it in the museum (along with its
          number.)
        </p>
        <img
          src={potNumbers}
          alt="illustration of dragging the number onto the image of a piece of pottery"
        />

        <p>
          <strong>Drag and Drop</strong> the item's number onto its picture when
          you find it in the real-life exhibit.
        </p>

        <img
          src={mascotBubble}
          alt='little mascot says "Hi my name is __, Ill be your guide through the game"'
        />

        <h2>Are you ready?</h2>
        <Link className="big-round-GO-btn" to="/dragdrop">
          <img src={go} alt="GO!" />
        </Link>
      </div>
    </main>
  );
};

export default Instructions;