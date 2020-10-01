import React, { useState, useEffect } from 'react';
import '../scss/BattleResult.scss';
import BattleCard from './BattleCard'
import axios from 'axios';
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';
import Competitors from './Competitors';


const BattleResult = () => {
	const [winnerId, setWinnerId] = useState(null);
	const [showResult, setShowResult] = useState(false);
	const [hamster1, setHamster1] = useState(null);
	const [hamster2, setHamster2] = useState(null)
	const [allHamsters, setAllHamsters] = useState(null);
	const [showCutestH1, setShowCutestH1] = useState(true);
	const [disableImg, setDisableImg] = useState(false);
	const [confetti, setConfetti] = useState(false);
	const { width, height } = useWindowSize();
	const [loading, setLoading] = useState(true);
	const [toCompetitorsComp, setToCompetitorsComp] = useState(false);
	const [emptyDiv, setEmptyDiv] = useState('');
	let content = null;


	const setChosenHamsters = (chosenHamsters) => {
		setHamster1(chosenHamsters[0])
		setHamster2(chosenHamsters[1])
	}

	useEffect(() => {
		getAllHamsters()
	}, []);

	useEffect(() => {
		if (allHamsters !== null) {
			getBattle()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [allHamsters]);
	async function getAllHamsters() {
		try {
			let allHamsters = await axios.get('/api/getAllHamsters')
			if (allHamsters.data.length !== 0) {
				setAllHamsters(allHamsters.data.length);
			}
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	
	}
	async function getBattle() {
		if (allHamsters < 2) {
			setLoading(false)
			return;
		} else {
			let hamster1 = await axios.get('/api/fairBattle/' + allHamsters);
			let hamster2 = await axios.get('/api/fairBattle/' + allHamsters);
			if (hamster1.data[0]._id === hamster2.data[0]._id) {
				return getBattle();
			} else {
				setHamster1(hamster1.data[0]);
				setHamster2(hamster2.data[0]);
			}
		}
		setLoading(false)
	}
	function nextBattle() {
		setLoading(true);
		setConfetti(false)
		setAllHamsters(null)
		setHamster1(null)
		setHamster2(null)
		setDisableImg(false);
		setShowResult(false);
		setShowCutestH1(true);
		setWinnerId(null);
		getAllHamsters();
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
		if (winnerId) {
			setWinnerAndLooser()
			setEmptyDiv('divMargin');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hamster1, hamster2])

	let winnerData;
	if (hamster1 !== null && hamster2 !== null) {
		if (winnerId === hamster1._id) {
			winnerData =
				<div className="resultPotato">
					<div className="winnerData">
						<p className="winnerData-p">Winner is: 		<strong>{hamster1.name}</strong></p>
						<p className="winnerData-p">Total games:   	<strong>{hamster1.games}</strong></p>
						<button className="battleBtn" onClick={nextBattle}>Next Battle</button>
					</div>
				</div>

		} else if (winnerId === hamster2._id) {
			winnerData =
				<div className="resultPotato">
					<div className="winnerData">
						<p className="winnerData-p">Winner is: 		<strong>{hamster2.name}</strong></p>
						<p className="winnerData-p">Total games:   	<strong>{hamster2.games}</strong></p>
						<button className="battleBtn" onClick={nextBattle}>Next Battle</button>
					</div>
				</div>
		}
	}
	function goToCompetitorsComp() {

		setToCompetitorsComp(true)
	}

	if (!toCompetitorsComp) {
		content =
			<>
				{hamster1 && hamster2 ?
					<div id="battleResult">
						{confetti ? <Confetti width={width} height={height} numberOfPieces={600} recycle={false} gravity={0.075} /> : null}
						<div className="container">
							<div className="textDiv">
								{showCutestH1 ? <h1 className="battle-h1">Click on the cutest</h1> : null}
								<p className="orange">Wanna choose your competitors? </p>
								<button className="battleBtn" onClick={goToCompetitorsComp}>Change hamsters</button>
							</div>
							<div className="match-container">
								<BattleCard setConfetti={setConfetti} setDisableImg={setDisableImg} disableImg={disableImg} setWinnerId={setWinnerId} setShowCutestH1={setShowCutestH1} hamster={hamster1} />
								{showCutestH1 ? <img className="VS" alt="vs" src={require('../../assets/vs.png')}></img> : <div className={emptyDiv}></div>}
								<BattleCard setConfetti={setConfetti} setDisableImg={setDisableImg} disableImg={disableImg} setWinnerId={setWinnerId} setShowCutestH1={setShowCutestH1} hamster={hamster2} />

							</div>
							{showResult ? winnerData : null}
						</div>
					</div>
					:
					<div id="battleResult">
						<div className="loading">
							<h2>Uhoh! No hamsters. Add one!</h2>
							<a href="/form" className="link-to">Go to form</a>
						</div>
					</div>}
			</>
	}
	else if (toCompetitorsComp) {
		content =
			<Competitors setChosenHamsters={setChosenHamsters} setToCompetitorsComp={setToCompetitorsComp} toCompetitorsComp={toCompetitorsComp} />

	}

	return (
		<>
			{loading ?
				<div id="battleResult">
					<div className="loading">
						<h2>Loading...</h2>
					</div>
				</div>
				: content}
		</>

	);
}

export default BattleResult;
