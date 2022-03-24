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
    <>
      <Container fluid className="home site-content">
        <Row className=" text-center">
          <Col>
            <img
              src={logo}
              className="col-md-5 p-4 logo"
              alt="round SRJC logo showing black on white pottery design"
            />
            <h2 className="subtitle p-4">North American Art</h2>
            <h1>SCAVENGER HUNT</h1>
            <Link to="/overview">
              <img src={play} alt="white arrow play button" className="p-4" />
            </Link>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer"> 
          <br></br>
          <br></br>
      </Container>
    </>
  );
};

export default Home;
