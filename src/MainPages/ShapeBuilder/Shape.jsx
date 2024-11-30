import { useDrag } from "react-dnd";
import PropTypes from "prop-types";
import "./Shpstyles/Shapebldr.css";

function Shape({ type, color }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "shape",
    item: { type, color },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const shapeStyle = {
    backgroundColor: color,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={drag} className={`shape ${type}`} style={shapeStyle}>
      {/* You can add labels or icons inside the shapes if desired */}
    </div>
  );
}

Shape.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Shape;
