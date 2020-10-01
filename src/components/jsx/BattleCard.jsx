import React, { useState } from 'react';
import '../scss/BattleCard.scss';

const BattleCard = props => {
	const [crownForWinner, setCrownForWinner] = useState(false);
	const wrapperFunction = () => {
		if(props.disableImg === false){
			props.setDisableImg(true);
			props.setWinnerId(props.hamster._id)
			props.setShowCutestH1(false);
			setCrownForWinner(true);
			props.setConfetti(true);
		}
	}
	
	return (
		
		<div className="flip-card" onClick={wrapperFunction}>
			<img className="flip-card-info" alt="info" src={require('../../assets/information_orange.png')} /> 
			<div className="flip-card-inner">
			<div className="flip-card-crown">{crownForWinner ? <img alt="crown-icon" src={require('../../assets/crown.png')} /> : null}</div>
				<div className="flip-card-front">
					<img
						className="competitior-img"
						src={props.hamster.imgName}
						alt="Avatar"
					/>
				</div>
				<div className="flip-card-back">
					<h2 className="flip-card-h1">{props.hamster.name}</h2>
					<p className="inner-card-p">Years: {props.hamster.age}</p>
					<p className="inner-card-p">FavFood: {props.hamster.favFood}</p>
					<p className="inner-card-p">Loves: {props.hamster.loves}</p>
					<p className="inner-card-p">Games: {props.hamster.games}</p>
					<span className="inner-card-p">Wins: {props.hamster.wins} </span>
					<span className="inner-card-p">Losses: {props.hamster.defeats}</span>
				</div>
			</div>
		</div>
	);
};


export default BattleCard;
