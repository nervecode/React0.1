import React, { useState, useEffect } from "react";
import birdChirp from "../assets/sounds/bird-chirp.mp3";
import doorbell from "../assets/sounds/doorbell.mp3";
import schoolBell from "../assets/sounds/school-bell.mp3";
import cashRegister from "../assets/sounds/cash-register.wav";
import "../components/styles/Place.css";

// Data for the sound cards
const soundsData = [
  { id: 1, name: "Bird Chirp", src: birdChirp },
  { id: 2, name: "Doorbell", src: doorbell },
  { id: 3, name: "School Bell", src: schoolBell },
  { id: 4, name: "Cash Register", src: cashRegister },
];

// Function to shuffle sounds
const shuffleSounds = () => {
  return [...soundsData, ...soundsData].sort(() => Math.random() - 0.5);
};

function Place() {
  const [cards, setCards] = useState(shuffleSounds());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [message, setMessage] = useState("");

  // Function to play the sound
  const playSound = (soundSrc) => {
    const audio = new Audio(soundSrc);
    audio.play();
  };

  // Function to handle card click
  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || matchedCards.includes(index)) return;

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);
    playSound(cards[index].src); // Play sound

    if (newFlipped.length === 2) {
      checkForMatch(newFlipped);
    }
  };

  // Function to check if two flipped cards match
  const checkForMatch = (newFlipped) => {
    const [firstIndex, secondIndex] = newFlipped;

    if (cards[firstIndex].id === cards[secondIndex].id) {
      setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
      setMessage(`Yehey! You found the ${cards[firstIndex].name}!`);
      setTimeout(() => setFlippedCards([]), 1000);
    } else {
      setMessage("Not a match, try again!");
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000); // Flip back cards after 1 second
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setCards(shuffleSounds());
    setFlippedCards([]);
    setMatchedCards([]);
    setMessage("Game reset! Try again!");
  };

  // Check if all pairs are matched
  useEffect(() => {
    if (matchedCards.length === cards.length) {
      setMessage("Congratulations! You've found all the pairs!");
    }
  }, [matchedCards, cards.length]);

  return (
    <div className="memory-game">
      <h1>Sound Memory Game</h1>
      <p>{message}</p>

      <div className="game-board">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${
              flippedCards.includes(index) || matchedCards.includes(index)
                ? "flipped"
                : ""
            } ${flippedCards.length === 2 && !matchedCards.includes(index) ? "not-matched" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            {flippedCards.includes(index) || matchedCards.includes(index) ? (
              <div className="card-content">{card.name}</div>
            ) : (
              <div className="card-back"></div>
            )}
          </div>
        ))}
      </div>

      {/* Floating Reset Button */}
      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default Place;
