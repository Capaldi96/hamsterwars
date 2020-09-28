import React, {useRef, useState} from 'react'
import Gallery from './Gallery';
import '../scss/Competitors.scss';

const Competitors = (props) => {
	// TO DO scroll to top 
	const windowCompetitors = useRef()
	const [showText, setShowText] = useState(true) 
	let competitorsList = [];

	const goToBattle = () => {
		props.setChosenHamsters(competitorsList)
	}
	

	return (
		<div className="Competitors" ref={windowCompetitors}>
			<div className="container-competitors">	
				{showText ? <div><h2>Choose your hamsters.</h2></div> : <div><h2>You have choosen hamster2 and hamster1 to battle.</h2><button className='go-to-battle-button' onClick={goToBattle}>Go to battle</button></div>}
			</div>
			
			<Gallery chosenHamsters={props.chosenHamsters} setChosenHamsters={props.setChosenHamsters} toCompetitorsComp={props.toCompetitorsComp} competitorsList={competitorsList} setShowText={setShowText}/>
		</div>
	)
}
export default Competitors;