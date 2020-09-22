import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../scss/Gallery.scss';

const Gallery = () => {

	const [hamsterList, setHamsterList] = useState([]);
	const [message, setMessage] = useState('Delete');

	useEffect(() => {
		getHamsters();
	}, [])

	async function getHamsters(){
		await axios.get('/api/gallery')
		.then(res => {
			console.log('Hamsters', res.data);
			setHamsterList(res.data)
		})
		.catch(err => {
			console.log('Something went wrong', err)
		})
	}

	async function deleteHamster(id){
		const response = await axios.delete('/api/deleteHamster/' + id);
		console.log('response', response)
		console.log(response)
		getHamsters();
	}
	

	return (
		<div className="Gallery">
			<main>
				<div className="container-list">
					{hamsterList.map(hamster => (
					<div key={hamster._id} className="list">
						<button onClick={() => deleteHamster(hamster._id)}>{message}</button>
						<p ><span>{hamster.name}</span></p>
						<p>Years: {hamster.age}</p>
						<p>Games: {hamster.games}</p> 
						<p>Favfood: {hamster.favFood}</p> 
						<p>Loves: {hamster.loves}</p>
						<p>Wins: {hamster.wins}</p> 
						<p>Loses: {hamster.defeats}</p>
					</div>))}
				</div>
			</main>
		</div>
	)
}
export default Gallery;
