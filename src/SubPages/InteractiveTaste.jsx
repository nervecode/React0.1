import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Substyles/InteractiveTaste.css";

function InteractiveTaste() {
  const NavTouch = useNavigate();
  const [selectedTaste, setSelectedTaste] = useState(null);

  const foodItems = [
    { name: "Apple", taste: "Sweet" },
    { name: "Lemon", taste: "Sour" },
    { name: "Salt", taste: "Salty" },
    { name: "Chili Pepper", taste: "Spicy" },
    { name: "Dark Chocolate", taste: "Bitter" },
  ];

  const handleTasteClick = (taste) => {
    setSelectedTaste(taste);
    setTimeout(() => setSelectedTaste(null), 3000); // Reset after 3 seconds
  };

  return (
    <div className="taste-container">
        <button onClick={() => NavTouch("/star")} className="back-btn">
        Go Back
      </button>
      <h1 className="taste-title">Interactive Taste Experience</h1>
      <div className="food-list">
        {foodItems.map((food, index) => (
          <div
            key={index}
            className="food-item"
            onClick={() => handleTasteClick(food.taste)}
          >
            {food.name}
          </div>
        ))}
      </div>

      {selectedTaste && (
        <div className="taste-message">
          You tasted something {selectedTaste}!
        </div>
      )}
    </div>
  );
}

export default InteractiveTaste;
