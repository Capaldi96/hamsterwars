import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'
import '../../scss/StatisticsPotatoes.scss'


const GetGamesPlayed = ()=> {
const [gamesPlayed, setGamesPlayed] = useState([]);
const [loading, setLoading] = useState(false);



		useEffect(() => {
		setLoading(true)
		axios.get('/api/SumAllGames')
		.then(res => {
			console.log(res)
			setGamesPlayed(res.data)
			setLoading(false)
		}) 
		.catch(err => {
			console.log(err)
		})
	},[])

		return (
		<div>
			{/* <div className="potatoeContainer"> */}
			<img className="ellipse" src={require('../../../assets/ellipse1.svg')} alt=""/>
			<div className="ellipseTextContainer">

			<div className="potatoeGrid">
			<h2 className="statPotatoeHeader">Games played</h2>

			<div className="statEllipseList">
			
			{loading ? <p className="statLoadingText">Loading...</p> : gamesPlayed.map(games => (<p key={games.sumAllGames}><span className="statBoldFont">{games.sumAllGames}</span> executed battles</p>))}
			
			</div>
			</div>
			</div>

		</div>
	)
}

export default GetGamesPlayed;