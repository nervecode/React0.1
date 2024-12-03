import { Link, Outlet } from "react-router-dom";
import "../components/styles/Star.css";

const StarPage = () => {
  return (
    <div>
      <div className="star__nav">
        <Link to="/star" className="s__link">
          Senses
        </Link>
        {/* <Link to="/star/senses" className="s__link">Senses</Link>*/}
        <Link to="/star/colours" className="s__link">
          Colors
        </Link>
        <Link to="/star/shapes" className="s__link">
          Shapes
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default StarPage;
