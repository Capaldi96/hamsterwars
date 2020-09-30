import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss' 
import '../../scss/StatisticsPotatoes.scss'

const GetMoreInfoTopLoosers = () => {
	const [top5Loosers, setTop5Loosers] = useState([]);
	const [loading, setLoading] = useState(false);

		useEffect(() => {
		setLoading(true)
		axios.get('/api/TopLoosers')
		.then(res => {
			console.log(res)
			setTop5Loosers(res.data)
			setLoading(false)
		})
		.catch(err => {
			console.log(err)
		})
	}, [])

	return (
		<div>

			<div className="potatoeContainer">

			<img className="ellipse" src={require('../../../assets/ellipseTop5Loosers.svg')} alt=""/>

			<div className="ellipseTextContainer">
			<div className="potatoeGrid">
			<h1 className="moreInfoStatPotatoeHeader">Do the loosers have anything in common?</h1>
			<div className="moreInfoStatEllipseList">
			<ol>
			{loading ? <p className="statEllipseList">Loading...</p> : top5Loosers.map((loosers, index) => (
				<li key={loosers.loves+index}> {loosers.name} loves to <span className="statBoldFont">{loosers.loves}</span> and eat <span className="statBoldFont">{loosers.favFood}</span></li>))}
			</ol>
			</div>
			</div>
			</div>
			</div>



			
		</div>
	)
}

export default GetMoreInfoTopLoosers; 