import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <a className="navbar__logo">
        <img src={Logo} alt="logo" className="logo" />
      </a>
      <div className="navbar__links">
        <Link to="/" className="link">
          Home Page
        </Link>
        <Link to="/star" className="link">
          Star Page
        </Link>
        <Link to="/diamond" className="link">
          Diamond Page
        </Link>
        <Link to="/heart" className="link">
          Heart Page
        </Link>
      </div>
      <div className="navbar__button">
        <button>Account</button>
      </div>
    </div>
  );
};

export default Navbar;
