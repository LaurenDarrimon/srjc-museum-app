import React, { useState, useContext } from "react";

//import { useNavigate } from "react-router-dom";

// Create our theme context using React.CreateContext()
export const GameContext = React.createContext();

// Create a custom hook that allows easy access to our ThemeContext values
export const useCounter = () => useContext(GameContext);

// Creating our theme provider. Accepts an argument of "props", here we plucking off the "children" object.
export default function gameProvider({ children }) {
  // Creating our state

  //state to track the trivia questions
  const [triviaCounter, setTriviaCounter] = useState(0);
  //state to track the mini games
  const [gameCounter, setGameCounter] = useState(0);
  //state to track the lessons
  const [lessonCounter, setLessonCounter] = useState(0);
  //state to track slide number - we'll use this to determine which slide to render next
  const [slideCounter, setSlideCounter] = useState(0);
  //state to track whether user is in museum or not
  const [onSite, setOnSite] = useState(true);

  //function takes array of all counters in this order: trivia, game, lesson, slide
  const setAllGameState = (counters) => {
    setTriviaCounter(counters[0]);
    setGameCounter(counters[1]);
    setLessonCounter(counters[2]);
    setSlideCounter(counters[3]);

    localStorage.setItem('allGameCounters', JSON.stringify(counters));
  };


  //functions for arrival on each game page, so non-local users can jump to game from Nav bar
  const setCalifornia = () => {
    console.log("Set CA");
    //counters for landing on Game page
    //NOTE: bc <LinkContainer> element is what's messing up Navbar, and I need to get rid of it- moving set__() to mini-Game pages
    setTriviaCounter(3);
    setGameCounter(0);
    setLessonCounter(3);
    setSlideCounter(6);

    console.log("slide counter:");
    console.log(slideCounter);
  };

  const setSW = () => {
    console.log("Set SW");
    //counters for landing on Game page
    setTriviaCounter(5);
    setGameCounter(1);
    setLessonCounter(6);
    setSlideCounter(12);

    console.log("slide counter:");
    console.log(slideCounter);
  };

  const setGreatPlains = () => {
    console.log("Set GreatPlains");
    //counters for landing on Game page
    setTriviaCounter(7);
    setGameCounter(2);
    setLessonCounter(9);
    setSlideCounter(18);

    console.log("slide counter:");
    console.log(slideCounter);
  };

  const setPacificNW = () => {
    console.log("Set PNW");
    //counters for landing on Game page
    setTriviaCounter(9);
    setGameCounter(3);
    setLessonCounter(12);
    setSlideCounter(24);

    console.log("slide counter:");
    console.log(slideCounter);
  };

  // Method to update our state determining if user is onsite or not
  // const isUserOnSite = () => {
  //   console.log("user answered onsite question");
  //   return setOnSite(!onSite);
  // };

  // The provider component will wrap all other components inside of it that need access to our global state
  return (
    // Both counters and methods of updating are getting provided to the child components
    <GameContext.Provider
      value={{
        setCalifornia,
        setPacificNW,
        setSW,
        setGreatPlains,
        triviaCounter,
        setTriviaCounter,
        gameCounter,
        setGameCounter,
        lessonCounter,
        setLessonCounter,
        slideCounter,
        setSlideCounter,
        setAllGameState,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
