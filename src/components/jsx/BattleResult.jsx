import React, { useState, useEffect } from 'react';
import '../scss/BattleResult.scss';
import BattleCard from './BattleCard'
import axios from 'axios';





const BattleResult = () => {
	const [winnerData, setWinnerData] = useState(null);
	const [hamster1, setHamster1] = useState({});
	const [hamster2, setHamster2] = useState({})
	
	useEffect(()=>{
		getMatch()
	},[]);
	async function getMatch(){
		let response = await axios.get('/api/Battle');
		let data = response.data;
		setHamster1(data[0]);
		setHamster2(data[1]);
		
	}
	console.log(hamster1)
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
