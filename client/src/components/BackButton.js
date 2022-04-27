import React from "react";
import { useHistory } from "react-router-dom";

//images
import back from "../assets/images/go-back-arrow.png";
// "next-path" linksdata
import { gameData } from "../assets/data/game-data";
// Import our custom hook
import { useCounter } from "../utils/GameContext";

const BackButton = (history) => {
  //functions, hooks, state, etc go here

  // Pluck values from our GameContext by invoking our useCounter hook
  const { triviaCounter, triviaDecrement } = useCounter();
  //track overall game slide

  const { slideCounter, setSlideIncrement } = useCounter();

  let lastPath = gameData[slideCounter].lastPath;

  const backNavigation = () => {
    history.push(`/${lastPath}`);
    //triviaDecrement();
  };

  return (
    <div>
      <img
        src={back}
        alt="next question"
        className="p-4"
        onClick={() => backNavigation()}
      />
    </div>
  );
};

export default BackButton;
