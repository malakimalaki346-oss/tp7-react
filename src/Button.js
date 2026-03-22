import React from 'react';

function Button({ onClick, children, variant = 'primary' }) {
  const buttonStyle = {
    primary: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '5px'
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '5px'
    },
    danger: {
      backgroundColor: '#dc3545',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '5px'
    }
  };

  return (
    <button 
      onClick={onClick} 
      style={buttonStyle[variant]}
      className={`button button-${variant}`}
    >
      {children}
    </button>
  );
}

export default Button;