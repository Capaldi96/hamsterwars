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
			{top5Winners.map(winners => (
	<li key={winners.name}>{winners.name}</li>
))}
		</div>
	)
}

export default GetTopWinners; 