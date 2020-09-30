import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'


const GetLeastParticipated = () => {
const [leastParticipated, setLeastParticipated] = useState([]);
const [loading, setLoading] = useState(false);

		useEffect(() => {
		setLoading(true)
		axios.get('/api/LeastGames')
		.then(res => {
			console.log(res)
			setLeastParticipated(res.data)
			setLoading(false)
		})
		.catch(err => {
			console.log(err)
		})
	},[])

	return (
		<div>
			<div className="potatoeContainer">

			<img className="ellipse" src={require('../../../assets/ellipse2.svg')} alt=""/>

			<div className="ellipseTextContainer">
			<div className="potatoeGrid">
			<h1 className="statPotatoeHeader">Least participated</h1>

			<div className="statEllipseList">
			<ol>
			{loading ? <p className="statLoadingText">Loading...</p> : leastParticipated.map((leastGames, index) => (<li key={leastGames.name+index}>{leastGames.name}</li>))}
			</ol>
			</div>
			</div>
			</div>
			</div>
		</div>
	)
}

export default GetLeastParticipated;