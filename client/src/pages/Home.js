import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//images
import logo from "../assets/images/museum-logo-red-blue-bar.png";
import logo2 from "../assets/images/logo-500.png";
import next from "../assets/images/next.png";
import animalGuide from "../assets/images/coyote.svg"

//this is the loading page
const Home = () => {
  return (
    //loading or intro screen and homepage
    <>
      <Container fluid className="home site-content">
        <Row>
          <Col xs={{ span: 7, offset: 4 }}>
            <img className=" pb-3 img-fluid" src={logo} alt="SRJC logo" />
          </Col>
          <Col xs={11} md={{ span: 9, offset: 2 }} className="speech-bubble speech-bubble-md text-center">
            <h1 className="d-inline-block mx-auto ">
              <span className="sub-heading-home display-3">Native American Art</span>
              <br />
              <span className="main-heading-home display-2">SCAVENGER HUNT</span>
            </h1>
            <p className="h3 subtitle-home">
              Learn about <span className="text-400">Native American Art and Culture </span>while exploring the museum!
            </p>
            <Link to="/instructions">
              <img className="img-fluid next-btn py-5" src={next} alt="next button" />
            </Link>
            <div className="bottom-section">

              <div className="not-onsite-info">
                <Accordion defaultActiveKey="1" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="teal-text">
                      If you are not at the museum, you can still play!
                      <br />
                      <br />
                      Click Here to Learn How.
                    </Accordion.Header>
                    <Accordion.Body>
                       <span className="text-400">There are 4 games you can play without any help from the museum's exhibits.</span> Access them through the <span className="text-400">"Mini-Games" link</span> in the menu.
                      <br />
                      <br />
                      <span className="text-400">You can still try your best on the scavenger hunt if you would like!</span> You wont have access to clues in the museum, but there is no penalty for guessing.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

          </Col>
          <img className="main-guide-img" src={animalGuide} alt="cute blue coyote" />
        </Row>
      </Container>
    </>
  );
};

export default Home;
