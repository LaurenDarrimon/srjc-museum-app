import React from "react";
import { Link } from "react-router-dom";

//import modal
import UrDoneModal from "../components/UrDoneModal";
//images
import next from "../assets/images/next.png";
// "next-path" linksdata
import { gameData } from "../assets/data/game-data";
// Import our custom hook
import { useCounter } from "../utils/GameContext";

const NextButton = () => {
  // Pluck values from our GameContext by invoking our useCounter hook

  const { slideCounter, setSlideIncrement } = useCounter();

  const { allGameState, setAllGameState } = useCounter();

  let nextPath = gameData[slideCounter].nextPath;

  if (slideCounter == 25) {
    //render next button as modal trigger
    return <UrDoneModal />;
  } else {
    let nextStateCounters = gameData[slideCounter + 1].stateCounters;

    return (
      <Link to={nextPath}>
        <img
          src={next}
          alt="next question"
          className="p-4"
          onClick={() => setAllGameState(nextStateCounters)}
        />
      </Link>
    );
  }
};

export default NextButton;
