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

			<div className="ellipseTextContainer">
			<h1 className="statPotatoeHeader">Latest battles</h1>

			<div className="gridgrid">

			{/* index is added to be able to map same name */}
			{latestBattles.map((latest, index) => (<p className="statEllipseListLatest" key={latest.name+index}>{latest.name}</p>))}
			<p className="vsTag1 vsTag"> vs </p>
			<p className="vsTag2 vsTag"> vs </p>
			<p className="vsTag3 vsTag"> vs </p>
			<p className="vsTag4 vsTag"> vs </p>
			<p className="vsTag5 vsTag"> vs </p>
			</div>

			</div>
			</div>
			
		</div>
	)
}

export default GetLatestBattles;