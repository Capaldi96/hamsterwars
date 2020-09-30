import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ScrollTopArrow from './ScrollTopArrow'
import '../scss/Gallery.scss';

const Gallery = (props) => {

	const [hamsterList, setHamsterList] = useState([]);
	const [showScroll, setShowScroll] = useState(true)
	const windowGallery = useRef()

	useEffect(() => {
		getHamsters();
		
		windowGallery.current.addEventListener('scroll', checkScrollTop);
	}, [])

	
	// Back to top
	const scrollTop = () => {
		
		windowGallery.current.scrollTo({ top: 0, behavior: 'smooth' });
	};
	
	const checkScrollTop = () => {

		if (!showScroll && windowGallery.current.pageYOffset > 200) {
			setShowScroll(true)
		} else if (showScroll && windowGallery.current.pageYOffset <= 200) {
			setShowScroll(false)
		}
	};
	// getHamsters
	async function getHamsters() {
		await axios.get('/api/gallery')
			.then(res => {
				
				setHamsterList(res.data)
			})
			.catch(err => {
				console.log('Something went wrong', err)
			})
	}
	// deleteHamster
	async function deleteHamster(id) {
		const response = await axios.delete('/api/deleteHamster/' + id);
		getHamsters();
	}

	//Ändra pointern på korten beroende på om Gallery eller Competitors visas
	let classIcon = ''
	if (props.toCompetitorsComp) {
		classIcon = 'card-cursor'
	}

	//Lägger till competitors i lista med ett klick
	const handleCompetitors = (hamster) => {

		//om den här är false ska GALLERY renderas
		if (!props.toCompetitorsComp) {
			return
		}
		
		props.setShowText(true)
		//vid klick på kort, jämför kort med hamster i competitorlist (letar efter en dublett)
		if (props.competitorsList.find(hamster2 => hamster2._id === hamster._id)) {

			//skapa en ny lista med alla utom den klickade hamstern
			props.setCompetitorsList(props.competitorsList.filter(hamster2 => hamster2._id !== hamster._id))
			props.setDisableButton(true)
		}
		// lägger till ny hamster i listan om den inte är full (två hamstrar i listan)
		else if (props.competitorsList.length <= 1) {
			let array = [...props.competitorsList];
			array.push(hamster)
			props.setCompetitorsList(array)

			//låster upp knappen om listan är full (två hamstrar)
			if (array.length === 2) {
				props.setDisableButton(false)
				props.setShowText(false)
			}
		}
	}

	let status = null;
	let loadingText = null;
	let competitorBackground = '';

	if (!hamsterList.length) {
		loadingText = <div className="loading"><h2>Loading...</h2></div>;
	}
	//mappar ut hamstrar och kollar om de finns med i competitorlist och ändrar då färg på bakgrunden
	else {
		status = hamsterList.map(hamster => {
			if(props.toCompetitorsComp){
				if(props.competitorsList.length > 0){
					
					if(props.competitorsList.find(competitor=>competitor._id===hamster._id))
					{ 
						competitorBackground = 'competitorBackground'
					}
					else{
						competitorBackground = ''
					}
				}
			}

			return (
				<div key={hamster._id} className={`list ${classIcon} ${competitorBackground}`} onClick={() => handleCompetitors(hamster)}>
					<img src={hamster.imgName} alt="Hamster" className="hamster-image" />
					{!props.toCompetitorsComp ? /* (<button onClick={() => deleteHamster(hamster._id)}>X</button>) */ null : (<img alt='hand-icon' className='hand-icon' src='https://www.flaticon.com/svg/static/icons/svg/1612/1612636.svg'></img>)}

					<p ><span>{hamster.name}</span></p>
					<p>Years: {hamster.age}</p>
					<p>Games: {hamster.games}</p>
					<p>Favfood: {hamster.favFood}</p>
					<p>Loves: {hamster.loves}</p>
					<p>Wins: {hamster.wins}</p>
					<p>Losses: {hamster.defeats}</p>
				</div>

			)
		})//slut map

	}//slut else

	return (
		<div className="Gallery" ref={windowGallery} onScroll={() => console.log('Scroll i gallery')}>
			<main>
				<div>{loadingText}</div>
				<div>
					<div className="container-list">{status}</div>
				</div>

				{!props.toCompetitorsComp ? <ScrollTopArrow scrollTop={scrollTop} showScroll={showScroll}/> : null}
			</main>
		</div>
	)
}
export default Gallery;