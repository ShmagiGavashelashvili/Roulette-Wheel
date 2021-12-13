import React from "react";

interface ButtonProps {
  title: string,
  handleClick(e: React.MouseEvent<HTMLButtonElement>): void,
  disable: boolean,
  className: string
}

const Button = ({ title, handleClick, disable, className }: ButtonProps) => {
  return (
    <button value={title} className={className} onClick={handleClick} disabled={disable}>
      {title}
    </button>
  );
};

export default Button;
