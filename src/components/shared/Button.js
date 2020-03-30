import React from 'react';

const Button = ({ type, disabled, onClick, children }) => {
  return (
    <button
        className="btn"
        type={type || "button"}
        disabled={disabled}
        onClick={onClick}>
      { children }
    </button>
  )
};

export default Button;
