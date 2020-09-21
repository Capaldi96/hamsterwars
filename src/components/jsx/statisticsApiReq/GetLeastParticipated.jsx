import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'

const GetLeastParticipated = () => {
const [leastParticipated, setLeastParticipated] = useState([]);

		useEffect(() => {
		axios.get('/api/LeastGames')
		.then(res => {
			console.log(res)
			setLeastParticipated(res.data)
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
			<h1 className="statPotatoeHeader">Least Participated</h1>
			{leastParticipated.map(leastGames => (<p className="statEllipseList" key={leastGames.name}>{leastGames.name}</p>))}
			</div>
			</div>
		</div>
	)
}

export default GetLeastParticipated;