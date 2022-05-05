import { useEffect, useState, useRef, React } from "react";
import { Modal, Button } from "react-bootstrap";

//import components
import InstructionModal from "../components/MiniGameInstModal";
import Card from "./Card";

//images
import mascotGoodJob from "../assets/images/coyote-head.svg";
import go from "../assets/images/go-btn.svg";

//function to shuffle the cards
function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}


export default function Matching(props) {
  let uniqueCardsArray = props.cardsArray

  const [cards, setCards] = useState(() =>
    shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === uniqueCardsArray.length) {
      setShowModal(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };
  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);
  const checkIsFlipped = (index) => {
    console.log("check to see if card is flipped")
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    console.log("check to see if card is inactive");
    return Boolean(clearedCards[card.type]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
  };



  return (
    <div className="Matching">
      <header>
        <div>
          Find all the matching cards! 
        </div>
      </header>
      <div className="container">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
              gameCounter={props.gameCounter} //pass gameCounter to Card
            />
          );
        })}
      </div>
      <footer>
        <div className="d-inline-block w-50 text-center">
          <div className="score">
            <div className="moves">
              <span className="bold">Moves:</span> {moves}
            </div>
            {localStorage.getItem("bestScore") && (
              <div className="high-score">
                <span className="bold">Best Score:</span> {bestScore}
              </div>
            )}
          </div>
          <p><em>Play again and try to beat your best score!</em></p>
          <div className="restart">
            <Button onClick={handleRestart} className="btn-primary" variant="contained">
              Restart
            </Button>
          </div>
        </div>
        <div className="d-inline-block matching-inst-modal-btn">
          {/* Click for modal */}
          {/* pass in props for current instruction modal */}
          <InstructionModal
            title={props.currentModal.title}
            p1={props.currentModal.p1}
            pBold={props.currentModal.pBold}
            p3={props.currentModal.p3}
            imagePath={props.currentModal.imagePath}
            imageDescription={props.currentModal.imageDescription}
          />
        </div>
      </footer>

      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false)
        }}
        dialogClassName="custom-modal modal-matching"
        aria-labelledby="modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title as="h1" className="pangolin-font">Good work, Explorer!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-2 ">
          <p className="modal-high-score">
            <span className="bold-text">Your Score:</span> {moves} moves
            <br />
            <span className="bold-text">Your High Score:</span> {bestScore} moves
          </p>
          <img
            className="mascot-good-job pt-4"
            src={mascotGoodJob}
            alt="good job!"
          />
        </Modal.Body>
        <Modal.Footer>
          <img
            onClick={handleRestart}
            className="img-fluid"
            src={go}
            alt="GO!"
          />
        </Modal.Footer>
      </Modal>

    </div>
  );
}
