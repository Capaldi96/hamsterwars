import React, { useState } from 'react';
import '../scss/BattleResult.scss';

const BattleResult = () => {


	return (
		<div id="battleResult">
			<div className="container">
				<h1>Choose your cutest</h1>
				<div className="match-container">
					<div className="flip-card">
						<div className="flip-card-inner">
							<img className="flip-card-info" src={require('../../assets/info.svg')}></img>
							<div className="flip-card-front">
								<img className="competitior-img" src="https://i.pinimg.com/originals/04/d2/34/04d23484b0a7ab2c1840b4c6a7cf78c7.jpg" alt="Avatar" ></img>
							</div>
							<div className="flip-card-back">
								<h1>Hamter</h1>
								<p>Carrot eater</p>
								<p>We love that hampter</p>
							</div>
						</div>
					</div>
					<img className="VS" src={require('../../assets/vs.png')}></img>
					<div className="flip-card">
						<div className="flip-card-inner">
							<img className="flip-card-info" src={require('../../assets/info.svg')}></img>
							<div className="flip-card-front">
								<img className="competitior-img" src="https://i.pinimg.com/originals/04/d2/34/04d23484b0a7ab2c1840b4c6a7cf78c7.jpg" alt="Avatar" ></img>
							</div>
							<div className="flip-card-back">
								<h1>Hamter</h1>
								<p>Carrot eater</p>
								<p>We love that hampter</p>
							</div>
						</div>
					</div>
				</div>
				<div>1		</div>
			</div>
		</div>
	);
}

export default BattleResult;
