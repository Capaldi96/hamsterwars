import React, { useState } from 'react';
import '../scss/BattleResult.scss';
import BattleCard from './BattleCard'
const BattleResult = () => {


	return (
		<div id="battleResult">
			<div className="container">
				<h1>Choose your cutest</h1>
				<div className="match-container">
                    <BattleCard></BattleCard>
					<img className="VS" src={require('../../assets/vs.png')}></img>
					<BattleCard></BattleCard>
				</div>
				<div className="resultPotato"></div>
			</div>
		</div>
	);
}

export default BattleResult;
