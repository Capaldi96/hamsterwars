import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../scss/Statistics.scss';



const StatisticsInfo = ({winners, loosers})=> {
const [top5Winners, setTop5Winners] = useState([]);
const [top5Loosers, setTop5Loosers] = useState([]);
const [sumAge, setSumAge] = useState([]);


	useEffect(() => {
		axios.get('/api/TopWinners')
		.then(res => {
			console.log(res)
			setTop5Winners(res.data)
		})
		.catch(err => {
			console.log(err)
		})
	}, [])

		useEffect(() => {
		axios.get('/api/TopLoosers')
		.then(res => {
			console.log(res)
			setTop5Loosers(res.data)
		})
		.catch(err => {
			console.log(err)
		})
	},[])

		return (
		<div>
		

{top5Winners.map(winners => (
	<li key={winners.name}>{winners.name}</li>
))}

{top5Loosers.map(loosers => (
	<li key={loosers.name}>{loosers.name}</li>
))}


	
		</div>
	)
}

export default StatisticsInfo;