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

			{/* <div className="potatoeContainer">

			<img className="ellipse" src={require('../../../assets/ellipseTop5Winners.svg')} alt=""/>

			<div className="ellipseTextContainer">
			<h1 className="moreInfoStatPotatoeHeader">What do the winners have in common?</h1>
			{loading ? <p className="statEllipseList">Loading...</p> : top5Winners.map((winners, index) => (<p className="moreInfoStatEllipseList" key={winners.loves+index}>{winners.loves}</p>))}
		

			</div>

			
			</div> */}



			
		</div>
	)
}

export default GetMoreInfoTopWinners; 