import React, {useRef, useState} from 'react'
import Gallery from './Gallery';
import '../scss/Competitors.scss';

const Competitors = (props) => {

	const [showText, setShowText] = useState(true) 
	const [competitorsList, setCompetitorsList] = useState([])
	const [statusButton, setStatusButton] = useState(true);
	
	const goToBattle = () => {

		props.setChosenHamsters(competitorsList) 
		props.setToCompetitorsComp(false)
	
	}	

	return (
		<div className="Competitors">
				{showText ? <div className="container-competitors"><h2>Choose two hamsters.</h2></div> : <div className="container-competitors"><h2>Thank you! Click on button to continue.</h2><button className='go-to-battle-button' onClick={goToBattle} disabled={statusButton}>Go to battle</button></div>}
			
			<Gallery chosenHamsters={props.chosenHamsters} setChosenHamsters={props.setChosenHamsters} toCompetitorsComp={props.toCompetitorsComp} competitorsList={competitorsList} setCompetitorsList={setCompetitorsList} setShowText={setShowText} statusButton={statusButton} setStatusButton={setStatusButton}/>
		</div>
	)
}
export default Competitors;