import React from "react";
import "./checkbox.scss";


interface CheckboxProps {
  mode: string,
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void,
  value: string,
  id: string,
  disable: boolean
}

const Checkbox = ({ mode, handleChange, value, id, disable }: CheckboxProps) => {
  return (
    <div className="input_wrapper">
      <label htmlFor={id}>
        <span className={mode === value ? "checked" : ""}></span>
        <input
          type="checkbox"
          id={id}
          data-testid={id}
          value={value}
          onChange={(e) => handleChange(e)}
          disabled={disable}
        />
        {value}
      </label>
    </div>
  );
};

export default Checkbox;
