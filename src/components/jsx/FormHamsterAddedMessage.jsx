import React from "react";
import '../scss/Form.scss';


const FormHamsterAddedMessage=(props)=>{


	return(

		<div className='hamsterAddedMsg'>

		<div className='addedMsg-wrapper'>

			<p className='hamstertext'>Hamster added!</p>
			<button onClick={()=>props.setDisplayForm(true)}>Ok, thanks!</button>

		</div>
			


		</div>

	)





}

export default FormHamsterAddedMessage