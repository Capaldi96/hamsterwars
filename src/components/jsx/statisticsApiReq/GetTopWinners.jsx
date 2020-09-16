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

			<div className="potatoeText">
			{top5Winners.map(winners => (<h1 key={winners.name}>{winners.name}</h1>))}
		
			</div>
			</div>



			
		</div>
	)
}

export default GetTopWinners; 