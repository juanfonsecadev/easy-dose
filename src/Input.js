import React, { useState } from 'react';

const Input = ({ label, value, onChange, unit, setUnit, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <div className="input-container">
      <label htmlFor={label}>{label}</label>
      <div className={`input-field ${isFocused ? 'input-field--focused' : ''}`}>
        <input
          type="text"
          id={label}
          value={value}
          onChange={(e) => onChange(e.target.value)} // Use onChange com o evento
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
        <div className="unit-selector">
          <span 
            className={`unit ${unit === 'ml' ? 'unit--selected' : ''}`}
            onClick={() => handleUnitChange('ml')}
          >
            ml
          </span>
          <span 
            className={`unit ${unit === 'gotas' ? 'unit--selected' : ''}`}
            onClick={() => handleUnitChange('gotas')}
          >
            gotas
          </span>
        </div>
      </div>
    </div>
  );
};

export default Input;