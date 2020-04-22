import React from 'react';

const Textarea = ({ id, name, value, placeholder, required, disabled, className, onBlur, onChange }) => {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      className={`input ${className ? className : ''}`}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};

export default Textarea;
