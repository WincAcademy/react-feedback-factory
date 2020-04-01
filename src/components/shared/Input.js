import React from 'react';

const Input = ({ type, id, name, value, placeholder, required, disabled, className, onChange }) => {
  return (
    <input
      id={id}
      type={type || "text"}
      name={name}
      value={value}
      className={`input ${className ? className : ''}`}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      onChange={onChange}/>
  );
};

export default Input;
