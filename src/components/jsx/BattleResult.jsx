import React, { useState, useEffect } from 'react';
import '../scss/BattleResult.scss';
import BattleCard from './BattleCard'
import axios from 'axios';


const BattleResult = () => {
	const [winner, setWinner] = useState(null);
	const [hamster1, setHamster1] = useState({});
	const [hamster2, setHamster2] = useState({})
	const [showCutestH1, setShowCutestH1] = useState(true);

	useEffect(() => {
		getMatch()
	}, []);
	async function getMatch() {
		let response = await axios.get('/api/Battle');
		let data = response.data;
		setHamster1(data[0]);
		setHamster2(data[1]);

	}
	function updateWinner(hamster) {
		hamster.latestGame = new Date().toISOString().slice(0, 19).replace('T', '-');
		axios.put('/api/updateHamster/' + hamster._id, {
			_id: hamster._id,
			name: hamster.name,
			age: hamster.age,
			favFood: hamster.favFood,
			loves: hamster.loves,
			imgName: hamster.imgName,
			defeats: hamster.defeats,
			wins: hamster.wins,
			games: hamster.games,
			latestGame: hamster.latestGame
		})
	}
	function updateLooser(hamster) {
		hamster.latestGame = new Date().toISOString().slice(0, 19).replace('T', '-');
		hamster.games++;
		hamster.defeats++;
		axios.put('/api/updateHamster/' + hamster._id, {
			_id: hamster._id,
			name: hamster.name,
			age: hamster.age,
			favFood: hamster.favFood,
			loves: hamster.loves,
			imgName: hamster.imgName,
			defeats: hamster.defeats,
			wins: hamster.wins,
			games: hamster.games,
			latestGame: hamster.latestGame
		})
	}
	useEffect(() => {
		if (winner !== null) {
			if (hamster1 === winner) {
				updateWinner(winner)
				updateLooser(hamster2)
			}
		} else if (hamster2 === winner) {
			updateWinner(winner);
			updateLooser(hamster1);
		}
	});

	function nextBattleBtn(){
		window.location.reload(false);
	}

	return (
		<div id="battleResult">
			<div className="container">
				{showCutestH1 ? <h1 className="battle-h1">Click on the cutest</h1> : null}
				<div className="match-container">
					<BattleCard setWinner={setWinner} setShowCutestH1={setShowCutestH1} hamster={hamster1} />
					<img className="VS" src={require('../../assets/vs.png')}></img>
					<BattleCard setWinner={setWinner} setShowCutestH1={setShowCutestH1} hamster={hamster2} />
				</div>
				{winner ? <div className="resultPotato">

					<div className="winnerData">
						<p className="winnerData-p">Winner is: 		<strong>{winner.name}</strong></p>
						<p className="winnerData-p">Wins:  			<strong>{winner.wins}</strong></p>
						<p className="winnerData-p">Total games:   	<strong>{winner.games}</strong></p>
						<button className="nextBattleBtn" onClick={nextBattleBtn}>Next Battle</button>
					</div>
				</div> : null}
			</div>
		</div>
	);

}

export default BattleResult;
