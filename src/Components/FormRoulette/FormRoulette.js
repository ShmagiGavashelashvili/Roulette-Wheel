import React from "react";
import "../../styles/roulette.scss";
import Checkbox from "../_shared/Checkbox/Checkbox";

function FormRoulette({ setMode, mode, reset }) {
  const handleChange = (event) => {
    setMode(event.target.value);
    reset(true);
  };
  return (
    <form className="form">
      <h2>Select Mode</h2>
      <Checkbox mode={mode} id="Number" value="Number" handleChange={handleChange} />
      <Checkbox mode={mode} id="Color" value="Color" handleChange={handleChange} />
    </form>
  );
}

export default FormRoulette;
