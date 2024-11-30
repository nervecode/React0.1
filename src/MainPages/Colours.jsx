import React, { useState } from "react";
import "../components/styles/Colours.css";
import { useNavigate } from "react-router-dom";

const colors = [
  {
    label: "Primary Colors",
    colors: [
      { name: "Yellow", hex: "#FFFF00" },
      { name: "Red", hex: "#FF0000" },
      { name: "Blue", hex: "#0000FF" },
    ],
  },
  {
    label: "Secondary Colors",
    colors: [
      { name: "Green", hex: "#008000" },
      { name: "Orange", hex: "#FFA500" },
      { name: "Purple", hex: "#800080" },
    ],
  },
  {
    label: "Tertiary Colors",
    colors: [
      { name: "Blue-Green (Teal)", hex: "#008080" },
      { name: "Yellow-Green (Chartreuse)", hex: "#9ACD32" },
      { name: "Red-Orange (Vermilion)", hex: "#FF5349" },
      { name: "Red-Purple (Magenta)", hex: "#E40078" },
      { name: "Blue-Purple (Violet)", hex: "#8A2BE2" },
      { name: "Yellow-Orange (Amber)", hex: "#FFAE42" },
    ],
  },
];

function ColorReviewer() {
  const navCrev = useNavigate();

  const [showOptions, setShowOptions] = useState(false);
  const [showColorCodes, setShowColorCodes] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleColorCodes = () => {
    setShowColorCodes(!showColorCodes);
  };

  return (
    <div className="color-reviewer-container">
      <button className="touch__paint" onClick={() => navCrev("/TouchPaint")}>
        TouchPaint
      </button>
      <button className="toggle-btn" onClick={toggleColorCodes}>
        {showColorCodes ? "Hide Color Codes" : "Show Color Codes"}
      </button>
      <button className="challenge-btn" onClick={toggleOptions}>
        Challenge
      </button>
      {showOptions && (
        <div className="options-container">
          <button onClick={() => navCrev("/ColorGuessingGame")}>
            ColorGuessingGame
          </button>
          <button onClick={() => navCrev("/ColorGuess")}>ColorGuess</button>
          <button onClick={() => navCrev("/ColorCard")}>ColorCard</button>
        </div>
      )}
      <h1 className="color-rev-h1">Color Reviewer</h1>
      <div className="color-sections-row">
        {colors.map((section, index) => (
          <div key={index} className="color-section">
            <h2>{section.label}</h2>
            <div className="color-palette">
              {section.colors.map((color, idx) => (
                <div
                  key={idx}
                  className="color-box"
                  style={{ backgroundColor: color.hex }}
                >
                  {showColorCodes && (
                    <div className="color-info">
                      <p className="color-name">{color.name}</p>
                      <p className="color-hex">{color.hex}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorReviewer;
