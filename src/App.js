import React from 'react';
import './App.css';
import JSXDemo from './JSXDemo';
import withLogging from './withLogging';
import DataLoader from './DataLoader';
import Greeting from './Greeting';
import Counter from './Counter';

const LoggedGreeting = withLogging(Greeting);
const LoggedCounter = withLogging(Counter);

const simulatedPostData = {
  title: "Mon article de test",
  body: "Ceci est le contenu de l'article qui s'affiche immédiatement sans attendre le chargement de l'API."
};

function App() {
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
        </section>
        
        <section>
          <h2>Render Props Demo</h2>
          <DataLoader 
            url="https://jsonplaceholder.typicode.com/posts/1"
            simulateData={simulatedPostData}
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