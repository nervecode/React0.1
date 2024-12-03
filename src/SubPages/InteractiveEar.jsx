import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Substyles/InteractiveEar.css";

function InteractiveEar() {
  const NavHear = useNavigate();
  const [selectedPart, setSelectedPart] = useState("");

  const handlePartClick = (partName) => {
    setSelectedPart(partName);
  };

  return (
    <div className="ear-container">
      <button onClick={() => NavHear("/star")} className="back-btn">
        Go Back
      </button>
      <div>
        <h1 className="ear-title">Interactive Ear Diagram</h1>
        <svg
          viewBox="0 0 300 300"
          width="500"
          height="400"
          style={{ border: "1px solid #ccc" }}
        >
          {/* Outer Ear */}
          <circle
            cx="90"
            cy="150"
            r="120"   
            fill="#f4a261"
            onClick={() => handlePartClick("Outer Ear")}
          />
          {/* Middle Ear */}
          <circle
            cx="150"
            cy="150"
            r="90"    
            fill="#e76f51"
            onClick={() => handlePartClick("Middle Ear")}
          />
          {/* Inner Ear */}
          <circle
            cx="210"
            cy="150"
            r="60"    
            fill="#2a9d8f"
            onClick={() => handlePartClick("Inner Ear")}
          />
        </svg>

        {selectedPart && (
          <p style={{ fontSize: "3rem", fontWeight: "bold", color: "#66B032" }}>{selectedPart}</p>
        )}
      </div>
    </div>
  );
}

export default InteractiveEar;
