import React from 'react';

const Button = ({ type, size, disabled, className, onClick, children }) => {
  return (
    <button
        className={"btn" + (size ? " btn--" + size : "") + (className ? " " + className : "")}
        type={type || "button"}
        disabled={disabled}
        onClick={onClick}>
      { children }
    </button>
  )
};

export default Button;
