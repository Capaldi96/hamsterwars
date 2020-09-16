import React, { useState, useEffect } from 'react';
import '../scss/BattleResult.scss';
import BattleCard from './BattleCard'
import axios from 'axios';





const BattleResult = () => {
	const [winner, setWinner] = useState(null);
	const [hamster1, setHamster1] = useState({});
	const [hamster2, setHamster2] = useState({})
	const [showCutestH1, setShowCutestH1] = useState(true);

	useEffect(()=>{
		getMatch()
	},[]);
	async function getMatch(){
		let response = await axios.get('/api/Battle');
		let data = response.data;
		setHamster1(data[0]);
		setHamster2(data[1]);
	}
	useEffect(()=>{
		console.log(hamster1)
		console.log(hamster2)
		if(hamster1 == winner){
			
			hamster1.games++;
			hamster1.wins++;
			setHamster1(hamster1)

		}else if(hamster2 == winner){
			hamster2.games++;
			hamster2.wins++;
			setHamster2(hamster2)
		}
	});
	
	return (
		<div id="battleResult">
			<div className="container">
			{ showCutestH1 ? <h1>Click on the cutest</h1> : null }
				<div className="match-container">
                    <BattleCard setWinner={setWinner} setShowCutestH1={setShowCutestH1}hamster={hamster1} />
					<img className="VS" src={require('../../assets/vs.png')}></img>
					<BattleCard setWinner={setWinner} setShowCutestH1={setShowCutestH1} hamster={hamster2}/>
				</div>
				{ winner ? <div className="resultPotato">
						<div className="winnerData">
						<p className="winnerData-p">Winner is: 		<strong>{winner.name}</strong></p>
						<p className="winnerData-p">Wins:  			<strong>{winner.wins}</strong></p>
						<p className="winnerData-p">Total games:   	<strong>{winner.games}</strong></p>
						<button className="nextBattleBtn">Next Battle</button>
						</div>
					</div>: null }
			</div>
		</div>
    );
}

export default BattleResult;
