import Axios from 'axios';
import React ,{useState} from 'react'
import '../scss/Form.scss'


const FormInput=(props)=>{

	const [name, setName]=useState('')
	const [age, setAge]=useState('')
	const [favFood, setFavFood]=useState('')
	const [loves, setLoves]=useState('')
	const [imageFile, setimageFile] = useState('');
	const [imageLabelText, setImageLabelText]=useState('Click to upload image')
	const [loading, setLoading]=useState(false)

	const onChangeSaveFile=(e)=>{
		setimageFile(e.target.files[0])
		setImageLabelText('New image ready to upload')
	}

	const addNewHamster=()=>{
		console.log('addnewhamster cklick')
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


	return (

		<div className='form-wrapper'>

				<p>Add your own hamster</p>
				<form className='form'>
				
					{/* Name */}
					<div className='form-group'>
						<input type='text'
						id="name"
						name='name'
						className='form-control'
						value={name}
						placeholder='name placeholder'
						onChange={event=>setName(event.target.value)}/>
						<label htmlFor="name" className='form-label'>Name</label>
						<div className="error-message">
						 {/* <span>*Oops, forgot the name!</span>
						 <span>*Hey! Max 10 characters</span> */}
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