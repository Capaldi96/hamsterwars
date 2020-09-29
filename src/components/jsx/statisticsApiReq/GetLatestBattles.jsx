import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'

const GetLatestBattles = () => {
	const [latestBattles, setLatestBattles] = useState([]);
	const [loading, setLoading] = useState(false);

		useEffect(() => {
		setLoading(true)
		axios.get('/api/LatestGames')
		.then(res => {
			console.log(res)
			setLatestBattles(res.data)
			setLoading(false)
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
			

			<div className="potatoeGrid">
			<h1 className="statPotatoeHeader">Latest battles</h1>

			{/* index is added to be able to map same name */}
			{loading ? <span></span> : 
			
			latestBattles.map((latest, index) => (<p className="statEllipseListLatest" key={latest.name+index}>{latest.name} </p>
			
			))}

			{loading ? <p className="latestLoading">Loading...</p> : 
			
			<div className="tagsStatContainer">
			<p className="vsTag"> vs </p>
			<p className="vsTag"> vs </p>
			<p className="vsTag"> vs </p>
			<p className="vsTag"> vs </p>
			<p className="vsTag"> vs </p></div>}
			

			</div>

			</div>
			</div>
			
		</div>
	)
}

export default GetLatestBattles;