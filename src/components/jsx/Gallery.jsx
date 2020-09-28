import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ScrollTopArrow from './ScrollTopArrow'
import '../scss/Gallery.scss';


const Gallery = (props) => {
	
	const [hamsterList, setHamsterList] = useState([]);
	const [showScroll, setShowScroll] = useState(true) // ändra till false
	const windowGallery = useRef()

	useEffect(() => {
		getHamsters();

		console.log('gallery.current', windowGallery.current)
		console.log('showScroll utanför', showScroll)

		windowGallery.current.addEventListener('scroll', checkScrollTop);
	  }, [])
	  
	
	
	// Back to top
	const scrollTop = () =>{
		console.log('scrollTop click')
		windowGallery.current.scrollTo({top: 0, behavior: 'smooth'});
	};

	const checkScrollTop = () => {
		console.log('checkScrollTop')
		console.log('showScroll utanför if sats', showScroll)
	
		if (!showScroll && windowGallery.current.pageYOffset > 200){
			console.log('checkScrollTop if')
		  	setShowScroll(true)
		  console.log('showScroll utanför i if sats', showScroll)
		} else if (showScroll && windowGallery.current.pageYOffset <= 200){
		  	setShowScroll(false)
		  	console.log('showScroll else if', showScroll)
		}
	  };

	// getHamsters
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

	// deleteHamster
	async function deleteHamster(id){
		const response = await axios.delete('/api/deleteHamster/' + id);
		console.log('response', response)
		console.log(response)
		getHamsters();
	}
	let classIcon=''
	//TODO Här är jag==================================
	if(props.toCompetitorsComp){
		console.log('tocomp är true')
		classIcon='card-cursor'
	}
	else{
		console.log('tocomp är false')		
	}

	const [competitorBackground, setCompetitorBackground] = useState('')
	const addCompetitors=(id)=>{
		if(props.toCompetitorsComp){
			console.log('hamster id', id)
			setCompetitorBackground('competitorBackground')
		}
	}
	// To do
	// ändra färg på BARA de man klickar på
	// begränsa att man bara kan klicka på två hamstrar (lista)
	// Toggle
	// sätta de klickade hamstrarna i state variablarna chosenHamster..

	let status = null;
	if (!hamsterList.length) {
		status = <div className="loading"><h2>Loading...</h2></div>;
	} 
	else {
		status = 
			<div className="container-list" >
				{hamsterList.map(hamster => (
				<div key={hamster._id} className={`list ${classIcon} ${competitorBackground}`} onClick={() => addCompetitors(hamster._id)}>
					<img src={hamster.imgName} alt="Hamster" className="hamster-image"/>
					{!props.toCompetitorsComp ? (<button onClick={() => deleteHamster(hamster._id)}>X</button>) : (	<img alt='hand-icon' className='hand-icon' src='https://www.flaticon.com/svg/static/icons/svg/1612/1612636.svg'></img>)}
				
				
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
		<div className="Gallery" ref={windowGallery} onScroll={() => console.log('Scroll i gallery')}>
			<main>
				<div>{status}</div>
				{<ScrollTopArrow scrollTop={scrollTop} showScroll={showScroll}/>}
			</main>
		</div>
	)
}
export default Gallery;
