import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GameStyles/ColorCard.css";

// Define color sets for each level
const primaryColors = [
  "rgb(255, 0, 0)", // Red
  "rgb(255, 255, 0)", // Yellow
  "rgb(0, 0, 255)", // Blue
];

const secondaryColors = [
  "rgb(255, 165, 0)", // Orange
  "rgb(0, 128, 0)", // Green
  "rgb(127, 0, 255)", // Violet
];

const tertiaryColors = [
  "rgb(255, 165, 0)", //Red-orange
  "rgb(255, 174, 66)", //Yellow-orange
  "rgb(154, 205, 50)", //Yellow-green
  "rgb(13, 152, 186)", //Blue-green
  "rgb(138, 43, 226 )", //Blue-violet
  "rgb(149, 53, 83)", //Red-violet
  
];

function ColorCard() {
  const navCC = useNavigate();
  const [level, setLevel] = useState(1); // 1: Primary, 2: Secondary, 3: Tertiary
  const [targetColor, setTargetColor] = useState("");
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState("");

  const generateRandomColor = (colorSet) => {
    const randomIndex = Math.floor(Math.random() * colorSet.length);
    return colorSet[randomIndex];
  };

  const generateCards = (colorSet) => {
    return colorSet.map((color, index) => ({
      id: index,
      color,
    }));
  };

  const setupLevel = () => {
    let colorSet;
    switch (level) {
      case 1:
        colorSet = primaryColors;
        break;
      case 2:
        colorSet = secondaryColors;
        break;
      case 3:
        colorSet = tertiaryColors;
        break;
      default:
        colorSet = primaryColors;
    }
    setTargetColor(generateRandomColor(colorSet));
    setCards(generateCards(colorSet));
  };

  const handleDragStart = (e, cardId) => {
    e.dataTransfer.setData("text/plain", cardId);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("text/plain");
    const card = cards.find((card) => card.id === parseInt(cardId, 10));
    if (card.color === targetColor) {
      setMessage("Congrats! You have matched the color.");
      setTimeout(() => {
        if (level < 3) {
          setLevel(level + 1);
        } else {
          setMessage("You completed all levels!");
        }
        setupLevel();
      }, 2000); // Reset game after 2 seconds
    } else {
      setMessage("Try again!");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const resetGame = () => {
    setLevel(1);
    setupLevel();
    setMessage(""); // Clear message on reset
  };

  React.useEffect(() => {
    setupLevel();
  }, [level]);

  return (
    <div className="color-card-game-container">
      <button onClick={() => navCC("/star/colours")} className="tp-back-btn">
        Go Back
      </button>
      <h1>Color Card Game - Level {level}</h1>
      <div
        className="target-area"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div
          className="target-color"
          style={{ backgroundColor: targetColor }}
        ></div>
        <p>Drag a card to this color</p>
      </div>
      <div className="cards-area">
        {cards.map((card) => (
          <div
            key={card.id}
            className="color-card"
            style={{ backgroundColor: card.color }}
            draggable
            onDragStart={(e) => handleDragStart(e, card.id)}
          ></div>
        ))}
      </div>
      <button onClick={resetGame}>Start New Game</button>
      <div className="message">{message}</div>
    </div>
  );
}

export default ColorCard;
