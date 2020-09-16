import React, { useState,useEffect } from 'react';
import axios from 'axios';

import '../scss/BattleCard.scss';

const BattleCard = props => {

	const wrapperFunction = () => {
		
		props.setWinner(props.hamster)
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
					<p class="inner-card-p">Years: {props.hamster.age}</p>
					<p class="inner-card-p">Games: {props.hamster.games}</p>
					<p class="inner-card-p">FavFood: {props.hamster.favFood}</p>
					<p class="inner-card-p">Loves: {props.hamster.loves}</p>
					<p class="inner-card-p">wins: {props.hamster.wins}</p>
					<p class="inner-card-p">losses: {props.hamster.defeats}</p>
				</div>
			</div>
		</div>
	);
};


export default BattleCard;
