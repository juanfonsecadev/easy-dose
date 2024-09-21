import React from 'react';

const Button = ({ title, onPress, ...rest }) => {
  return (
    <button className="button" onClick={onPress} {...rest}>
      {title}
    </button>
  );
};

export default Button;