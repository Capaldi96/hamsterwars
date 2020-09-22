import React, { useState, useEffect, useRef } from 'react';
import '../scss/BattleResult.scss';
import BattleCard from './BattleCard'
import axios from 'axios';
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';

const BattleResult = () => {
	const [winnerId, setWinnerId] = useState(null);
	const [showResult, setShowResult] = useState(false);
	const [hamster1, setHamster1] = useState(null);
	const [hamster2, setHamster2] = useState(null)
	const [showCutestH1, setShowCutestH1] = useState(true);
	const [disableImg, setDisableImg] = useState(false);
	const [confetti, setConfetti] = useState(false);
	const { width, height } = useWindowSize();



	useEffect(() => {
		getMatch()
	}, []);
	async function getMatch() {
		let hamster1 = await axios.get('/api/randomHamster');
		let hamster2 = await axios.get('/api/randomHamster');
		if (hamster1 !== hamster2) {
			console.log("inte samma")
			setHamster1(hamster1.data[0]);
			setHamster2(hamster2.data[0]);
		} else {
			console.log("samma")
			getMatch()
		}
	}


	function updateWinner(hamster) {
		hamster.latestGame = new Date().toISOString().slice(0, 19).replace('T', '-');
		axios.put('/api/updateHamster/' + hamster._id, {
			name: hamster.name,
			age: hamster.age,
			favFood: hamster.favFood,
			loves: hamster.loves,
			imgName: hamster.imgName,
			defeats: hamster.defeats,
			wins: hamster.wins,
			latestBattle: hamster.latestGame,
			games: hamster.games,
			latestGame: hamster.latestGame
		})
	}
	function updateLooser(hamster) {
		hamster.latestGame = new Date().toISOString().slice(0, 19).replace('T', '-');
		hamster.games++;
		hamster.defeats++;
		axios.put('/api/updateHamster/' + hamster._id, {
			name: hamster.name,
			age: hamster.age,
			favFood: hamster.favFood,
			loves: hamster.loves,
			imgName: hamster.imgName,
			defeats: hamster.defeats,
			latestBattle: hamster.latestGame,
			wins: hamster.wins,
			games: hamster.games,
			latestGame: hamster.latestGame
		})
	}
	function setWinnerAndLooser() {
		if (hamster1._id === winnerId) {
			//winner
			setHamster1(prevState => ({
				...hamster1,
				games: prevState.games++,
				wins: prevState.wins++
			}));
			setHamster2(prevState => ({
				...hamster2,
				games: prevState.games++,
				defeats: prevState.defeats++
			}));
		} else if (hamster2._id === winnerId) {
			//winner
			setHamster2(hamster2 => ({
				...hamster2,
				games: hamster2.games++,
				wins: hamster2.wins++
			}));
			//Looser
			setHamster1(hamster1 => ({
				...hamster1,
				games: hamster1.games++,
				defeats: hamster1.defeats++
			}))
		}
		setShowResult(true)
	}

	useEffect(() => {
		if (winnerId)
			setWinnerAndLooser()
	}, [winnerId])

	useEffect(() => {
		if (winnerId) {
			if (hamster1._id === winnerId) {
				updateWinner(hamster1)
				updateLooser(hamster2)
			} else if (hamster2._id === winnerId) {
				updateWinner(hamster2)
				updateLooser(hamster1)
			}
		}
	}, [hamster1, hamster2])

	let winnerData;
	if (hamster1 !== null && hamster2 !== null) {
		if (winnerId === hamster1._id) {
			winnerData =
				<div className="resultPotato">
					<div className="winnerData">
						<p className="winnerData-p">Winner is: 		<strong>{hamster1.name}</strong></p>
						<p className="winnerData-p">Current rank:  	<strong>{hamster1.rank}</strong></p>
						<p className="winnerData-p">Total games:   	<strong>{hamster1.games}</strong></p>
						<button className="nextBattleBtn" onClick={nextBattleBtn}>Next Battle</button>
					</div>
				</div>

		} else if (winnerId === hamster2._id) {
			winnerData =
				<div className="resultPotato">
					<div className="winnerData">
						<p className="winnerData-p">Winner is: 		<strong>{hamster2.name}</strong></p>
						<p className="winnerData-p">Current rank:  	<strong>{hamster2.rank}</strong></p>
						<p className="winnerData-p">Total games:   	<strong>{hamster2.games}</strong></p>
						<button className="nextBattleBtn" onClick={nextBattleBtn}>Next Battle</button>
					</div>
				</div>
		}
	}
	function nextBattleBtn() {
		window.location.reload(false);
	}

	return (
		<>
			{hamster1 && hamster2 ?
				<div id="battleResult">
					{confetti ? <Confetti width={width} height={height} numberOfPieces={600} recycle={false} gravity={0.075} /> : null}
					<div className="container">
						{showCutestH1 ? <h1 className="battle-h1">Click on the cutest</h1> : null}
						<div className="match-container">
							<BattleCard setConfetti={setConfetti} setDisableImg={setDisableImg} disableImg={disableImg} setWinnerId={setWinnerId} setShowCutestH1={setShowCutestH1} hamster={hamster1} />
							<img className="VS" alt="vs" src={require('../../assets/vs.png')}></img>
							<BattleCard setConfetti={setConfetti} setDisableImg={setDisableImg} disableImg={disableImg} setWinnerId={setWinnerId} setShowCutestH1={setShowCutestH1} hamster={hamster2} />

						</div>
						{showResult ? winnerData : null}
					</div>
				</div>
				: null}
		</>

	);
}

export default BattleResult;
