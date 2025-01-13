import { useState } from "react";
import { flashcards } from "./data/flashcards";
import ProgressBar from "./components/ProgressBar";
import FlashCard from "./components/FlashCard";
import Navigation from "./components/Navigation";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="container">
      <h1>Flash Cards</h1>
      <ProgressBar current={currentIndex + 1} total={flashcards.length} />
      <FlashCard
        card={flashcards[currentIndex]}
        isFlipped={isFlipped}
        onFlip={() => setIsFlipped(!isFlipped)}
      />
      <Navigation
        onPrevious={handlePrevious}
        onNext={handleNext}
        onFlip={() => setIsFlipped(!isFlipped)}
        showPrevious={currentIndex > 0}
        showNext={currentIndex < flashcards.length - 1}
        isFlipped={isFlipped}
      />
    </div>
  );
}

export default App;
