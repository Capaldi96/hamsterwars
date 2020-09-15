import React, { useState } from 'react';
import '../scss/BattleResult.scss';
import BattleCard from './BattleCard'




const BattleResult = () => {
	const [winnerData, setWinnerData] = useState(null);
	const [showCutestH1, setShowCutestH1] = useState(true);



	let hamster1 = {
		name: "kalle",
		year: 1
	}
	let hamster2 = {
		name: "Pelle",
		year: 2
	}
	let winner = {
		name: "Miffo",
		games: 21,
		losses: 2,
		rank: 3
	}
	return (
		<div id="battleResult">
			<div className="container">
			{ showCutestH1 ? <h1>Click on the cutest</h1> : null }
				<div className="match-container">
                    <BattleCard setWinnerData={setWinnerData} setShowCutestH1={setShowCutestH1}  hamster={hamster1} />
					<img className="VS" src={require('../../assets/vs.png')}></img>
					<BattleCard setWinnerData={setWinnerData} setShowCutestH1={setShowCutestH1}  hamster={hamster2} />
				</div>
				{ winnerData ? <div className="resultPotato">
					
					<div className="winnerData">
						<p className="winnerData-p">Winner is: 		<strong>{winner.name}</strong></p>
						<p className="winnerData-p">Current rank:  	<strong>{winner.rank}</strong></p>
						<p className="winnerData-p">Total games:   	<strong>{winner.games}</strong></p>
						<button className="nextBattleBtn">Next Battle</button>
						</div>
					</div>: null }
			</div>
		</div>
    );

}

export default BattleResult;
