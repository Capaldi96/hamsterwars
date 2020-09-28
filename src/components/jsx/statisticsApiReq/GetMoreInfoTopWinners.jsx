import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'

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
			<h1 className="statPotatoeHeader">Do the winners have anything</h1><br/>
				<h1 className="statPotatoeHeader">in common?</h1>
			<ol>
			{loading ? <p className="statEllipseList">Loading...</p> : top5Winners.map((winners, index) => (
				<li className="moreInfoStatEllipseList" key={winners.loves+index}> {winners.name} loves to {winners.loves} and eat {winners.favFood}</li>))}
			</ol>
		

			</div>

			
			</div>



			
		</div>
	)
}

export default GetMoreInfoTopWinners; 