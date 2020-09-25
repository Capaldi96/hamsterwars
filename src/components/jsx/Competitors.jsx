import React from 'react'
import Gallery from './Gallery';
import '../scss/Competitors.scss';

export const Competitors = (props) => {

	return (
		<div className="Competitors">
			<h2>Choose your hamsters.</h2>
			<h2>You have choosen {props.hamster1} and {props.hamster2} to battle.</h2>
			<button>Go to battle</button>
			<Gallery/>
		</div>
	)
}
export default Competitors;