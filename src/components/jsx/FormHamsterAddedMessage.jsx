import React from "react";
import '../scss/Form.scss'



const FormHamsterAddedMessage=(props)=>{


	return(

		<div className='hamster-added-wrapper'>

			<img  className="hamster-dancing" src={require('../../assets/hamster_dancing.png')} alt="Hamster Icon"/>
			<p className='hamster-text'>Hamster added!</p>
			
			<button onClick={()=>props.setDisplayForm(true)}>Ok, thanks!</button>

		</div>

	)





}

export default FormHamsterAddedMessage