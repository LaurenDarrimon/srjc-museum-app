//This is the overall wrapper for the Game, that all the other components will live inside

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

import Navigation from "./components/navigation/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import TheEnd from "./pages/TheEnd";
import Instructions from "./pages/Instructions";
import Trivia from "./pages/Trivia";
import GreatPlains from "./pages/GreatPlains";
import California from "./pages/California";
import PacificNW from "./pages/PacificNW";
import Southwest from "./pages/Southwest";
import Lesson from "./pages/Lesson";
import CultureToday from "./pages/CultureToday";

// Importing our theme provider which will make our global state available to child components
import CountProvider from './utils/GameContext';
//style sheet
import "./index.css";

//Client side routing. These URL paths will call on the specified React pages. 
function App() {
  return (
      <Router>
      {/* The context provider CountProvider gives acess to the game's React Context API (information and functions 
      from src/utils/GameContext.js) to all the components within it.  */}
      <CountProvider>
        <Container fluid className="flex-column justify-flex-start min-100-vh ">
          <Navigation />
          <Row>
              <Routes>
                <Route path="/museum" element={<Home />} />

                <Route path="/museum/instructions" element={<Instructions />} />

                <Route path="/museum/trivia" element={<Trivia />} />

                <Route path="/museum/about" element={<About />} />

                <Route path="/museum/theend" element={<TheEnd />} />

                <Route path="/museum/california" element={<California />} />

                <Route path="/museum/greatplains" element={<GreatPlains />} />

                <Route path="/museum/southwest" element={<Southwest />} />

                <Route path="/museum/pacificnw" element={<PacificNW />} />

                <Route path="/museum/lesson" element={<Lesson />} />

                <Route path="/museum/culturetoday" element={<CultureToday />} />

              </Routes>
          </Row>
        </Container>
        </CountProvider>
      </Router>
  ); 
}

export default App;
