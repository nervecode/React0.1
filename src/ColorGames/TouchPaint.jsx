// TouchPaint.js
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GameStyles/TouchPaint.css";

function TouchPaint() {
  const navPaint = useNavigate();
  const canvasRef = useRef(null);
  const [painting, setPainting] = useState(false);
  const [brushColor, setBrushColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = brushSize;
    context.strokeStyle = brushColor;
  }, [brushSize, brushColor]);

  const startPainting = (e) => {
    setPainting(true);
    draw(e);
  };

  const endPainting = () => {
    setPainting(false);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
  };

  const draw = (e) => {
    if (!painting) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Get existing color at the point
    const imageData = context.getImageData(x, y, 1, 1).data;
    const existingColor = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;

    // Blend the existing color with the brush color
    const blendedColor = blendColors(existingColor, brushColor);

    context.lineWidth = brushSize;
    context.strokeStyle = blendedColor;
    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
  };

  const blendColors = (color1, color2) => {
    // Parse RGB values from color strings
    const rgb1 = color1.match(/\d+/g).map(Number);
    const rgb2 = color2.match(/\d+/g).map(Number);

    // Calculate blended RGB values (average of the two colors)
    const blended = [
      Math.floor((rgb1[0] + rgb2[0]) / 2),
      Math.floor((rgb1[1] + rgb2[1]) / 2),
      Math.floor((rgb1[2] + rgb2[2]) / 2),
    ];

    return `rgb(${blended[0]}, ${blended[1]}, ${blended[2]})`;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const activateEraser = () => {
    setBrushColor("#f0f8ff"); // Set to the same color as the background
  };

  return (
    <div className="touch-paint-container">
      <button onClick={() => navPaint("/star/colours")} className="tp-back-btn">
        Go Back
      </button>
      <canvas
        ref={canvasRef}
        className="paint-canvas"
        width={800}
        height={600}
        onMouseDown={startPainting}
        onMouseUp={endPainting}
        onMouseMove={draw}
        onMouseLeave={endPainting}
        onTouchStart={startPainting}
        onTouchEnd={endPainting}
        onTouchMove={draw}
      ></canvas>

      <div className="controls">
        <button onClick={() => setBrushColor("rgb(255, 0, 0)")}>Red</button>
        <button onClick={() => setBrushColor("rgb(0, 255, 0)")}>Green</button>
        <button onClick={() => setBrushColor("rgb(0, 0, 255)")}>Blue</button>
        <button onClick={() => setBrushSize(5)}>Small Brush</button>
        <button onClick={() => setBrushSize(10)}>Medium Brush</button>
        <button onClick={() => setBrushSize(20)}>Large Brush</button>
        <button onClick={activateEraser}>Eraser</button>
        <button onClick={clearCanvas}>Reset</button>
      </div>
    </div>
  );
}

export default TouchPaint;
