import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a>Home</a>
          <a>Battle</a>
          <a>Add hamster</a>
          <a>Statistic</a>
        </nav>
        <img className="waves" src={require('./assets/top_waves.png')} alt="asd"/>
      </header>
      <footer className="App-footer">
        <img className="waves" src={require('./assets/bottom_waves.png')} alt="asd"/>
      </footer>
    </div>
  );
}

export default App;
