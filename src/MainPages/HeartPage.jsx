import { Link, Outlet } from "react-router-dom";
import "../components/styles/Heart.css";

const HeartPage = () => {
  return (
    <div>
      <div className="heart__nav">
        <Link to="/heart" className="s__link">
       {/*  <Link to="/heart/planets" className="s__link"> */}
          Planets
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default HeartPage;
