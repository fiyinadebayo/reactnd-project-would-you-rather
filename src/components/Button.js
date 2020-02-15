import React from 'react';

const Button = ({ id, text, onClick, type, size, isDisabled }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`btn ${type} ${size}`}
      disabled={isDisabled || false}>
      { text }
    </button>
  )
}

export default Button;
