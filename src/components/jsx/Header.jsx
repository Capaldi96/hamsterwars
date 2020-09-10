import React from 'react';
import '../scss/Header.scss';

function Header() {
	return (
	  <div>
		<header className="App-header">
        	<nav>
				<a href="Home.jsx">Home</a>
				<a href="BattleResult.jsx">Battle</a>
				<a href="Form.jsx">Add hamster</a>
				<a href="Statistic.jsx">Statistic</a>
        	</nav>
        	<img className="top-wave" src={require('../../assets/top_waves.png')} alt="wave"/>
      </header>
	  </div>
	);
  }
  
  export default Header;