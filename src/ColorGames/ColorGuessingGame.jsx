import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GameStyles/ColorGuessingGame.css";

const colors = [
  { name: "Red", color: "rgb(255, 0, 0)" },
  { name: "Yellow", color: "rgb(255, 255, 0)" },
  { name: "Blue", color: "rgb(0, 0, 255)" },
  { name: "Orange", color: "rgb(255, 165, 0)" },
  { name: "Green", color: "rgb(0, 128, 0)" },
  { name: "Violet", color: "rgb(127, 0, 255)" },
  { name: "Red-orange", color: "rgb(255, 165, 0)" },
  { name: "Yellow-orange", color: "rgb(255, 174, 66)" },
  { name: "Yellow-green", color: "rgb(154, 205, 50)" },
  { name: "Blue-green", color: "rgb(13, 152, 186)" },
  { name: "Blue-violet", color: "rgb(138, 43, 226)" },
  { name: "Red-violet", color: "rgb(149, 53, 83)" },
];

function ColorGuessingGame() {
  const navCgg = useNavigate();
  const [currentColor, setCurrentColor] = useState("");
  const [colorName, setColorName] = useState("");
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const startGame = () => {
    const { color, name } = getRandomColor();
    setCurrentColor(color);
    setColorName(name);
    setInput("");
    setMessage("");
    setShowAnswer(false);
  };

  const checkAnswer = () => {
    if (input.trim().toLowerCase() === colorName.toLowerCase()) {
      setMessage("Congrats! You guessed the color correctly.");
    } else {
      setMessage("Oops! Try again.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission if inside a form
      checkAnswer();
    }
  };

  const revealAnswer = () => {
    setMessage(`The correct color was ${colorName}.`);
    setShowAnswer(true);
  };

  return (
    <div className="color-input-guessing-game-container">
      <button onClick={() => navCgg("/star/colours")} className="back-btn">
        Go Back
      </button>
      <h1>Guess the Color</h1>
      <div className="color-display">
        <div
          className="current-color"
          style={{ backgroundColor: currentColor }}
        ></div>
        <p>Type the name of this color : </p>
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter color name"
      />
      <button onClick={checkAnswer}>Submit</button>
      <button onClick={startGame}>Start New Game</button>
      <button onClick={revealAnswer} disabled={showAnswer}>
        Reveal Answer
      </button>
      <div className="message">{message}</div>
    </div>
  );
}

export default ColorGuessingGame;
