import Shape from "./Shape";
import "./Shpstyles/ShapesPalette.css";

const shapes = [
  { id: "circle", type: "circle", color: "#FF6347" },
  { id: "square", type: "square", color: "#1E90FF" },
  { id: "triangle", type: "triangle", color: "#32CD32" },
  { id: "rectangle", type: "rectangle", color: "#FFD700" }
  // Add more shapes as needed
];

function ShapesPalette() {
  return (
    <div className="palette">
      <h2>Shapes Palette</h2>
      <div className="shapes-container">
        {shapes.map((shape) => (
          <Shape key={shape.id} type={shape.type} color={shape.color} />
        ))}
      </div>
    </div>
  );
}

export default ShapesPalette;
