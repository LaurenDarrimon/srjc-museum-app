// Main Navigation

import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {

  //return JSX
  return (

    <Navbar fixed="top" variant="dark" expand="lg" className="navigation">
      <Container>
        {/* <Navbar.Brand href="#home" className="navigation">Start Over</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="navigation">
              Start Over
            </Nav.Link>
            <NavDropdown title="Mini-Games" id="basic-nav-dropdown">
              <NavDropdown.Item href="/California">California</NavDropdown.Item>
              <NavDropdown.Item href="/Southwest" >Southwest</NavDropdown.Item>
              <NavDropdown.Item href="/GreatPlains">Great Plains</NavDropdown.Item>
              <NavDropdown.Item href="/PacificNW" >Pacific Northwest</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/culturetoday" className="navigation">
              Culture Today
            </Nav.Link>
            <Nav.Link href="/instructions" className="navigation">
              Help
            </Nav.Link>
            <Nav.Link href="/about" className="navigation">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;