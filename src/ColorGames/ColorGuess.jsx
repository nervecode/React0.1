import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GameStyles/ColorGuess.css";

const colorCategories = {
  Primary: [
    { name: "Red", color: "rgb(255, 0, 0)" },
    { name: "Yellow", color: "rgb(255, 255, 0)" },
    { name: "Blue", color: "rgb(0, 0, 255)" },
  ],
  Secondary: [
    { name: "Orange", color: "rgb(255, 165, 0)" },
    { name: "Green", color: "rgb(0, 128, 0)" },
    { name: "Violet", color: "rgb(127, 0, 255)" },
  ],
  Tertiary: [
    { name: "Red-orange", color: "rgb(255, 165, 0)" },
    { name: "Yellow-orange", color: "rgb(255, 174, 66)" },
    { name: "Yellow-green", color: "rgb(154, 205, 50)" },
    { name: "Blue-green", color: "rgb(13, 152, 186)" },
    { name: "Blue-violet", color: "rgb(138, 43, 226 )" },
    { name: "Red-violet", color: "rgb(149, 53, 83)" },
    
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
