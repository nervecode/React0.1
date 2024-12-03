import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Substyles/InteractiveEye.css";

function InteractiveEye() {
  const navigate = useNavigate();
  const [leftEyePosition, setLeftEyePosition] = useState({ x: 50, y: 50 });
  const [rightEyePosition, setRightEyePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setLeftEyePosition({ x, y });
    setRightEyePosition({ x, y });
  };

  return (
    <div className="page-container">
      <button onClick={() => navigate("/star")} className="back-btn">
        Go Back
      </button>
      <div className="eye-container" onMouseMove={handleMouseMove}>
        <div className="eyes">
          {/* Left Eye */}
          <svg
            className="eye"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Eye */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="3"
            />
            {/* Iris */}
            <circle
              cx={leftEyePosition.x}
              cy={leftEyePosition.y}
              r="15"
              fill="#0000ff"
            />
            {/* Pupil */}
            <circle
              cx={leftEyePosition.x}
              cy={leftEyePosition.y}
              r="7"
              fill="#000000"
            />
          </svg>

          {/* Right Eye */}
          <svg
            className="eye"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Eye */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="3"
            />
            {/* Iris */}
            <circle
              cx={rightEyePosition.x}
              cy={rightEyePosition.y}
              r="15"
              fill="#0000ff"
            />
            {/* Pupil */}
            <circle
              cx={rightEyePosition.x}
              cy={rightEyePosition.y}
              r="7"
              fill="#000000"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default InteractiveEye;
