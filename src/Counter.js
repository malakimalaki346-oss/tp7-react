import React, { useState } from 'react';

function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  
  const reset = () => {
    setCount(initialValue);
  };
  
  return (
    <div className="counter">
      <h3>Compteur: {count}</h3>
      <div className="counter-buttons">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Réinitialiser</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;