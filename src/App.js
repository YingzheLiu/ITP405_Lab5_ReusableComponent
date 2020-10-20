import React from "react";
import "./App.css";
import DeleteEvent from "./DeleteEvent";

function App() {
  const filledColor = "black";
  const size = "lg";
  return (
    <div className="container">
      <DeleteEvent filledColor={filledColor} size={size} />
    </div>
  );
}

export default App;
