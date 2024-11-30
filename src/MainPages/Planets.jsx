/* import { useNavigate } from "react-router-dom";

const Planets = () => {
  const solar = useNavigate();

  return <div>

    <button onClick={() => solar ("/SolarSystem")} > Let's  Go!</button>
  </div>;
};

export default Planets; */

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
import "../components/styles/Planets.css";

const planetsData = [
  { name: "Sun", image: sunImage },
  { name: "Mercury", image: mercuryImage },
  { name: "Venus", image: venusImage },
  { name: "Earth", image: earthImage },
  { name: "Mars", image: marsImage },
  { name: "Jupiter", image: jupiterImage },
  { name: "Saturn", image: saturnImage },
  { name: "Uranus", image: uranusImage },
  { name: "Neptune", image: neptuneImage },
];

const Planets = () => {
  const navMe = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === planetsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? planetsData.length - 1 : prev - 1));
  };

  return (
    <div className="solar-system-carousel">
      <button onClick={() => navMe("/Qpage")} className="about-btn">
        Click Me!
      </button>
      <h1> </h1>
      <div className="ccarousel-container">
        <button onClick={prevSlide} className="ccarousel-button">
          &#8592;
        </button>
        <div className="carousel-slide">
          <img
            src={planetsData[currentSlide].image}
            alt={planetsData[currentSlide].name}
            className="pplanet-image"
          />
          <h2>{planetsData[currentSlide].name}</h2>
        </div>
        <button onClick={nextSlide} className="ccarousel-button">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Planets;
