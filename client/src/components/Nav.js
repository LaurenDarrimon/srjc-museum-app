import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  //functions, hooks, state, etc go here

  //return JSX
  return (
    <Navbar expand="lg" className="navigation navbar-dark ">
      <Container>
        {/* <Navbar.Brand href="#home" className="navigation">Start Over</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/home" className="navigation">Start Over</Nav.Link>
          <Nav.Link href="/overview" className="navigation">Overview</Nav.Link>
            <Nav.Link href="/about" className="navigation">About</Nav.Link>
            <Nav.Link href="/instructions" className="navigation">Help</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
