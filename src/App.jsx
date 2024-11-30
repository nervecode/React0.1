import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import Navbar from "./components/Navbar";
import MaybeShowNavbar from "./MaybeShowNavbar/MaybeShowNavbar";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <MaybeShowNavbar>
          <Navbar />
        </MaybeShowNavbar>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
