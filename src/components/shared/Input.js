import React from 'react';

const Input = ({ type, id, name, placeholder, required, disabled, onChange }) => {
  return (
    <input
      id={id}
      name={name}
      className="input"
      type={type || "text"}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      onChange={onChange}/>
  );
};

export default Input;
