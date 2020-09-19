import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'

const GetLatestBattles = () => {
	const [latestBattles, setLatestBattles] = useState([]);

		useEffect(() => {
		axios.get('/api/LatestGames')
		.then(res => {
			console.log(res)
			setLatestBattles(res.data)
		})
		.catch(err => {
			console.log(err)
		})
	},[])
	return (
		<div>
	
			<div className="potatoeContainer">

			<img className="ellipse" src={require('../../../assets/ellipseLatestBattles.svg')} alt=""/>

			<div className="potatoeText">
			<h1 className="statPotatoeHeader">Latest battles</h1>
			{latestBattles.map(latestGames => (<p key={latestGames.name}>{latestGames.name}{latestGames.latestGame}</p>))}
			</div>
			</div>
			
		</div>
	)
}

export default GetLatestBattles;