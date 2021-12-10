import React from "react";
import "./checkbox.scss";

const Checkbox = ({ mode, handleChange, value, id }) => {
  return (
    <div className="input_wrapper">
      <label htmlFor={id}>
        <span className={mode === value ? "checked" : ""}></span>
        <input type="checkbox" id={id} value={value} onChange={(e) => handleChange(e)} />
        {value}
      </label>
    </div>
  );
};

export default Checkbox;
