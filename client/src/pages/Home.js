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
          <Col xs={12}>
            <img
              src={logo}
              className="col-md-5 p-4 logo"
              alt="round SRJC logo showing black on white pottery design"
            />
          </Col>
          <Col xs={12}>
            <h1 className="display-4">Welcome!</h1>
            <h2>
              <span className=" subtitle-home">to the </span>
              <br />
              <span className="sub-heading-home display-5">North American Art</span>
              <br />
              <span className="display-4">SCAVENGER HUNT</span>
            </h2>
         
            {/*<Link to="/overview">
              <img src={play} alt="white arrow play button" className="p-4" />
            </Link>*/}
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
