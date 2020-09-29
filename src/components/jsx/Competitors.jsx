import React, {useRef, useState} from 'react'
import Gallery from './Gallery';
import '../scss/Competitors.scss';

const Competitors = (props) => {
	// TO DO scroll to top 
	const windowCompetitors = useRef()
	const [showText, setShowText] = useState(true) 
	const [competitorsList, setCompetitorsList] = useState([])
	const [statusButton, setStatusButton] = useState(true);

	const goToBattle = () => {
		console.log('goToBattle click')
		console.log('i competitorcomp, competitorlist: ', competitorsList)
		
		props.setChosenHamsters(competitorsList) 
	}
	

	return (
		<div className="Competitors" ref={windowCompetitors}>
			<div className="container-competitors">	
				{showText ? <div><h2>Choose your hamsters.</h2></div> : <div><h2>You have choosen hamster2 and hamster1 to battle.</h2><button className='go-to-battle-button' onClick={goToBattle} disabled={statusButton}>Go to battle</button></div>}
			</div>
			
			<Gallery chosenHamsters={props.chosenHamsters} setChosenHamsters={props.setChosenHamsters} toCompetitorsComp={props.toCompetitorsComp} competitorsList={competitorsList} setCompetitorsList={setCompetitorsList} setShowText={setShowText} statusButton={statusButton} setStatusButton={setStatusButton}/>
		</div>
	)
}
export default Competitors;