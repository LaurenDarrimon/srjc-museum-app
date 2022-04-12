import React from "react";
import logo from "../assets/images/logo-500.png";
import classnames from "classnames";


const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={logo} alt="SRJC logo" />
      </div>
      <div className="card-face card-back-face">
        <img src={require(`../assets/images/${card.image}`)} alt="artifact" />
      </div>
    </div>
  );
};

export default Card;