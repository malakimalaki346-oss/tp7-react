import React, { useState } from 'react';
import './App.css';
import JSXDemo from './JSXDemo';
import withLogging from './withLogging';
import DataLoader from './DataLoader';
import Greeting from './Greeting';
import Counter from './Counter';
import ButtonWithLogging from './ButtonWithLogging';

const LoggedGreeting = withLogging(Greeting);
const LoggedCounter = withLogging(Counter);

function App() {
  const [message, setMessage] = useState('');
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (buttonName) => {
    setMessage(`Vous avez cliqué sur ${buttonName}`);
    setClickCount(prev => prev + 1);
  };

  const frenchData = {
    title: "Bienvenue dans Render Props Demo",
    body: "Ceci est un exemple de contenu en français. Le pattern Render Props permet de partager facilement la logique entre différents composants tout en gardant un contrôle total sur l'affichage."
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TP React - Malak Nait Haddou</h1>
      </header>
      
      <main>
        <section>
          <h2>JSX Demo</h2>
          <JSXDemo />
        </section>
        
        <section>
          <h2>Higher-Order Component Demo</h2>
          <LoggedGreeting name="Malak" />
          <LoggedCounter initialValue={8} />
          
          <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>Boutons avec HOC Logging</h3>
            <ButtonWithLogging 
              onClick={() => handleClick('Bouton Primaire')} 
              variant="primary"
            >
              Bouton Primaire
            </ButtonWithLogging>
            <ButtonWithLogging 
              onClick={() => handleClick('Bouton Secondaire')} 
              variant="secondary"
            >
              Bouton Secondaire
            </ButtonWithLogging>
            <ButtonWithLogging 
              onClick={() => handleClick('Bouton Danger')} 
              variant="danger"
            >
              Bouton Danger
            </ButtonWithLogging>
            {message && (
              <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#e9ecef', borderRadius: '5px' }}>
                <p><strong>Message:</strong> {message}</p>
                <p><strong>Nombre total de clics:</strong> {clickCount}</p>
              </div>
            )}
          </div>
        </section>
        
        <section>
          <h2>Render Props Demo</h2>
          <DataLoader 
            simulateData={frenchData}
            render={({ data, loading, error }) => {
              if (loading) return <p>Chargement...</p>;
              if (error) return <p>Erreur: {error}</p>;
              return (
                <div>
                  <h3>{data?.title}</h3>
                  <p>{data?.body}</p>
                </div>
              );
            }}
          />
        </section>
        
        <section>
          <h2>Tests Demo</h2>
          <Greeting name="Malak Nait Haddou" />
          <Counter initialValue={3} />
        </section>
      </main>
    </div>
  );
}

export default App;