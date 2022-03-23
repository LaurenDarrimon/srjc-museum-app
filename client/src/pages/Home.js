import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-500.png";
import play from "../assets/images/play-btn.png";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//this is the loading page
const Home = () => {
  return (
    //loading or intro screen and homepage
    <Container fluid className="home">
      <Row className="d-flex justify-content-center text-center p-5">
        <Col className="align-items-center py-5">
          <img
            src={logo}
            className="col-md-5 p-4 logo"
            alt="round SRJC logo showing black on white pottery design"
          />
          <h2 className="subtitle p-4">North American Art</h2>
          <h1>SCAVENGER HUNT</h1>
          <a>
            <img src={play} alt="white arrow play button" className="p-4"/>
          </a>
        </Col>
      </Row>
      <Row>
        <footer>
          <br></br>
          <br></br>
        </footer>
      </Row>
    </Container>
  );
};

export default Home;
