
import React ,{useState} from 'react'
import '../scss/Form.scss'
import FormInput from './FormInput';
import FormHamsterAddedMessage from './FormHamsterAddedMessage'


const Form=()=>{

	const [displayForm, setDisplayForm]=useState(true)

	return (

		<div className='form-component'>
			{displayForm ? 
			(<FormInput displayForm={displayForm} setDisplayForm={setDisplayForm}/>) 
			: 
			(<FormHamsterAddedMessage setDisplayForm={setDisplayForm}/>)}
	

		</div>
		
	)
}



export default Form