import React ,{useState} from 'react'
import '../scss/Form.scss'
import FormInputFields from './FormInputFields';
import FormHamsterAddedMessage from './FormHamsterAddedMessage'


const Form=()=>{

	
	const [displayForm, setDisplayForm]=useState(true)
	
	
	let comp=''

	if(displayForm){
		comp=<FormInputFields displayForm={displayForm} setDisplayForm={setDisplayForm}/>
	}
	else{
		comp=<FormHamsterAddedMessage setDisplayForm={setDisplayForm}/>
	}


	return (
		<div className='form-component'>
	
		
			{comp}


		</div>
)}



export default Form