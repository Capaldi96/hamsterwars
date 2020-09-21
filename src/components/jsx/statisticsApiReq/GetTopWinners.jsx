import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'

const GetTopWinners = () => {
	const [top5Winners, setTop5Winners] = useState([]);

		useEffect(() => {
		axios.get('/api/TopWinners')
		.then(res => {
			console.log(res)
			setTop5Winners(res.data)
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
			<h1 className="statPotatoeHeader">Top 5 winners</h1>
			{top5Winners.map(winners => (<p className="statEllipseList" key={winners.name}>{winners.name}</p>))}
		
			</div>
			</div>



			
		</div>
	)
}

export default GetTopWinners; 