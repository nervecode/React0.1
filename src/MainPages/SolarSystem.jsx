import React from "react";
import { useNavigate } from "react-router-dom";

const SolarSystem = () => {
  const solarsys = useNavigate();
  return (
    <div>
      <button onClick={() => solarsys("/heart/planets")}>Go Back</button>
    </div>
  );
};

export default SolarSystem;
