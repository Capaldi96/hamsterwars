import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'

const GetTopLoosers = () => {
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
	},[])

		return (
		<div>
			<div className="potatoeContainer">

			<img className="ellipse" src={require('../../../assets/ellipseTop5Loosers.svg')} alt=""/>

			<div className="ellipseTextContainer">
			<div className="potatoeGrid">
			<h1 className="statPotatoeHeader">Top 5 loosers</h1>

			<div className="statEllipseList">
			<ol>
			{loading ? <p >Loading...</p> : top5Loosers.map((loosers, index) => (<li  key={loosers.name+index}>{loosers.name}</li>))}
			</ol>
			</div>
			</div>
			</div>
			</div>

		</div>
	)
}

export default GetTopLoosers;