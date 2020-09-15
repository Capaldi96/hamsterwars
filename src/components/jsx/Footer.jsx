import React from 'react';
import '../scss/Footer.scss';
 
const footer = () => {
	return (
	<div>
		<footer className="App-footer">
     		<img className="bottom-wave" src={require('../../assets/bottom_waves.png')} alt="wave"/>
    	</footer>
	</div>
	)
}

export default footer;