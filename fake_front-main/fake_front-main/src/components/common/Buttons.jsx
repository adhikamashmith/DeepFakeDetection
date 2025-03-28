import React from 'react';

const Button = ({ onClick, children, variant = 'primary', disabled = false }) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2';
  const variantStyles = variant === 'primary'
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'bg-gray-600 text-white hover:bg-gray-700';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;