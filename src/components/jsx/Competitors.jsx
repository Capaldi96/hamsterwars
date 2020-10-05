import React, { useState} from 'react'
import Gallery from './Gallery';
import '../scss/Competitors.scss';

const Competitors = (props) => {

	const [showText, setShowText] = useState(true) 
	const [competitorsList, setCompetitorsList] = useState([])
	const [disableButton, setDisableButton] = useState(true);
	
	const goToBattle = () => {
		props.setChosenHamsters(competitorsList) 
		props.setToCompetitorsComp(false)
	}	
	const backButton = (e) => {
		e.preventDefault()
		props.setToCompetitorsComp(true)
	}

	return (
		<div className="Competitors">
			{showText ? <div className="container-competitors"><h2>Choose two hamsters.</h2></div> : <div className="container-competitors"><h2>Thank you! Click on button to continue.</h2><button className='go-to-battle-button' onClick={goToBattle} disabled={disableButton}>Go to battle</button></div>}	

			<a href="/Battle" onClick={(e) => backButton} className="back-to-battle">←</a>		
		
			<Gallery chosenHamsters={props.chosenHamsters} setChosenHamsters={props.setChosenHamsters} toCompetitorsComp={props.toCompetitorsComp} competitorsList={competitorsList} setCompetitorsList={setCompetitorsList} setShowText={setShowText} disableButton={disableButton} setDisableButton={setDisableButton}/>
		</div>
	)
}
export default Competitors;