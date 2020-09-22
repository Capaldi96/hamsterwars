import React, { useState, useEffect } from 'react';
import '../scss/Home.scss';

const Home = () => {

	return (
	  <div>
		<main className="home-main">
			<div className="home-container">
				<img  className="hamster-icon" src={require('../../assets/hamster.png')} alt="Hamster Icon"/>
				<h1>VOTE FOR<br></br> THE CUTEST<br></br> HAMSTER.</h1>
				<p>Welcome to HamsterWars!<br></br> Vote on the hamster you like the most. <br></br>Get info about how many battles won, lost or other fun stuff.</p>
				<a href="/Battle" className="link-toBattle">Go to battle</a>
			</div>
		</main>
	  </div>
	);
  }
  
  export default Home;