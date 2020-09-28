import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'
import FadeEffectTop5Winners from '../fadeEffect/FadeEffectTop5Winners'

const GetTopWinners = () => {
	const [top5Winners, setTop5Winners] = useState([]);
	const [showTop5Winners, setShowTop5Winners] = useState(false);
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


			{/* <div className="flip-card-stat"> */}
			<div className="ellipseTextContainer">

			<div className="flip-card-inner-stat">

			<div className="flip-card-front-stat">
			<h1 className="statPotatoeHeader">Top 5 winners</h1>
			{loading ? <p className="statEllipseList">Loading...</p> : top5Winners.map((winners, index) => (<p className="statEllipseList" key={winners.name+index}>{winners.name}</p>))}
			<p className="statMoreInfoText">More info</p>
			</div>

			<div className="flip-card-back-stat">
			<h1 className="statPotatoeHeader">In common</h1>
			{loading ? <p className="statEllipseList">Loading...</p> : top5Winners.map((winners, index) => (<p className="statEllipseList" key={winners.loves+index}>{winners.loves}</p>))}
			</div>



			</div>
			</div>

			{/* </div> */}
			</div>



			
		</div>
	)
}

export default GetTopWinners; 