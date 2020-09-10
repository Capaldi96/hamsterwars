import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import Home from '../src/components/jsx/Home';
import Form from '../src/components/jsx/Form';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="Home.jsx">Home</a>
          <a href="BattleResult.jsx">Battle</a>
          <a href="Form.jsx">Add hamster</a>
          <a href="Statistic.jsx">Statistic</a>
        </nav>
        <img className="waves" src={require('./assets/top_waves.png')} alt="wave"/>
      </header>
		<Home/>
		<Form/>
      {/* <footer className="App-footer">
        <img className="waves" src={require('./assets/bottom_waves.png')} alt="wave"/>
      </footer> */}
    </div>
  );
}

export default App;
