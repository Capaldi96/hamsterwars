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

			<img className="ellipse" src={require('../../../assets/ellipseLeastParticipated.svg')} alt=""/>

			<div className="ellipseTextContainer">
			<h1 className="statPotatoeHeader">Least participated</h1>
			{loading ? <p className="statEllipseList">Loading...</p> : leastParticipated.map((leastGames, index) => (<p className="statEllipseList" key={leastGames.name+index}>{leastGames.name}</p>))}
			</div>
			</div>
		</div>
	)
}

export default GetLeastParticipated;