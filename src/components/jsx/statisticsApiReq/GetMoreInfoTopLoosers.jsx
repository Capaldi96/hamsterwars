import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'

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
			<h1 className="statPotatoeHeader">Do the loosers have anything</h1><br/>
				<h1 className="statPotatoeHeader">in common?</h1>
			<ol>
			{loading ? <p className="statEllipseList">Loading...</p> : top5Loosers.map((loosers, index) => (
				<li className="moreInfoStatEllipseList" key={loosers.loves+index}> {loosers.name} loves to {loosers.loves} and eat {loosers.favFood}</li>))}
			</ol>
		

			</div>

			
			</div>



			
		</div>
	)
}

export default GetMoreInfoTopLoosers; 