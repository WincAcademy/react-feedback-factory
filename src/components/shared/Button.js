import React from 'react';

const Button = ({ type, variant, size, disabled, className, onClick, children }) => {
  return (
    <button
        className={"btn" + (size ? " btn--" + size : "") + (variant ? " btn--" + variant : " btn--primary") + (className ? " " + className : "")}
        type={type || "button"}
        disabled={disabled}
        onClick={onClick}>
      { children }
    </button>
  )
};

export default Button;
