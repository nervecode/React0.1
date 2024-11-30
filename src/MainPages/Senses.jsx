import eye from "../assets/images/eye.png";
import touch from "../assets/images/left-click.png";
import smell from "../assets/images/smell.png";
import taste from "../assets/images/sweet.png";
import ear from "../assets/images/listening.png";
import { useNavigate } from "react-router-dom";
import "../components/styles/Senses.css";

const Senses = () => {
  const navigate = useNavigate();
  return (
    <div className="snss__cont">
      <div className="eye-cont">
        <img src={eye} alt="eye" />
        <button onClick={() => navigate("/intereye")}>Seek me!</button>
      </div>
      <div className="touch-cont">
        <img src={touch} alt="touch" />
        <button onClick={() => navigate("/intertouch")}>Touch me!</button>
      </div>
      <div className="smell-cont">
        <img src={smell} alt="smell" />
        <button onClick={() => navigate("/intersmell")}>Sniff me!</button>
      </div>
      <div className="taste-cont">
        <img src={taste} alt="taste" />
        <button onClick={() => navigate("/intertaste")}>Taste me!</button>
      </div>
      <div className="ear-cont">
        <img src={ear} alt="ear" />
        <button onClick={() => navigate("/interhear")}>Hear me!</button>
      </div>
    </div>
  );
};

export default Senses;
