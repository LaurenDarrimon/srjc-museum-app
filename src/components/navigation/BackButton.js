// Back Button / Decrement Button (sets all game counters on click)
// Use instead of Browser Back Btn


import React from "react";
import { Link } from "react-router-dom";

//images
import back from "../../assets/images/buttons/go-back-arrow.png";
// "next-path" links data
import { gameData } from "../../assets/data/game-data";
// Import our custom hook
import { useCounter } from "../../utils/GameContext";

const BackButton = () => {

  // Pluck values from our GameContext by invoking our useCounter hook
  const { slideCounter, setSlideIncrement } = useCounter();

  const { allGameState, setAllGameState } = useCounter();

  let lastPath = gameData[slideCounter].lastPath;

  if (slideCounter > 0) {
    let lastStateCounters = gameData[slideCounter - 1].stateCounters;

    return (
      <Link to={lastPath}>
        <img
          src={back}
          alt="back to previous slide"
          className="p-4"
          onClick={() => setAllGameState(lastStateCounters)}
        />
      </Link>
    );
  } else {
    return (
      <Link to="/museum/instructions">
        <img
          src={back}
          alt="back to previous slide"
          className="p-4"
          onClick={() => setAllGameState([0, 0, 0, 0])}
        />
      </Link>
    );
  }
};

export default BackButton;
