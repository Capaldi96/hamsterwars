import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'
import '../../scss/StatisticsPotatoes.scss'

const GetTopWinners = () => {
	const [top5Winners, setTop5Winners] = useState([]);
	const [loading, setLoading] = useState(false);

		useEffect(() => {
		setLoading(true)
		axios.get('/api/TopWinners')
		.then(res => {
			console.log(res)
			setTop5Winners(res.data)
			setLoading(false)
		})
		.catch(err => {
			console.log(err)
		})
	}, [])

	return (
		<div>

			<div className="potatoeContainer">

			<img className="ellipse" src={require('../../../assets/ellipseTop5Winners.svg')} alt=""/>

			<div className="ellipseTextContainer">
			
			
			<div className="potatoeGrid">
			<h1 className="statPotatoeHeader">Top 5 winners</h1>


			<div className="statEllipseList">
			<ol>
			{loading ? <p className="statLoadingText">Loading...</p> : top5Winners.map((winners, index) => (<li key={winners.name+index}>{winners.name}</li>))}
			</ol>
			</div>
			</div>
			</div>
			</div>


			
		</div>
	)
}

export default GetTopWinners; 