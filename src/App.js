import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import Header from '../src/components/jsx/Header';
import Footer from '../src/components/jsx/Footer';
import BattleResult from '../src/components/jsx/BattleResult';


function App() {
	return (
		<div className="App">
			<Header/>
			<BattleResult />
			<Footer/>
		</div>
	);
}

export default App;
