import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'

const GetTopLoosers = () => {
const [top5Loosers, setTop5Loosers] = useState([]);

		useEffect(() => {
		axios.get('/api/TopLoosers')
		.then(res => {
			console.log(res)
			setTop5Loosers(res.data)
		})
		.catch(err => {
			console.log(err)
		})
	},[])

		return (
		<div>
			<div className="potatoeContainer">

			<img className="ellipse" src={require('../../../assets/ellipseTop5Loosers.svg')} alt=""/>

			<div className="ellipseTextContainer">
			<h1 className="statPotatoeHeader">Top 5 loosers</h1>
			{top5Loosers.map((loosers, index) => (<p className="statEllipseList" key={loosers.name+index}>{loosers.name}</p>))}
			
			</div>
			</div>

		</div>
	)
}

export default GetTopLoosers;