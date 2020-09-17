import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'

const GetLatestBattles = () => {
	return (
		<div>
	
			<div className="potatoeContainer">

			<img className="ellipse" src={require('../../../assets/ellipseLatestBattles.svg')} alt=""/>

			<div className="potatoeText">
			<h1 className="statPotatoeHeader">Latest battles</h1>
			
			</div>
			</div>
			
		</div>
	)
}

export default GetLatestBattles;