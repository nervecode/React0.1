import { Link, Outlet } from "react-router-dom";
import "../components/styles/Diamond.css";

const DiamondPage = () => {
  return (
    <div>
      <div className="diamond__nav">
        <Link to="/diamond" className="s__link">
          Animals
        </Link>
        {/* <Link to="/diamond/animals" className="s__link">Animals</Link> */}
        <Link to="/diamond/place" className="s__link">
          Places
        </Link>
        <Link to="/diamond/objects" className="s__link">
          Objects
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default DiamondPage;
