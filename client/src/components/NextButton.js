import React from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
//import modal
import UrDoneModal from "../components/UrDoneModal";
//images
import next from "../assets/images/next.png";
// "next-path" linksdata
import { gameData } from "../assets/data/game-data";
// Import our custom hook
import { useCounter } from "../utils/GameContext";

const NextButton = () => {
    // next button modal
    // only on trivia pages (to conditionally render "end game" modal)

    //functions, hooks, state, etc go here

    //track which mini-game slide we are on
    const { gameCounter, gameIncrement } = useCounter();

    // Pluck values from our GameContext by invoking our useCounter hook
    const { triviaCounter, triviaIncrement } = useCounter();
    //track overall game slide
    //setSlideIncrement(20);
    const { slideCounter, setSlideIncrement } = useCounter();

    let nextPath = gameData[slideCounter].nextPath;

    if (slideCounter == 25) {
        //render next button as modal trigger
        return <UrDoneModal />;
    } else {
        return (
            <Link to={nextPath}>
                <img
                    src={next}
                    alt="next question"
                    className="p-4"
                    onClick={() => triviaIncrement()}
                />
            </Link>
        );
    }

}

export default NextButton;