const Navigation = ({
  onPrevious,
  onNext,
  onFlip,
  showPrevious,
  showNext,
  isFlipped,
}) => {
  return (
    <div className="navigation">
      <button onClick={onPrevious} disabled={!showPrevious}>
        Previous
      </button>
      <button onClick={onFlip}>
        {isFlipped ? "Hide Answer" : "Show Answer"}
      </button>
      <button onClick={onNext} disabled={!showNext}>
        Next
      </button>
    </div>
  );
};

export default Navigation;
