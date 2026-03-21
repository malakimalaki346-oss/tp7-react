import React from 'react';

function JSXDemo() {
  const user = {
    firstName: 'Malak',
    lastName: 'Nait Haddou'
  };
  
  const formatName = (user) => {
    return `${user.firstName} ${user.lastName}`;
  };
  
  return (
    <div className="jsx-demo">
      <h1>Bienvenue, {formatName(user)}!</h1>
      <div>
        <label htmlFor="username">Nom d'utilisateur:</label>
        <input 
          type="text" 
          id="username" 
          name="username"
          defaultValue="malak nait haddou"
        />
      </div>
      <p>Math works!</p>
    </div>
  );
}

export default JSXDemo;