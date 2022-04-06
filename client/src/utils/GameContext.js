import React, { useState, useContext } from "react";

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
  //state to track slide number - we'll use this to determine which slide to render next 
  const [slideCounter, setSlideCounter] = useState(0);
  //state to track whether user is in museum or not
  const [onSite, setOnSite] = useState(true);

  // Method to update our state
  const triviaIncrement = () => {
    console.log("trivia counter incremented");
    console.log(triviaCounter + 1);
    setSlideCounter(slideCounter + 1);
    return setTriviaCounter(triviaCounter + 1);
  };
  const gameIncrement = () => {
    console.log("game counter incremented");
    console.log(gameCounter + 1);
    setSlideCounter(slideCounter + 1);
    setGameCounter(gameCounter + 1);
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
      value={{ triviaCounter, triviaIncrement, gameCounter, gameIncrement, onSite, isUserOnSite, slideCounter}}
    >
      {children}
    </GameContext.Provider>
  );
}
