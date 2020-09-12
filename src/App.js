import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import Home from '../src/components/jsx/Home';
import Header from '../src/components/jsx/Header';
import Footer from '../src/components/jsx/Footer';
import Statistic from '../src/components/jsx/Statistic';



function App() {
  return (
    <div className="App">
		<Header/>
		<Home/>
		<Statistic/>
		<Footer/>
    </div>
  );
}

export default App;
