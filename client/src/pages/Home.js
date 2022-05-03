import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useCounter } from "../utils/GameContext";

//images
import logo from "../assets/images/museum-logo-red-blue-bar.png";
import next from "../assets/images/next.png";
import animalGuide from "../assets/images/coyote.svg";

//this is the loading page
const Home = () => {

  const { allGameState, setAllGameState } = useCounter();
  setAllGameState([0,0,0,0]);


  return (
    //loading or intro screen and homepage
    <>
      <Container fluid className="home site-content">
        <Row>
          <Col xs={{ span: 7, offset: 4 }} >
            <img className="pb-3 img-fluid" src={logo} alt="SRJC logo" />
          </Col>
          <Col
            xs= {{ span: 10, offset: 1 }}
            sm= {{ span: 9, offset: 2 }}
            md= {{ span: 9, offset: 2}}
            lg={{ span: 8, offset: 3 }}
            className="text-center speech-bubble mt-xs-3 mt-sm-1 mt-md-0 mt-lg-5"
          >
            <h1 className="d-inline-block mx-auto ">
              <span className="sub-heading-home display-5 display-md-4">
                Native American Art
              </span>
              <br />
              <span className="main-heading-home display-2">
                SCAVENGER HUNT
              </span>
            </h1>
            <p className="h3 subtitle-home">
              Learn about{" "}
              <span className="text-400">Native American Art and Culture </span>
              while exploring the museum!
            </p>
            <div className="w-100 d-block">
              <Link to="/instructions" >
                <img
                  className="img-fluid next-btn py-3 py-sm-5 "
                  src={next}
                  alt="next button"
                  style={{ textAlign: "right" }}
                />
              </Link>
            </div>
            <div className="bottom-section w-75 float-end">
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
                      <span className="text-400">
                        There are 4 games you can play without any help from the
                        museum's exhibits.
                      </span>{" "}
                      Access them through the{" "}
                      <span className="text-400">"Regions" link</span> in the
                      menu.
                      <br />
                      <br />
                      <span className="text-400">
                        You can still try your best on the scavenger hunt if you
                        would like!
                      </span>{" "}
                      You wont have access to clues in the museum, but there is
                      no penalty for guessing.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </Col>
  
            <img
              className="main-guide-img"
              src={animalGuide}
              alt="cute blue coyote"
            />

        </Row>
      </Container>
    </>
  );
};

export default Home;
