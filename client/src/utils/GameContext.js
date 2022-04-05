import React, { useState, useContext } from 'react';

// Create our theme context using React.CreateContext()
export const ThemeContext = React.createContext();

// Create a custom hook that allows easy access to our ThemeContext values
export const useCounter = () => useContext(ThemeContext);

// Creating our theme provider. Accepts an argument of "props", here we plucking off the "children" object.
export default function ThemeProvider({ children }) {
  // Creating our state

  //state to track the trivia questions
  const [triviaCounter, setTriviaCounter] = useState(0);
  //state to track the mini games 
  const [gameCounter, setGameCounter] = useState(0);

  // Method to update our state 
  const triviaIncrement = () => {
      console.log("trivia counter incremented");
      console.log(triviaCounter + 1);
      return setTriviaCounter(triviaCounter + 1)
    }
  const gameIncrement = () => {
        console.log("game counter incremented");
        console.log(gameCounter + 1);
        return setGameCounter(gameCounter + 1)
    }

  // The provider component will wrap all other components inside of it that need access to our global state
  return (
    // Both counters and methods of updating are getting provided to the child components
    <ThemeContext.Provider value={{ triviaCounter, triviaIncrement, gameCounter, gameIncrement }}>
      {children}
    </ThemeContext.Provider>
  );
}