import React, { useState } from 'react';
import '../scss/BattleCard.scss';

const BattleCard = props => {

	const [crownForWinner, setCrownForWinner] = useState(false);
	
	const wrapperFunction = () => {
		props.setWinnerId(props.hamster._id)
		//props.setWinnerAndLooser(props.hamster._id)
		props.setShowCutestH1(false);
		props.setDisableImg(true);
		console.log('hamster clicked')
		setCrownForWinner(true);
		props.setConfetti(true);
	}

	return (
		
		 <div className="flip-card" >
			<img className="flip-card-info" alt="info" src={require('../../assets/information_kopia.png')} />
			
			<div className="flip-card-inner">
			<div className="flip-card-crown">{crownForWinner ? <img src={require('../../assets/crown.png')} /> : null}</div>
				<div className="flip-card-front">
					{ props.disableImg ? <img
						className="competitior-img"
						src="https://i.pinimg.com/originals/04/d2/34/04d23484b0a7ab2c1840b4c6a7cf78c7.jpg"
						alt="Avatar"
					/> : <img
						onClick={wrapperFunction}
						className="competitior-img"
						src="https://i.pinimg.com/originals/04/d2/34/04d23484b0a7ab2c1840b4c6a7cf78c7.jpg"
						alt="Avatar"
					/> }
				</div>
				<div className="flip-card-back">
					<h1 className="flip-card-h1">{props.hamster.name}</h1>
					<p className="inner-card-p">Years: {props.hamster.age}</p>
					<p className="inner-card-p">Games: {props.hamster.games}</p>
					<p className="inner-card-p">FavFood: {props.hamster.favFood}</p>
					<p className="inner-card-p">Loves: {props.hamster.loves}</p>
					<p className="inner-card-p">wins: {props.hamster.wins}</p>
					<p className="inner-card-p">losses: {props.hamster.defeats}</p>
				</div>
			</div>
		</div>
	);
};


export default BattleCard;
