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

	const [nameSubmitMessage, setNameSubmitMessage]=useState(false)
	const [ageSubmitMessage, setAgeSubmitMessage]=useState(false)
	const [favFoodSubmitMessage, setFavFoodSubmitMessage]=useState(false)
	const [lovesSubmitMessage, setLovesSubmitMessage]=useState(false)
	const [imageFileSubmitMessage, setImageFileSubmitMessage]=useState(false)
	
	const addNewHamster=()=>{
		
		if (isValidName && isValidAge && isValidFavFood && isValidLoves && isValidImageFile){
			console.log('allt är valid och true, dags att posta hamster')
			// addHamster();
			// addHamsterImage();
			
		}
		else{
			console.log('inte ok, post ej')
		
			if(!isValidName) setNameSubmitMessage(true)
			if(!isValidAge) setAgeSubmitMessage(true)
			if(!isValidFavFood) setFavFoodSubmitMessage(true)
			if(!isValidLoves) setLovesSubmitMessage(true)
			if(!isValidImageFile) setImageFileSubmitMessage(true)

		}
	}

	const inputName=(e)=>{
		setName(e.target.value)
	 
	}
	const inputAge=(e)=>{
		setAge(e.target.value)
	}
	const inputFavFood=(e)=>{
		setFavFood(e.target.value)
	}
	const inputLoves=(e)=>{
		setLoves(e.target.value)
	}

	const onChangeSaveFile=(e)=>{
		setimageFile(e.target.files[0])
		setImageLabelText('New image ready to upload')
	}

	let nameInvalidMessage=''
	let ageInvalidMessage=''
	let favFoodInvalidMessage=''
	let lovesInvalidMessage=''
	let imageFileInvalidMessage=''
	const validateName=()=>{
	
		if(name.length<1){ nameInvalidMessage='Oops, forgot the name!'; return false; }
		if(name.length>10) return false
		return true;
	}
	const validateAge=()=>{
		//visas om touched och mindre än 1
		if(age.length<1){ ageInvalidMessage='Dont forget the age'; return false; }
		//return false om age är längre än 5, meddelande styrs i jsx:en
		if(age.length>5) return false 
		return true;
	}
	const validateFavFood=()=>{
		
		if(favFood.length<1){ favFoodInvalidMessage='Hungry hamster need snack'; return false; }
		if(favFood.length>10) return false 
		return true;
	}
	const validateLoves=()=>{
		
		if(loves.length<1){ lovesInvalidMessage='Some love here plz'; return false; }
		if(loves.length>15) return false 
		return true;
	}
	const validateImageFile=()=>{
		
		// if(!imageFile){ imageFileInvalidMessage='Need an image 😘'; return false}

		if(!imageFile){

			console.log('imagefile: ', imageFile)
			imageFileInvalidMessage='Need an image 😘'

			return false;

		}
		return true;
		
	}

	let isValidName=validateName()
	let isValidAge=validateAge()
	let isValidFavFood=validateFavFood()
	let isValidLoves=validateLoves()
	let isValidImageFile=validateImageFile()
	console.log('isValidiMagefile är: ', isValidImageFile)

	// om touched alltså true  och name mindre än noll alltså true=invalid
	const nameClassName= nameIsTouched && !isValidName ? 'form-control invalid' : 'form-control'
	const ageClassName= ageIsTouched && !isValidAge ? 'form-control invalid' : 'form-control'
	const favFoodClassName= favFoodIsTouched && !isValidFavFood ? 'form-control invalid' : 'form-control'
	const lovesClassName= lovesIsTouched && !isValidLoves ? 'form-control invalid' : 'form-control'
	const imageFileClassName= imageFileIsTouched  ? 'imageFile-label invalid' : 'imageFile-label'
	console.log('imagefile is touched: ', imageFileIsTouched)


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
						{nameIsTouched && !isValidName || nameSubmitMessage ? <span>{nameInvalidMessage}</span> : <span></span>}
						{name.length>10 ? <span>Hey! Max 10 characters please</span> : <span></span>}
						
						</div>
					</div>

					{/* Age */}
					<div className='form-group'>
						<input type='number' 
						id='age'
						name='age'
						className={ageClassName}
						value={age}
						placeholder='age placeholder'
						onBlur={()=>setAgeIsTouched(true)}
						// onChange={event=>setAge(event.target.value)}/>
						onChange={event=>inputAge(event)}/>
						<label htmlFor="age" className='form-label'>Age in months</label>
						<div className="error-message">
						{ageIsTouched && !isValidAge || ageSubmitMessage ? <span>{ageInvalidMessage}</span> : <span></span>}
						{age.length>5 ? <span>Hey! Max 5 characters please</span> : <span></span>}
						
					
						</div>
					</div>
				
				

					{/* favFood */}
					<div className='form-group'>
						<input type='text'
						id='favFood'
						name='favFood'
						className={favFoodClassName} 
						value={favFood}
						placeholder='food placeholder'
						onBlur={()=>setFavFoodIsTouched(true)}
						// onChange={event=>setFavFood(event.target.value)}/>
						onChange={event=>inputFavFood(event)}/>
						<label htmlFor="favFood" className='form-label'>Favorite food</label>
						<div className="error-message">
							{favFoodIsTouched && !isValidFavFood|| favFoodSubmitMessage ? <span>{favFoodInvalidMessage}</span> : <span></span>}
							{favFood.length>10 ? <span>Hey! Max 10 characters please</span> : <span></span>}
							
						</div>
					</div>
					
					
					{/* Loves */}
					<div className='form-group'>
						<input type='text'
						className={lovesClassName}
						id='loves'
						name='loves' 
						value={loves}
						placeholder='love placeholder'
						onBlur={()=>setLovesIsTouched(true)}
						// onChange={event=>setLoves(event.target.value)}/>
						onChange={event=>inputLoves(event)}/>
						<label htmlFor="loves" className='form-label'>Loves</label>
						<div className="error-message">
							{lovesIsTouched && !isValidLoves || lovesSubmitMessage ? <span>{lovesInvalidMessage}</span> : <span></span>}
							{loves.length>15 ? <span>Hey! Max 15 characters please</span> : <span></span>}
						
						</div>
					</div>

					{/* Image */}
					<div className='form-group'>
						
						<label htmlFor="imageFile" onBlur={()=>setImageFileIsTouched(true)} className={imageFileClassName}>{imageLabelText}
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
							{imageFileIsTouched && !isValidImageFile || imageFileSubmitMessage ? <span>{imageFileInvalidMessage}</span> : <span></span>}
							
						</div>
					</div>
				
				</form>
					
				{loading ? <p className='loading-text'>Loading...</p> : <button onClick={addNewHamster}>Add hamster</button>}
				
			
		
			</div>
	)


}

export default FormInput