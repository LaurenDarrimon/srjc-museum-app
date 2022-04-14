import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

import { Link } from "react-router-dom";

import { useCounter } from "../utils/GameContext";

const Navigation = () => {
  //functions, hooks, state, etc go here

  //counters for navigating directly to mini-game from Nav, rather than through Game
  const { countGreatPlains, setGreatPlains } = useCounter();
  const { countCalifornia, setCalifornia } = useCounter();
  const { countSW, setSW } = useCounter();
  const { countPacificNW, setPacificNW } = useCounter();

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
            <NavDropdown title="Regions" id="basic-nav-dropdown">

              <LinkContainer to="/lesson" onClick={() => setCalifornia()}>
                <NavDropdown.Item>California</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/lesson" onClick={() => setPacificNW()}>
                <NavDropdown.Item>Pacific Northwest</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/lesson" onClick={() => setSW()}>
                <NavDropdown.Item>Southwest</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/lesson" onClick={() => setGreatPlains()}>
                <NavDropdown.Item>Great Plains</NavDropdown.Item>
              </LinkContainer>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
