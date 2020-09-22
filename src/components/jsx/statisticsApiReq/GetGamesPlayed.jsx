import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'

const GetTopLoosers = ()=> {
const [gamesPlayed, setGamesPlayed] = useState([]);

		useEffect(() => {
		axios.get('/api/SumAllGames')
		.then(res => {
			console.log(res)
			setGamesPlayed(res.data)
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
			{gamesPlayed.map(games => (<p className="statEllipseListGamesPlayed" key={games.sumAllGames}>{games.sumAllGames}</p>))}

			</div>
			{/* </div> */}

		</div>
	)
}

export default GetTopLoosers;