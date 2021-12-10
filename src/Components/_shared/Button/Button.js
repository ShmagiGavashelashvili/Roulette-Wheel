import React from "react";

const Button = ({ title, handleClick, disable, className }) => {
  return (
    <button value={title} className={className} onClick={handleClick} disabled={disable}>
      {title}
    </button>
  );
};

export default Button;
