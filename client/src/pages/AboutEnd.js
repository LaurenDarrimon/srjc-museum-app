import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import pattern from "../assets/images/southwest/pottery/fertility1.svg";
import { Link } from "react-router-dom";


const About = () => {
  //functions, hooks, state, etc go here

  //return JSX
  return (
    //loading or intro screen and homepage
    <Container fluid className="aboutend region-california p-5 site-content">
      <Row className="mx-auto justify-content-center">
        <Col xs={12} className="text-center">
          <h1 className="display-1 pangolin-font">Thanks for Playing!</h1>
        </Col>
        <Col xs={6} lg={4}>
            <img src={pattern} alt="Southwestern Butterfly Pattern" className="mx-auto pt-4" />
        </Col>
        <Col xs={12} className="text-center display-2 ">
            <Link to="/about">
                <Button className="mt-5 btn-primary">About this Game</Button>
            </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
