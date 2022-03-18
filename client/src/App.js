//This is the overall wrapper for the Game, that all the other components will live inside

import React, { useState, UseEffect } from "react";
//import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
// import DragDrop from "./pages/DragDrop";
// import Fish from "./pages/Fish";
// import Pottery from "./pages/Pottery";
// import GreatPlains from "./pages/GreatPlains";
// import Instructions from "./pages/Instructions";
// import Progress from "./pages/Progress";

//import './assets/css/fonts.css';
import './index.css';

export default function Game() {
  const [currentPage, setCurrentPage] = useState("Home");

  //render the component of the page user is on
  //instead of using href to link to a different page, our Handle page change fxn
  //renders a different component
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home/>;
    }
    // if (currentPage === "Intro") {
    //   return <Intro />;
    // }
    // if (currentPage === "Instructions") {
    //   return <Instructions />;
    // }
    // if (currentPage === "DragDrop") {
    //   return <DragDrop />;
    // }
    // if (currentPage === "GreatPlains") {
    //   return <GreatPlains />;
    // }
    // if (currentPage === "Fish") {
    //   return <Fish />;
    // }
    // if (currentPage === "Pottery") {
    //   return <Pottery />;
    // }
    // if (currentPage === "Progress") {
    //   return <Progress />;
    // }
    // return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  //pass the state (current page) and the function to update it to JSX to render component
  return (
    <div>
      {/* <Nav currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {renderPage()}
    </div>
  );
}
