import React, { useState } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../src/components/jsx/Home';
import Form from '../src/components/jsx/Form';
import Header from '../src/components/jsx/Header';
import Footer from '../src/components/jsx/Footer';
import BattleResult from '../src/components/jsx/BattleResult';
import Statistic from '../src/components/jsx/Statistic';


function App() {
<<<<<<< HEAD
	return (
		<Router>
			<div className="App">
				<Header />
				<Route path="/" exact component={Home} />
				<Route path="/Form" component={Form} />
				<Route path="/Battle" component={BattleResult} />
				<Route path="/Statistic" component={Statistic} />
				<Footer />
			</div>
		</Router>
	);
  return (
    <div className="App">
		<Header/>
		<Form/>
		<Home/>
		<Statistic/>
		<Footer/>
    </div>
  );
}

export default App;
