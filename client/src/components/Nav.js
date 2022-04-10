import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  //functions, hooks, state, etc go here

  //return JSX
  return (
    <Navbar fixed="top" expand="lg" className="navigation navbar-dark ">
      <Container>
        {/* <Navbar.Brand href="#home" className="navigation">Start Over</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="navigation">
              Start Over
            </Nav.Link>
            <Nav.Link href="/overview" className="navigation">
              Overview
            </Nav.Link>
            <Nav.Link href="/about" className="navigation">
              About
            </Nav.Link>
            <Nav.Link href="/instructions" className="navigation">
              Help
            </Nav.Link>
            <NavDropdown title="Mini Games" id="basic-nav-dropdown">
              <NavDropdown.Item href="/fishing">California</NavDropdown.Item>
              <NavDropdown.Item href="/pacificnw">
                Pacific North West
              </NavDropdown.Item>
              <NavDropdown.Item href="/southwest">Southwest</NavDropdown.Item>
              <NavDropdown.Item href="/greatplains">
                Great Plains
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
