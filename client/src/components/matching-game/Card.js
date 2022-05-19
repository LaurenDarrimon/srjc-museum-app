// Matching Game - Individual Card Components

import React from "react";
import cardBack1 from "../../assets/images/california/matching-card-back-CA.png";
import cardBack2  from "../../assets/images/pnw-coast/matching-card-back-PNW.png";
import classnames from "classnames";



const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled, gameCounter }) => {
  
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  //game counter
  const gameCounterPNW = ( gameCounter == 3 );

  return (      
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-front-face" style= {{backgroundColor: gameCounterPNW ?  "#4c9ba8" : "#ca9938"}}>
       <img src={gameCounterPNW ? cardBack2 : cardBack1} alt={gameCounterPNW ? "traditional mask" : "stylized basket pattern"} />
      </div>
      <div className="card-face card-back-face">
        <img src={require(`../../assets/images/${card.image}`)} alt="artifact" />
      </div>
    </div>
  );
};

export default Card;