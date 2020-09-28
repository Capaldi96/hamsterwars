import React, {useRef} from 'react'
import Gallery from './Gallery';
import '../scss/Competitors.scss';

const Competitors = (props) => {
	// TO DO scroll to top 
	const windowCompetitors = useRef()

	return (
		<div className="Competitors" ref={windowCompetitors}>
			<h2>Choose your hamsters.</h2>
			<h2>You have choosen {props.chosenHamster1} and {props.chosenHamster2} to battle.</h2>
			<button className='go-to-battle-button'>Go to battle</button>
			<Gallery chosenHamster1={props.chosenHamster1} chosenHamster2={props.chosenHamster2 } setChosenHamster1={props.setChosenHamster1} setChosenHamster2={props.setChosenHamster2} toCompetitorsComp={props.toCompetitorsComp}/>
		</div>
	)
}
export default Competitors;