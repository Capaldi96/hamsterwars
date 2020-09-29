import Axios from 'axios';
import React ,{useEffect, useState} from 'react'
import '../scss/Form.scss'


const FormInput=(props)=>{

	const [name, setName]=useState('')
	const [age, setAge]=useState('')
	const [favFood, setFavFood]=useState('')
	const [loves, setLoves]=useState('')
	const [imageFile, setimageFile] = useState('');
	const [imageLabelText, setImageLabelText]=useState('Click to upload image')
	const [loading, setLoading]=useState(false)

	const [nameIsTouched, setNameIsTouched]=useState(false)
	const [ageIsTouched, setAgeIsTouched]=useState(false)
	const [favFoodIsTouched, setFavFoodIsTouched]=useState(false)
	const [lovesIsTouched, setLovesIsTouched]=useState(false)
	const [imageFileIsTouched, setImageFileIsTouched]=useState(false)


	const onChangeSaveFile=(e)=>{
		setimageFile(e.target.files[0])
		setImageLabelText('New image ready to upload')
	}



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
		console.log('i addHamsterImage: ', formData)

		try {
			const response=await Axios.post('/api/addhamsterImage', formData,{
			headers:{
				'Content-Type':'multipart/form-data'	
			}
	
		})
		console.log('i addhamsterimage')
		console.log('response addhamsterimage: ', response)
		//? varför ser man inte dessa console logs?
			
		}//slut try
			catch ( error ){
			console.log('addHasterImage: Something went wrong when adding a new image')
		}//slut catch
			
	} //slut func
	
	async function addHamster(){
		setLoading(true)
	
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
			// const data = JSON.parse(text); 
			let dataHamster = JSON.parse(text); 
			console.log('response i inputfields: ', dataHamster)
			if(dataHamster.ops.length){
				setLoading(false)
				props.setDisplayForm(false)	
			}
		
		} catch (error) {
			console.log(' addhamster: something went wrong when adding hamster: ', error)
		}
	}



	
	const [showSubmitMessage, setShowSubmitMessage]=useState(false)

	const addNewHamster=()=>{
		
		if (isValidName && testValid){
			console.log('allt är valid och true, dags att posta hamster')
			
		}
		else{
			console.log('inte ok, post ej')
			console.log('showsubmittmesasge: ', showSubmitMessage)
			//TODO när setShowSubmitmessage (ändra namn på denna) blir true ska en ikon dyka upp under alla inputfält.
			setShowSubmitMessage(true);
		
			
			
		}
	}

	let testValid=true//ta bort denna, enbart för test. Se även rad 96. Ska ersättas av övriga variabler för alla inputfält
	
	const validateName=()=>{
		
		if(name.length<1){ invalidMessage='Oops, forgot the name!'; return false; }
		if(name.length>10){ invalidMessage='Hey! Max 10 characters'; return false }
		return true;
	
	}
	// useEffect()=()=>{
	// 	//ev lägga i use effectmen spelar ingen roll egentligen
	// }
	let isValidName=validateName(name)


	// om touched alltså true  och name mindre än noll alltså true=invalid
	const nameClassName= nameIsTouched && !isValidName ? 'form-control invalid' : 'form-control'
	//TODO Fixa dynamiskt klassnamn!!! Måste kunna lägga till för invalid när man klickar på sumbit
	//TODO flytta ut all mer avancerad kod från jsx
	const inputName=(e)=>{
		setName(e.target.value)
		if(showSubmitMessage===true){
			setShowSubmitMessage(false)
		} 
		
	}
	return (

		<div className='form-wrapper'>

				<p>Add your own hamster</p>
				<form className='form'>
				
					{/* Name */}
					<div className='form-group'>
						<input type='text'
						id="name"
						name='name'
						// className={ nameIsTouched && !isValidName ? 'form-control invalid' : 'form-control'}
						className={nameClassName}
						value={name}
						placeholder='name placeholder'
						onBlur={()=>setNameIsTouched(true)}
						onChange={event=>inputName(event)}/>
						{/* onChange={event=>setName(event.target.value)}/> */}
						<label htmlFor="name" className='form-label'>Name</label>
						<div className="error-message">
						{nameIsTouched && !isValidName ? <span>{invalidMessage}</span> : <span></span>}
						{!showSubmitMessage ? <span></span> : <span>☝️ Eyy!</span>}

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
						onBlur={()=>setAgeIsTouched(true)}
						onChange={event=>setAge(event.target.value)}/>
						<label htmlFor="age" className='form-label'>Age in months</label>
						<div className="error-message">
							{/* <span>*Dont forget the age</span>
							<span>*Whops! Max 10 characters</span>
							<span>*Min 1 character</span> */}
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
						onBlur={()=>setFavFoodIsTouched(true)}
						onChange={event=>setFavFood(event.target.value)}/>
						<label htmlFor="favFood" className='form-label'>Favorite food</label>
						<div className="error-message">
						{/* <span>*Fav food here please</span>
						 <span>*Max 10 characters please</span>
						 <span>*Min 2 character</span> */}
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
						onBlur={()=>setLovesIsTouched(true)}
						onChange={event=>setLoves(event.target.value)}/>
						<label htmlFor="loves" className='form-label'>Loves</label>
						<div className="error-message">
							 {/* <span>*Some love here plz</span>
							 <span>*Max 15 characters</span>
						 <span>*Min 2 character</span> */}
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
						onBlur={()=>setImageFileIsTouched(true)}
						onChange={onChangeSaveFile}/>
						</label>
						<div className="error-message">
					 		{/* <span>*Need an image 😘</span> */}
						</div>
					</div>
				
				</form>
					
				{loading ? <p className='loading-text'>Loading...</p> : 	<button onClick={addNewHamster}>Add hamster</button>}
				
			
		
			</div>
	)


}

export default FormInput