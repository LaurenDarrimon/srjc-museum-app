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

  //let navigate = useNavigate();

  // Method to update our state
  const triviaIncrement = () => {
    console.log("trivia counter incremented");
    console.log(triviaCounter + 1);
    setSlideCounter(slideCounter + 1);
    setTriviaCounter(triviaCounter + 1);
  };

  const gameIncrement = () => {
    console.log("game counter incremented");
    console.log(gameCounter + 1);
    setSlideCounter(slideCounter + 1);
    setGameCounter(gameCounter + 1);
  };

  const lessonIncrement = () => {
    console.log("lesson counter incremented");
    console.log(lessonCounter + 1);
    setSlideCounter(slideCounter + 1);
    setLessonCounter(lessonCounter + 1);
  };

  //functions for arrival on each game page, so non-local users can jump to game from Nav bar
  const setCalifornia = () => {
    console.log("Set CA");
    setTriviaCounter(3);
    setGameCounter(0);
    setLessonCounter(0);
    setSlideCounter(3);

    console.log("slide counter:");
    console.log(slideCounter);

    // let nextPath = gameData[slideCounter].nextPath;
    // console.log("nextpath")
    // console.log(nextPath)
    // navigate(`/${nextPath}`);
  };

  const setSW = () => {

    setLessonCounter(3);
    setTriviaCounter(5);
    setGameCounter(1);
    setSlideCounter(9);    
  };

  const setGreatPlains = () => {

    setLessonCounter(6);
    setTriviaCounter(7);
    setGameCounter(2);
    setSlideCounter(15);
    
  };

  const setPacificNW = () => {

    setLessonCounter(9);
    setTriviaCounter(9);
    setGameCounter(3);
    setSlideCounter(21);
  };

  // Method to update our state determining if user is onsite or not
  const isUserOnSite = () => {
    console.log("user answered onsite question");
    return setOnSite(!onSite);
  };

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
        triviaIncrement,
        setTriviaCounter,
        gameCounter,
        setGameCounter,
        gameIncrement,
        lessonCounter,
        setLessonCounter,
        lessonIncrement,
        onSite,
        isUserOnSite,
        slideCounter,
        setSlideCounter,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
