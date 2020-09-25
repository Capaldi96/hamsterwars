
import React ,{useState} from 'react'
import '../scss/Form.scss'
import FormInput from './FormInput';
import FormHamsterAddedMessage from './FormHamsterAddedMessage'


const Form=()=>{

	const [displayForm, setDisplayForm]=useState(true)
	
	// let comp=''

	// if(displayForm){
	// 	comp=<FormInput displayForm={displayForm} setDisplayForm={setDisplayForm}/>
	// }
	// else{
	// 	comp=<FormHamsterAddedMessage setDisplayForm={setDisplayForm}/>
	// }


	return (

		<div className='form-component'>
			{displayForm ? 
			(<FormInput displayForm={displayForm} setDisplayForm={setDisplayForm}/>) 
			: 
			(<FormHamsterAddedMessage setDisplayForm={setDisplayForm}/>)}
			{/* {comp} */}

		</div>
		
	)
}



export default Form