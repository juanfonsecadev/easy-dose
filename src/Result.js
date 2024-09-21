import React from 'react';

const Result = ({ value, unit }) => {
  return (
    <div className="result-container">
      <span className="result-text">Resultado: {value} {unit}</span>
    </div>
  );
};

export default Result;