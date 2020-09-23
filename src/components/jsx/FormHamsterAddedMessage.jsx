import React from "react";
import '../scss/Form.scss'



const FormHamsterAddedMessage=(props)=>{


	return(

		<div className='hamsterAddedMsg'>
			<p>Hamster added!</p>
			<button onClick={()=>props.setDisplayForm(true)}>Ok, thanks!</button>


		</div>

	)





}

export default FormHamsterAddedMessage