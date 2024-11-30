import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ShapesPalette from "./ShapeBuilder/ShapesPalette";
import Canvas from "./ShapeBuilder/Canvas";
import "../components/styles/Shapes.css";

const Shapes = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <h1>Shape Builder Game</h1>
        <div className="game-area">
          <ShapesPalette />
          <Canvas />
        </div>
      </div>
    </DndProvider>
  );
};

export default Shapes;
