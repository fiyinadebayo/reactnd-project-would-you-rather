import React from 'react';

const Button = ({ id, text, onClick, type, isDisabled }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`btn ${type}`}
      disabled={isDisabled || false}>
      { text }
    </button>
  )
}

export default Button;
