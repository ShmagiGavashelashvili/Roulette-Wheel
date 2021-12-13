import React from "react";
import "../../styles/roulette.scss";
import Checkbox from "../_shared/Checkbox/Checkbox";

interface FormProps {
  setMode(event: string): void,
  mode: string,
  reset(value: boolean): void,
  disable: boolean
}

function FormRoulette({ setMode, mode, reset, disable }: FormProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setMode(event.target.value);
    reset(true);
  };
  return (
    <form className="form">
      <h2>Select Mode</h2>
      <Checkbox
        disable={disable}
        mode={mode}
        id="Number"
        value="Number"
        handleChange={handleChange}
      />
      <Checkbox
        disable={disable}
        mode={mode}
        id="Color"
        value="Color"
        handleChange={handleChange}
      />
    </form>
  );
}

export default FormRoulette;
