import React, { useState } from 'react';
import '../scss/BattleResult.scss';
import BattleCard from './BattleCard'
const BattleResult = () => {
	const [winnerData, setWinnerData] = useState(null);
	return (
		<div id="battleResult">
			<div className="container">
				<h1>Click on the cutest</h1>
				<div className="match-container">
                    <BattleCard setWinnerData={setWinnerData} />
					<img className="VS" src={require('../../assets/vs.png')}></img>
					<BattleCard setWinnerData={setWinnerData} />
				</div>
				{ winnerData ? <div className="resultPotato"></div>: null }
			</div>
		</div>
	);
}

export default BattleResult;
