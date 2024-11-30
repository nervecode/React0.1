import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GameStyles/ColorGuess.css";

const colorCategories = {
  Primary: [
    { name: "Red", color: "rgb(255, 0, 0)" },
    { name: "Green", color: "rgb(0, 255, 0)" },
    { name: "Blue", color: "rgb(0, 0, 255)" },
  ],
  Secondary: [
    { name: "Yellow", color: "rgb(255, 255, 0)" },
    { name: "Magenta", color: "rgb(255, 0, 255)" },
    { name: "Cyan", color: "rgb(0, 255, 255)" },
  ],
  Tertiary: [
    { name: "Orange", color: "rgb(255, 165, 0)" },
    { name: "Purple", color: "rgb(128, 0, 128)" },
    { name: "Olive", color: "rgb(128, 128, 0)" },
  ],
};

function ColorGuess() {
  const navCg = useNavigate();
  const [currentColor, setCurrentColor] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [message, setMessage] = useState("");

  const getRandomColor = (category) => {
    const colors = colorCategories[category];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const startGame = () => {
    const categories = Object.keys(colorCategories);
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const { color } = getRandomColor(randomCategory);
    setCurrentColor(color);
    setCurrentCategory(randomCategory);
    setMessage("");
  };

  const checkAnswer = (category) => {
    if (category === currentCategory) {
      setMessage("Congrats! You guessed the color category correctly.");
    } else {
      setMessage("Oops! Try again.");
    }
  };

  return (
    <div className="color-guessing-game-container">
      <button onClick={() => navCg("/star/colours")} className="tp-back-btn">
        Go Back
      </button>
      <h1>Guess the Color Schemes</h1>
      <div className="color-display">
        <div
          className="current-color"
          style={{ backgroundColor: currentColor }}
        ></div>
        <p>Identify the category of this color :</p>
      </div>
      <div className="categories">
        <button onClick={() => checkAnswer("Primary")}>Primary</button>
        <button onClick={() => checkAnswer("Secondary")}>Secondary</button>
        <button onClick={() => checkAnswer("Tertiary")}>Tertiary</button>
      </div>
      <button onClick={startGame}>Start New Game</button>
      <div className="message">{message}</div>
    </div>
  );
}

export default ColorGuess;
