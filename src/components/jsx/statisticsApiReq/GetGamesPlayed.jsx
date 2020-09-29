import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'

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
			<img className="ellipse" src={require('../../../assets/ellipseGamesPlayed.svg')} alt=""/>
			<div className="ellipseTextContainer">
			<h2 className="statPotatoeHeader">Games played</h2>

			<div className="statEllipseListGP">
			
			{loading ? <p>Loading...</p> : gamesPlayed.map(games => (<p key={games.sumAllGames}>{games.sumAllGames}</p>))}
			
			</div>
			</div>
			{/* </div> */}

		</div>
	)
}

export default GetGamesPlayed;