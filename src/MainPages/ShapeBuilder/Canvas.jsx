import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";
import "./Shpstyles/Canvasbldr.css";

function DroppedShape({ shape, moveShape, index }) {
  const [isDraggable, setIsDraggable] = useState(false); // Track if the shape is draggable

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "shape",
    item: { index, type: shape.type },
    canDrag: () => isDraggable, // Only allow dragging if isDraggable is true
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleDrag = (e) => {
    if (!isDraggable) return; // Only move the shape if it's in drag mode

    const canvasRect = document
      .getElementById("canvas")
      .getBoundingClientRect();
    const newLeft = e.clientX - canvasRect.left - 30;
    const newTop = e.clientY - canvasRect.top - 30;
    moveShape(index, { left: newLeft, top: newTop });
  };

  const handleDoubleClick = () => {
    setIsDraggable((prev) => !prev); // Toggle draggable mode on double-click
  };

  return (
    <div
      ref={drag}
      className={`dropped-shape ${shape.type}`}
      style={{
        backgroundColor: shape.color,
        left: shape.position.left,
        top: shape.position.top,
        opacity: isDragging ? 0.5 : 1,
        cursor: isDraggable ? "grab" : "pointer", // Change cursor based on draggable state
      }}
      onMouseMove={handleDrag}
      onDoubleClick={handleDoubleClick} // Toggle drag mode on double-click
    ></div>
  );
}

function Canvas() {
  const [droppedShapes, setDroppedShapes] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "shape",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const canvasRect = document
        .getElementById("canvas")
        .getBoundingClientRect();
      const position = {
        left: offset.x - canvasRect.left - 30,
        top: offset.y - canvasRect.top - 30,
      };
      setDroppedShapes((prevShapes) => [
        ...prevShapes,
        { ...item, position, id: Date.now() },
      ]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const moveShape = (index, position) => {
    const updatedShapes = [...droppedShapes];
    updatedShapes[index].position = position;
    setDroppedShapes(updatedShapes);
  };

  const resetCanvas = () => {
    setDroppedShapes([]);
  };

  return (
    <div className="canvas-container">
      <div id="canvas" className="canvas" ref={drop}>
        {droppedShapes.map((shape, index) => (
          <DroppedShape
            key={shape.id}
            shape={shape}
            moveShape={moveShape}
            index={index}
          />
        ))}
        {isOver && <div className="overlay">Drop Here</div>}
      </div>
      <button className="reset-btn" onClick={resetCanvas}>
        Reset Canvas
      </button>
    </div>
  );
}

export default Canvas;
