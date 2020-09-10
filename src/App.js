import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import Home from '../src/components/jsx/Home';
import Form from '../src/components/jsx/Form';
import Header from '../src/components/jsx/Header';
import Footer from '../src/components/jsx/Footer';



function App() {
  return (
    <div className="App">
		<Header/>
		<Home/>
		<Form/>
		<Footer/>
    </div>
  );
}

export default App;
