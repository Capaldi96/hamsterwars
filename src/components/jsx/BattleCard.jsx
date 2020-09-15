import React, { useState,useEffect } from 'react';
import axios from 'axios';

import '../scss/BattleCard.scss';

const BattleCard = props => {



	const wrapperFunction = () => {
		props.setWinnerData("kalle");
		props.setShowCutestH1(false);
	}

	return (
		<div className="flip-card" onClick={wrapperFunction}>
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
					<p>Years: {props.hamster.age}</p>
					<p>Games : {props.hamster.games}</p>
					<p>FavFood{props.hamster.favFood}</p>
					<p>Loves: {props.hamster.loves}</p>
					<span>wins: {props.hamster.wins}</span>
					<span>losses: {props.hamster.defeats}</span>
				</div>
			</div>
		</div>
	);
};


export default BattleCard;
