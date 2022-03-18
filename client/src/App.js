//This is the overall wrapper for the Game, that all the other components will live inside

import React, { useState, UseEffect } from "react";
import Navigation from "./components/Nav";
import Loading from "./pages/Loading";
import About from "./pages/About";
// import DragDrop from "./pages/DragDrop";
// import Fish from "./pages/Fish";
// import Pottery from "./pages/Pottery";
// import GreatPlains from "./pages/GreatPlains";
// import Instructions from "./pages/Instructions";
// import Progress from "./pages/Progress";

//import './assets/css/fonts.css';
import './index.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  //render the component of the page user is on
  //instead of using href to link to a different page, our Handle page change fxn
  //renders a different component
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Loading/>;
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
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
