import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ScrollTopArrow from './ScrollTopArrow'
import '../scss/Gallery.scss';


const Gallery = () => {

	const [hamsterList, setHamsterList] = useState([]);
	/* const [statusDelete, setStatusDelete] = useState(null); */
	const [showScroll, setShowScroll] = useState(true) // ändra till false
	const gallery = useRef()

	useEffect(() => {
		getHamsters();
		console.log('gallery.current', gallery.current)
		console.log('showScroll utanför', showScroll)

		window.addEventListener('scroll', checkScrollTop)
	  }, [])
	  
	

	const scrollTop = () =>{
		console.log('scrollTop click')
		gallery.current.scrollTo({top: 0, behavior: 'smooth'});
	};

	const checkScrollTop = () => {
		console.log('checkScrollTop')
		console.log('showScroll utanför if sats', showScroll)
		if (!showScroll && gallery.current.pageYOffset > 100){
			console.log('if window.pageYOffset', gallery.current.pageYOffset )
		  setShowScroll(true)
		} else if (showScroll && gallery.current.pageYOffset <= 100){
			console.log('showScroll else if', showScroll)
		  setShowScroll(false)
		}
	  };


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

	let status = null;
	if (!hamsterList.length) {
		status = <div className="loading"><h2>Loading...</h2></div>;
	} 
	else {
		status = 
			<div className="container-list">
				{hamsterList.map(hamster => (
				<div key={hamster._id} className="list">
					<img src={hamster.imgName} alt="Hamster" className="hamster-image"/>
					<button onClick={() => deleteHamster(hamster._id)}>X</button>
					<p ><span>{hamster.name}</span></p>
					<p>Years: {hamster.age}</p>
					<p>Games: {hamster.games}</p>
					<p>Favfood: {hamster.favFood}</p>
					<p>Loves: {hamster.loves}</p>
					<p>Wins: {hamster.wins}</p>
					<p>Losses: {hamster.defeats}</p>
				</div>))}
			</div>
	}
	
	

	return (
		<div className="Gallery" ref={gallery} onScroll={() => console.log('Scroll i gallery')}>
			<main>
				<div>{status}</div>
				{<ScrollTopArrow scrollTop={scrollTop} showScroll={showScroll}/>}
			</main>
		</div>
	)
}
export default Gallery;
