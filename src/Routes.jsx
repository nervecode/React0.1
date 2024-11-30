import { Route, Routes } from "react-router-dom";
//
import HomePage from "./MainPages/HomePage";
//
import StarPage from "./MainPages/StarPage";
import Senses from "./MainPages/Senses";
import Colours from "./MainPages/Colours";
import Shapes from "./MainPages/Shapes";
//
import DiamondPage from "./MainPages/DiamondPage";
import Animals from "./MainPages/Animals";
import Place from "./MainPages/Place";
import Objects from "./MainPages/Objects";
//
import HeartPage from "./MainPages/HeartPage";
import Planets from "./MainPages/Planets";
//
import PageNotFound from "./MainPages/PageNotFound";
// Subpages
import InteractiveEye from "./SubPages/InteractiveEye";
import InteractiveTouch from "./SubPages/InteractiveTouch";
import InteractiveSmell from "./SubPages/InteractiveSmell";
import InteractiveTaste from "./SubPages/InteractiveTaste";
import InteractiveEar from "./SubPages/InteractiveEar";
//Games
import ColorGuessingGame from "./ColorGames/ColorGuessingGame";
import ColorGuess from "./ColorGames/ColorGuess";
import ColorCard from "./ColorGames/ColorCard";
import TouchPaint from "./ColorGames/TouchPaint";
//Planets
import SolarSystem from "./MainPages/SolarSystem";
import Qpage from "./MainPages/Qpage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/star" element={<StarPage />}>
        <Route path="/star" element={<Senses />} />
        {/* <Route path="/star/senses" element={<Senses />} /> */}
        <Route path="/star/colours" element={<Colours />} />
        <Route path="/star/shapes" element={<Shapes />} />
      </Route>
      <Route path="/diamond" element={<DiamondPage />}>
        <Route path="/diamond" element={<Animals />} />
        {/* <Route path="/diamond/animals" element={<Animals />} /> */}
        <Route path="/diamond/place" element={<Place />} />
        <Route path="/diamond/objects" element={<Objects />} />
      </Route>
      <Route path="/heart" element={<HeartPage />}>
        <Route path="/heart" element={<Planets />} />
        {/* <Route path="/heart/planets" element={<Planets />} /> */}
      </Route>

      <Route path="*" element={<PageNotFound />} />
      {/* NoNavBar, Games */}
      <Route path="/intereye" element={<InteractiveEye />} />
      <Route path="/intertouch" element={<InteractiveTouch />} />
      <Route path="/intersmell" element={<InteractiveSmell />} />
      <Route path="/intertaste" element={<InteractiveTaste />} />
      <Route path="/interhear" element={<InteractiveEar />} />
      <Route path="/ColorGuessingGame" element={<ColorGuessingGame />} />
      <Route path="/ColorGuess" element={<ColorGuess />} />
      <Route path="/ColorCard" element={<ColorCard />} />
      <Route path="/TouchPaint" element={<TouchPaint />} />
      <Route path="/SolarSystem" element={<SolarSystem />} />
      <Route path="/Qpage" element={<Qpage />} />
    </Routes>
  );
};

export default AppRoutes;
