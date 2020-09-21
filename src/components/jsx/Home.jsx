import React, { useState, useEffect } from 'react';
import '../scss/Home.scss';

const Home = () => {
	const [confetti, setConfetti] = useState(false);
	

	function onClick() {
		setConfetti(true)
	}

	const config = {
		angle: "95",
		spread: "116",
		startVelocity: "29",
		elementCount: 70,
		dragFriction: "0.11",
		duration: 3000,
		stagger: 3,
		width: "7px",
		height: "7px",
		perspective: "500px",
		colors: ["#f00", "#0f0", "#00f"]
	  };
	/* return <Confetti active={ someProp } config={ config }/> */

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