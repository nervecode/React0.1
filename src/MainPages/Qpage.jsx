import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sunImage from "../assets/images/planets/sun.png";
import mercuryImage from "../assets/images/planets/mercury.png";
import venusImage from "../assets/images/planets/venus.png";
import earthImage from "../assets/images/planets/earth.png";
import marsImage from "../assets/images/planets/mars.png";
import jupiterImage from "../assets/images/planets/jupiter.png";
import saturnImage from "../assets/images/planets/saturn.png";
import uranusImage from "../assets/images/planets/uranus.png";
import neptuneImage from "../assets/images/planets/neptune.png";
import "../components/styles/Qpage.css";

const planetsData = [
  { name: "Sun", image: sunImage, hint: "It's a star, not a planet!" },
  { name: "Mercury", image: mercuryImage, hint: "Closest planet to the Sun." },
  { name: "Venus", image: venusImage, hint: "Known as Earth's twin." },
  { name: "Earth", image: earthImage, hint: "Our home planet." },
  { name: "Mars", image: marsImage, hint: "The red planet." },
  {
    name: "Jupiter",
    image: jupiterImage,
    hint: "The largest planet in the solar system.",
  },
  { name: "Saturn", image: saturnImage, hint: "Famous for its rings." },
  { name: "Uranus", image: uranusImage, hint: "It rotates on its side." },
  {
    name: "Neptune",
    image: neptuneImage,
    hint: "The farthest planet from the Sun.",
  },
];

const Qpage = () => {
  const navQ = useNavigate();
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);
  const [unanswered, setUnanswered] = useState([]);
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleGuess = () => {
    const currentPlanet = planetsData[currentPlanetIndex];

    if (guess.toLowerCase() === currentPlanet.name.toLowerCase()) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect. Skipping!");
      setUnanswered((prev) => [...prev, currentPlanet]);
    }

    setGuess("");

    // Move to the next planet or revisit unanswered
    if (currentPlanetIndex < planetsData.length - 1) {
      setCurrentPlanetIndex((prev) => prev + 1);
    } else if (unanswered.length > 0) {
      setTimeout(() => {
        setCurrentPlanetIndex(0); // Restart index
        setUnanswered((prev) => {
          setCurrentPlanetIndex(planetsData.length - prev.length); // Show first unanswered
          return prev.slice(1); // Remove current from unanswered
        });
      }, 1000); // 1-second delay before restarting
    } else {
      setFeedback("Quiz Complete! You answered all planets.");
    }
  };

  const currentPlanet =
    unanswered.length > 0 && currentPlanetIndex >= planetsData.length
      ? unanswered[0]
      : planetsData[currentPlanetIndex];

  return (
    <div className="quiz-container">
      <button onClick={() => navQ("/heart")} className="tp-back-btn">
        Go Back
      </button>
      <h1>Planet Quiz</h1>
      <p>Score: {score}</p>
      <div className="planet-question">
        <img
          src={currentPlanet.image}
          alt="Guess the planet"
          className="planet-image"
        />
        <p>{currentPlanet.hint}</p>
      </div>
      <input
        type="text"
        placeholder="Enter your guess..."
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="guess-input"
      />
      <button onClick={handleGuess} className="guess-button">
        Submit
      </button>
      <p className="feedback">{feedback}</p>
    </div>
  );
};

export default Qpage;
