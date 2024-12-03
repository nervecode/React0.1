import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Substyles/InteractiveTouch.css";

const numberOfCircles = 10;
const circleRadius = 50; // Radius of the circles

function InteractiveTouch() {
  const NavTouch = useNavigate();
  const [circles, setCircles] = useState(generateInitialCircles());
  const [touchedCircleIndex, setTouchedCircleIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateCircles = () => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => {
          let { x, y, dx, dy, color } = circle;
          x += dx;
          y += dy;

          // Bounce off edges
          if (x < circleRadius || x > container.clientWidth - circleRadius)
            dx *= -1;
          if (y < circleRadius || y > container.clientHeight - circleRadius)
            dy *= -1;

          return { ...circle, x, y, dx, dy };
        })
      );
    };

    const intervalId = setInterval(updateCircles, 20); // Update every 20ms

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const handleCircleClick = (index) => {
    const newCircles = [...circles];
    newCircles[index].color = generateRandomColor();
    setCircles(newCircles);

    // Show "Touched!" inside the clicked circle
    setTouchedCircleIndex(index);
    setShowPopup(true);

    // Hide circle with a pop effect after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
      setTouchedCircleIndex(null);
    }, 2000);
  };

  return (
    <div className="touch-container" ref={containerRef}>
      <button onClick={() => NavTouch("/star")} className="back-btn">
        Go Back
      </button>
      {circles.map((circle, index) => (
        <div
          key={index}
          className={`touch-circle ${
            showPopup && touchedCircleIndex === index ? "pop" : ""
          }`}
          style={{
            backgroundColor: circle.color,
            width: `${circleRadius * 2}px`,
            height: `${circleRadius * 2}px`,
            top: `${circle.y - circleRadius}px`,
            left: `${circle.x - circleRadius}px`,
          }}
          onClick={() => handleCircleClick(index)}
        >
          {showPopup && touchedCircleIndex === index && (
            <div className="popup-message">Touched!</div>
          )}
        </div>
      ))}
    </div>
  );
}

function generateInitialCircles() {
  return Array.from({ length: numberOfCircles }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    dx: (Math.random() - 0.5) * 4, // Random velocity between -2 and 2
    dy: (Math.random() - 0.5) * 4, // Random velocity between -2 and 2
    color: generateRandomColor(),
  }));
}

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

export default InteractiveTouch;
