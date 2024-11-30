// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// const MaybeShowNavbar = ({ children }) => {
//   const location = useLocation();

//   const [showNavbar, setShowNavbar] = useState(false);
//   useEffect(() => {
//     if (location.pathname === "/intereye") {
//       setShowNavbar(false);
//     } else {
//       setShowNavbar(true);
//     }
//   }, [location]);

//   return <div>{showNavbar && children}</div>;
// };
// export default MaybeShowNavbar;
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MaybeShowNavbar = ({ children }) => {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // List of all paths that should not display the navbar
    const noNavbarPaths = [
      "/intereye",
      "/intertouch", // Added intertouch path
      "/intersmell", // Added intersmell path
      "/intertaste", // Added intertaste path
      "/interhear", // Added interhear path
      "/ColorGuessingGame", // Added ColorGuessingGame path
      "/ColorGuess", // Added ColorGuess path
      "/ColorCard", // Added ColorCard path
      "/TouchPaint", // Added TouchPaint path
      "/SolarSystem", // Added SolarSystem path
      "/Qpage", // Added Qpage path
    ];

    // Check if the current path is in the noNavbarPaths array
    if (noNavbarPaths.includes(location.pathname)) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
};

export default MaybeShowNavbar;
