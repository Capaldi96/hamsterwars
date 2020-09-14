import React, { useState } from 'react';
import '../scss/BattleResult.scss';
import BattleCard from './BattleCard'




const BattleResult = () => {
	const [winnerData, setWinnerData] = useState(null);
	let hamster1 = {
		name: "kalle",
		year: 1
	}
	let hamster2 = {
		name: "Pelle",
		year: 2
	}
	return (
		<div id="battleResult">
			<div className="container">
				<h1>Click on the cutest</h1>
				<div className="match-container">
                    <BattleCard setWinnerData={setWinnerData} hamster={hamster1} />
					<img className="VS" src={require('../../assets/vs.png')}></img>
					<BattleCard setWinnerData={setWinnerData} hamster={hamster2}/>
				</div>
				{ winnerData ? <div className="resultPotato"></div>: null }
			</div>
		</div>
    );

}

export default BattleResult;
