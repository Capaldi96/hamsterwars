import React from 'react';
import '../scss/Header.scss';

const header = (props) => {

	function toggle(){
		console.log('toggle click')
		const navbar = document.querySelector('.navbar');
		navbar.classList.toggle('change');
	}

	return (
	<div>
		<header className="App-header">
			<nav className="navbar"> 

				<img className="mobile-logo" src={require('../../assets/hamster.png')} alt="logo"/>
				<div className="hamburger-menu" onClick={toggle}>
					<div className="line line1"></div>
					<div className="line line2"></div>
					<div className="line line3"></div>
				</div>
				<ul className="nav-list">
					<li className="nav-item">
					<a href="#" className="nav-link">Home</a>
					</li>
					<li className="nav-item">
					<a href="#" className="nav-link">Battle</a>
					</li>
					<li className="nav-item">
					<a href="#" className="nav-link">Add hamster</a>
					</li>
					<li className="nav-item">
					<a href="#" className="nav-link">Statistic</a>
					</li>
				</ul>
			</nav>
			<img className="top-wave" src={require('../../assets/top_waves.png')} alt="wave"/>
		</header> 
	</div>
	);
  }
  
  export default header;


