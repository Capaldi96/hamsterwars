import React from 'react';
import '../scss/Home.scss';

const Home = () => {

	return (
	  <div>
		<main className="home-main">
			<div className="home-container">
				<img  className="hamster-icon" src={require('../../assets/hamster.png')} alt="Hamster Icon"/>
				<h1>VOTE FOR<br></br> THE CUTEST<br></br> HAMSTER.</h1>
				<p>Welcome to HamsterWars!<br></br> Vote on the hamster you like the most. <br></br>Further statistics about hamster battles, wins, losses and other great stuff.</p>
				<a href="/Battle" className="link-to">Go to battle</a>
			</div>
		</main>
	  </div>
	);
  }
  
  export default Home;