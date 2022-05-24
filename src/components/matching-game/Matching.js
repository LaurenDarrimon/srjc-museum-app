// Matching Game Component

import { useEffect, useState, useRef, React } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";

//import components
import InstructionModal from "../modals/MiniGameInstModal";
import Card from "./Card";

//images
import mascotGoodJob from "../../assets/images/guide-animal/coyote.svg";
import go from "../../assets/images/buttons/go-btn.svg";

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

    <Row className="Matching">
      <header>
        <div className="fs-6 mt-lg-3 mt-xxl-4">
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
        <Col xs={12} sm={{ span:5, offset:1 }} className="p-1 d-inline-block text-center">
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
        </Col>
        <Col 
          xs={{ span:9, offset:5 }} 
          md={{ span:6, offset:7 }}
          className="d-inline-block matching-inst-modal-btn p-2">
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
        </Col>
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
        <Modal.Body className="pt-3 text-center">
          <p className="modal-high-score p-3 p-lg-4">
            <span className="bold-text">Your Score:</span> {moves} moves
            <br />
            <span className="bold-text">Your High Score:</span> {bestScore} moves
          </p>
          <img
            className="mascot-good-job pt-2 pt-sm-3 pt-md-4 mx-auto"
            src={mascotGoodJob}
            alt="good job!"
          />
        </Modal.Body>
        <Modal.Footer>
          <img
            onClick={handleRestart}
            className="img-fluid px-5 py-2 py-sm-3 px-sm-0 py-md-0"
            src={go}
            alt="GO!"
          />
        </Modal.Footer>
      </Modal>

    </Row>
  );
}
