import React, {useState} from 'react';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../src/components/jsx/Home';
import Form from '../src/components/jsx/Form';
import Header from '../src/components/jsx/Header';
import Footer from '../src/components/jsx/Footer';
import BattleResult from '../src/components/jsx/BattleResult';
import Statistic from '../src/components/jsx/Statistic';
import Gallery from '../src/components/jsx/Gallery';
import Webshop from '../src/components/jsx/Webshop';
import ShoppingCart from '../src/components/jsx/ShoppingCart';

function App() {

	return (
		<Router>
			<div className="App">
				<Header />
				<Route path="/" exact component={Home} />
				<Route path="/Form" component={Form} />
				<Route path="/Battle" component={BattleResult} />
				<Route path="/Statistic" component={Statistic} />
				<Route path="/Gallery" component={Gallery} />
				<Route path="/Webshop" component={Webshop} />
				<Route path="/ShoppingCart" component={ShoppingCart} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
