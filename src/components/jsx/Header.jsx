import React, {useState} from 'react';
import '../scss/Header.scss';

const Header = (props) => {
	const [hidden, setHidden] = useState(false)
	
	function toggle(){
		const navbar = document.querySelector('.navbar');
		navbar.classList.toggle('change');
		const hide = setHidden(!hidden);
	}

	return (
	<div>
		<header className="App-header">

		{hidden && (
			<div className="outsideClickDiv" onClick={toggle}></div>
		)}
	

			<nav className="navbar"> 

				<img className="mobile-logo" src={require('../../assets/hamster.png')} alt="logo"/>
				<div className="hamburger-menu" onClick={toggle}>
					<div className="line line1"></div>
					<div className="line line2"></div>
					<div className="line line3"></div>
				</div>
				<ul className="nav-list">
					<li className="nav-item">
					<a href="/" className="nav-link">Home</a>
					</li>
					<li className="nav-item">
					<a href="/Battle" className="nav-link">Battle</a>
					</li>
					<li className="nav-item">
					<a href="/Form" className="nav-link">Add hamster</a>
					</li>
					<li className="nav-item">
					<a href="/Statistic" className="nav-link">Statistic</a>
					</li>
					<li className="nav-item">
					<a href="/Gallery" className="nav-link">Gallery</a>
					</li>
					<li className="nav-item">
					<a href="/Webshop" className="nav-link">Webshop</a>
					</li>
				</ul>
			</nav>
			<img className="top-wave" src={require('../../assets/top_waves.png')} alt="wave"/>
		</header> 
	</div>
	);
  }
  
  export default Header;


