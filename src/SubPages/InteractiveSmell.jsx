import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Substyles/InteractiveSmell.css";

function InteractiveSmell() {
  const NavSmell = useNavigate();

  const [isSmelled, setIsSmelled] = useState(false);

  const handleSmell = () => {
    setIsSmelled(true);
    setTimeout(() => setIsSmelled(false), 3000); // Reset message after 3 seconds
  };

  return (
    <div className="smell-container">
      <button onClick={() => NavSmell("/star")} className="back-btn">
        Go Back
      </button>
      <div className="flower" onClick={handleSmell}>
        🌸 {/* You can replace this with an actual image of a flower */}
      </div>

      {isSmelled && <div className="smell-message">Smell detected!</div>}

      {/* Scent particles */}
      <div className="scent-particles">
        <div className="particle" style={{ animationDelay: "0s" }}></div>
        <div className="particle" style={{ animationDelay: "1s" }}></div>
        <div className="particle" style={{ animationDelay: "2s" }}></div>
      </div>
    </div>
  );
}

export default InteractiveSmell;
