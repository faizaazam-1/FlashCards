const FlashCard = ({ card, isFlipped, onFlip }) => {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={onFlip}>
      <div className="card-inner">
        <div className="card-front">
          <p>{card.question}</p>
        </div>
        <div className="card-back">
          <p>{card.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
