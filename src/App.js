import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import BattleResult from '../src/components/jsx/BattleResult';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<nav>
					<a href="">Home</a>
					<a href="">Battle</a>
					<a href="">Add hamster</a>
					<a href="">Statistic</a>
				</nav>
				<img className="waves" src={require('./assets/top_waves.png')} alt="wave" />
			</header>
			<BattleResult />
			<footer className="App-footer">
				<img className="waves" src={require('./assets/bottom_waves.png')} alt="wave" />
			</footer>
		</div>
	);
}

export default App;
