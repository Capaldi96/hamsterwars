import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'

const GetTopLoosers = ()=> {

const [top5Loosers, setTop5Loosers] = useState([]);

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
{top5Loosers.map(loosers => (
	<li key={loosers.name}>{loosers.name}</li>
))}

		</div>
	)
}

export default GetTopLoosers;