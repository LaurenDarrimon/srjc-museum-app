import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/images/logo-500.png";

const About = () => {
  //functions, hooks, state, etc go here

  //return JSX
  return (
    //loading or intro screen and homepage
    <Container fluid>
      <Row className="justify-content-center p-5">
        <Col xs={12} className="text-center">
          <h1 className="subtitle p-5">About </h1>
        </Col>
        <Col xs={11} md={8}>
          <h2>THIS GAME</h2>
          <p>
            Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
            yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin
            grog yardarm hempen halter furl. Swab barque interloper chantey
            doubloon starboard grog black jack gangway rutters.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center p-5">
        <Col xs={11} md={5}>
          <h2>THIS MUSUEM </h2>
          <p>
            Deadlights jack lad schooner scallywag dance the hempen jig carouser
            broadside cable strike colors. Bring a spring upon her cable
            holystone blow the man down spanker Shiver me timbers to go on
            account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul
            squiffy black spot yardarm spyglass sheet transom heave to.
          </p>
        </Col>
        <Col xs={11} md={3}>
          <img
            src={logo}
            className="logo"
            alt="round SRJC logo showing black on white pottery design"
          />
        </Col>
        </Row>
        <Row className="justify-content-center p-5">
        <Col xs={11} md={8}>
          <h2>OUR TEAM</h2>
          <p>
            Trysail Sail ho Corsair red ensign hulk smartly boom jib rum
            gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup
            ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of
            the seven seas boatswain schooner gaff booty Jack Tar transom
            spirits.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
