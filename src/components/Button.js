import React from 'react';

const Button = ({ text, onClick, style }) => {
  const defaultStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    margin: '1rem 0',
    ...style
  };

  return (
    <button style={defaultStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
