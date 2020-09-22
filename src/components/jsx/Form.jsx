import Axios from 'axios';
// import { response } from 'express';
import React ,{useState} from 'react'
import { useForm } from "react-hook-form";
import '../scss/Form.scss'
// import FormHamsterAddedMessage from './FormHamsterAddedMessage'


const Form=()=>{

	const [name, setName]=useState('')
	const [age, setAge]=useState('')
	const [favFood, setFavFood]=useState('')
	const [loves, setLoves]=useState('')
	const [imageFile, setimageFile] = useState('');
	const [imageLabelText, setImageLabelText]=useState('Click to upload image')
	const [displayForm, setDisplayForm]=useState(false)
	

	const { register, handleSubmit, errors } = useForm();

 	const onChangeSaveFile=(e)=>{
	
		setimageFile(e.target.files[0])
		setImageLabelText('New image ready to upload')
	
	}
	const onSubmit = data => console.log(data);//TODO denna ska nog bort?

	let newHamster = {
		name:name,
		age:Number(age),
		favFood:favFood,
		loves:loves,
		imgName:imageFile.name,
		wins:0,
		defeats:0,
		games:0,
		latestGame: ''
	}

	async function addHamsterImage(){
		const formData=new FormData();
    	formData.append('file', imageFile)

		try {
			await Axios.post('/api/addhamsterImage', formData,{
			headers:{
				'Content-Type':'multipart/form-data'	
			}
		})
		
			
		}//slut try
			catch ( error ){
			console.log('addHasterImage: Something went wrong when adding a new image')
		}//slut catch
			
	} //slut func
	
	async function addHamster(){
	
		try {
			const response= await fetch('/api/addhamster', {
				headers:{
					'Accept':'application/json',
					'Content-Type':'application/json',
				},
				method:'POST',
				body:JSON.stringify(newHamster)
			});
	
			const text = await response.text();
			const data = JSON.parse(text); 
			console.log('response: ', data)
			// displayComp=()=>{
			// 	// if(response.status===200){
		
			// 	// 	displayContent=<FormHamsterAddedMessage/>
			// 	// }
			// 	if(displayForm){
		
			// 		displayContent=<FormHamsterAddedMessage/>
			// 	}
			// }

		} catch (error) {
			console.log(' addhamster: something went wrong when adding hamster')
		}

	}
	//*Ev gör global variabel för response så att fler funktioner kan använda sig av den.

	const addNewHamster = () => {
		addHamster();
		addHamsterImage();
		
	}
	
	

	return (
		<div className='form-component'>
		
			{/* {displayContent} */}
			
			<div className='form-wrapper'>

				<p>Add your own hamster</p>
				<form className='form' onSubmit={handleSubmit(onSubmit)}>
					{/* Name */}
					<div className='form-group'>
						<input type='text'
						id="name"
						name='name'
						className='form-control'
						value={name}
						placeholder='name placeholder'
						ref={register({ required: true, maxLength:10 })}
						onChange={event=>setName(event.target.value)}/>
						<label htmlFor="name" className='form-label'>Name</label>
						<div className="error-message">
							{errors.name && errors.name.type==='required' && <span>Oops, forgot the name!</span>}
							{errors.name && errors.name.type==='maxLength' && <span>Hey! Max 10 characters</span>}
						</div>
					</div>

					{/* Age */}
					<div className='form-group'>
						<input type='number' 
						id='age'
						name='age'
						className='form-control'
						value={age}
						placeholder='age placeholder'
						ref={register({ required: true, maxLength:10, minLength:1 })}
						onChange={event=>setAge(event.target.value)}/>
						<label htmlFor="age" className='form-label'>Age in months</label>
						<div className="error-message">
							{errors.age && errors.age.type==='required' && <span>Dont forget the age.</span>}
							{errors.age && errors.age.type==='maxLength' && <span>Whops! Max 10 characters</span>}
							{errors.age && errors.age.type==='minLength' && <span>Min 1 character</span>}
						</div>
					</div>
				
				

					{/* favFood */}
					<div className='form-group'>
						<input type='text'
						id='favFood'
						name='favFood'
						className='form-control' 
						value={favFood}
						placeholder='food placeholder'
						ref={register({ required: true, maxLength:10, minLength:2 })}
						onChange={event=>setFavFood(event.target.value)}/>
						<label htmlFor="favFood" className='form-label'>Favorite food</label>
						<div className="error-message">
							{errors.favFood && errors.favFood.type==='required' && <span>Fav food here please.</span>}
							{errors.favFood && errors.favFood.type==='maxLength' && <span>Max 10 characters please</span>}
							{errors.favFood && errors.favFood.type==='minLength' && <span>Min 2 character</span>}
						</div>
					</div>
					
					

					{/* Loves */}
					<div className='form-group'>
						<input type='text'
						className='form-control'
						id='loves'
						name='loves' 
						value={loves}
						placeholder='love placeholder'
						ref={register({ required: true, maxLength:15, minLength:2 })}
						onChange={event=>setLoves(event.target.value)}/>
						<label htmlFor="loves" className='form-label'>Loves</label>
						<div className="error-message">
							{errors.loves && errors.loves.type==='required' && <span>Some love here plz.</span>}
							{errors.loves && errors.loves.type==='maxLength' && <span>Max 15 characters</span>}
							{errors.loves && errors.loves.type==='minLength' && <span>Min 2 character</span>}
						</div>
					</div>

					{/* Image */}
					<div className='form-group'>
						
						<label htmlFor="imageFile" className='imageFile-label'>{imageLabelText}
						<input type='file'
						// className='form-control'
						id='imageFile'
						name='imageFile'
						// value={imageFile}
						placeholder='imageFile placeholder'
						ref={register({ required: true })}
						onChange={onChangeSaveFile}/>
						</label>
						<div className="error-message">
							{errors.imageFile && errors.imageFile.type==='required' && <span>Need an image :*</span>}
						</div>
					</div>
					<input type="submit" /> 
				</form>
				<button onClick={addNewHamster}>Add hamster</button>
				
		
			</div>
	

		</div>
)
}



export default Form