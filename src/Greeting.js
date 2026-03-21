import React from 'react';

function Greeting({ name }) {
  return (
    <div className="greeting">
      <h2>Bonjour, {name || 'invité'}!</h2>
      <p>Bienvenue dans l'application React</p>
    </div>
  );
}

export default Greeting;