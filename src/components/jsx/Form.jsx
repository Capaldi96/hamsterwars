
import React ,{useState} from 'react'
import '../scss/Form.scss'
import FormInput from './FormInput';
import FormHamsterAddedMessage from './FormHamsterAddedMessage'


const Form=()=>{

	const [displayForm, setDisplayForm]=useState(false)
	
	let comp=''

	if(displayForm){
		comp=<FormInput displayForm={displayForm} setDisplayForm={setDisplayForm}/>
	}
	else{
		comp=<FormHamsterAddedMessage setDisplayForm={setDisplayForm}/>
	}


	return (

		<div className='form-component'>

			{comp}

		</div>
		
	)
}



export default Form