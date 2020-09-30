import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'
import '../../scss/StatisticsPotatoes.scss'

const GetMoreInfoTopWinners = () => {
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
			<h1 className="moreInfoStatPotatoeHeader">Do the winners have anything in common?</h1>
			<div className="moreInfoStatEllipseList">
			<ol>
			{loading ? <p className="statEllipseList">Loading...</p> : top5Winners.map((winners, index) => (
				<li key={winners.loves+index}> {winners.name} loves to <span className="statBoldFont">{winners.loves}</span> and eat <span className="statBoldFont">{winners.favFood}</span></li>))}
			</ol>
			</div>
			</div>
			</div>
			</div>



			
		</div>
	)
}

export default GetMoreInfoTopWinners; 