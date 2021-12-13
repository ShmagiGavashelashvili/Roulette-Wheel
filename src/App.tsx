import React from "react";
import "./styles/roulette.scss";
import Roulette from "./Components/Roulette/Roulette";

function App() {
  return (
    <div className="main_container">
      <h1 className="heading-title">The Roulette Wheel</h1>
      <Roulette />
    </div>
  );
}

export default App;
