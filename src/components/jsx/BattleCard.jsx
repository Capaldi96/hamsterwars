import React, { useState,useEffect } from 'react';
import axios from 'axios';

import '../scss/BattleCard.scss';

const BattleCard = props => {
	useEffect(()=>{
		getData()
	})
	async function getData(){
		let response = await axios.get('http://localhost:5000/api/kalle');
		
		let data = response.data;
		console.log(data)
	}
	return (
		<div className="flip-card" onClick={()=>props.setWinnerData("kalle")}>
			<img className="flip-card-info" src={require('../../assets/info.svg')} />
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<img
						className="competitior-img"
						src="https://i.pinimg.com/originals/04/d2/34/04d23484b0a7ab2c1840b4c6a7cf78c7.jpg"
						alt="Avatar"
					/>
				</div>
				<div className="flip-card-back">
					<h1>{props.hamster.name}</h1>
					<p>Years: {props.hamster.year}</p>
					<p>We love that hampter</p>
				</div>
			</div>
		</div>
	);
};


export default BattleCard;
