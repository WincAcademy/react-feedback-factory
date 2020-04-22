import React from 'react';

const Select = ({ id, name, value, required, disabled, className, children, onBlur, onChange }) => {
  return (
    <select
      id={id}
      name={name}
      value={value}
      className={`input ${className ? className : ''}`}
      required={required}
      disabled={disabled}
      onBlur={onBlur}
      onChange={onChange}>
      { children }
    </select>
  )
};

export default Select;
