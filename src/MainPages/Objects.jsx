import React, { useState, useEffect } from "react";
import sound1 from "../assets/sounds/cat-sound.mp3"; // Replace with actual sound files
import sound2 from "../assets/sounds/goat-baa-sound.mp3";
import sound3 from "../assets/sounds/turkey-sound.mp3";
import sound4 from "../assets/sounds/whinny-sound.mp3";
import "../components/styles/Object.css"; // Create your own CSS file

const colors = [
  { id: 1, name: "Red", sound: sound1, bgColor: "red" },
  { id: 2, name: "Green", sound: sound2, bgColor: "green" },
  { id: 3, name: "Blue", sound: sound3, bgColor: "blue" },
  { id: 4, name: "Yellow", sound: sound4, bgColor: "yellow" },
];

function Object() {
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState("");

  const addColorToSequence = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setSequence((prev) => [...prev, randomIndex]);
  };

  const playSequence = async () => {
    setIsPlaying(true);
    for (const index of sequence) {
      playSound(colors[index].sound);
      const button = document.getElementById(`btn-${index}`);
      button.style.opacity = 0.5; // Change opacity for visual effect
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds
      button.style.opacity = 1; // Reset opacity after sound
      await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for half a second before the next sound
    }
    setIsPlaying(false);
  };

  const playSound = (soundSrc) => {
    const audio = new Audio(soundSrc);
    audio.play();
  };

  const handleButtonClick = (index) => {
    if (isPlaying || userInput.length === sequence.length) return;

    setUserInput((prev) => [...prev, index]);
    playSound(colors[index].sound);

    if (userInput.length + 1 === sequence.length) {
      checkUserInput([...userInput, index]);
    }
  };

  const checkUserInput = (input) => {
    if (input.join(",") === sequence.join(",")) {
      setMessage("Correct! Next round...");
      setUserInput([]);
      setTimeout(() => {
        addColorToSequence();
        playSequence();
      }, 1000);
    } else {
      setMessage("Wrong! Try again!");
      resetGame();
    }
  };

  const resetGame = () => {
    setSequence([]);
    setUserInput([]);
    setMessage("Game reset! Starting new game...");
    addColorToSequence();
  };

  useEffect(() => {
    if (sequence.length === 0) {
      addColorToSequence();
    } else {
      playSequence();
    }
  }, [sequence]);

  return (
    <div className="color-sound-memory-game">
      <h1>Color & Sound Memory Game</h1>
      <p className="text__message">{message}</p>
      <div className="button-container">
        {colors.map((color, index) => (
          <button
            className="smg-btn"
            key={index}
            id={`btn-${index}`}
            style={{ backgroundColor: color.bgColor }}
            onClick={() => handleButtonClick(index)}
            disabled={isPlaying}
          >
            {color.name}
          </button>
        ))}
      </div>
      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default Object;
