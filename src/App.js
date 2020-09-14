import React, { useState } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import Home from '../src/components/jsx/Home';
import Form from '../src/components/jsx/Form';
import Header from '../src/components/jsx/Header';
import Footer from '../src/components/jsx/Footer';
import BattleResult from '../src/components/jsx/BattleResult';
import Statistic from '../src/components/jsx/Statistic';


function App() {

	const HOME = 'home', BATTLE = 'battle', ADD = 'add', STATISTIC = 'statistic';
	const [currentComp, setCurrentComp] = useState(HOME);

	let content = null;
	switch (currentComp) {
        case HOME:
            content = ( <Home/> )
            break;
        case BATTLE:
            content = ( <BattleResult/> )
			break;
		case ADD:
			content = ( <Form/> )
			break;
		case STATISTIC:
			content = (	<Statistic/> )
			break;
		default:
			content = ( <Home/> )
	}

  return (
    <div className="App">
		<Header toHomeComp={() => setCurrentComp(HOME)} toBattleComp={() =>setCurrentComp(BATTLE)} toFormComp={() => setCurrentComp(ADD)} toStatComp={() => setCurrentComp(STATISTIC)}/>
		{ content }
		<Footer/>
    </div>
  );
}

export default App;
