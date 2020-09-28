import Axios from 'axios';
import { useForm } from "react-hook-form";
import React, { useState } from 'react'
import '../scss/Form.scss'


const FormInput = (props) => {

	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [favFood, setFavFood] = useState('')
	const [loves, setLoves] = useState('')
	const [imageFile, setImageFile] = useState('');
	const [imageLabelText, setImageLabelText] = useState('Click to upload image')
	const { register, errors, handleSubmit } = useForm({ mode: 'onTouched' });
	const [loading, setLoading] = useState(false)

	const onChangeSaveFile = (e) => {
		setImageFile(e.target.files[0])
		setImageLabelText('New image ready to upload')
	}


	const onSubmit = () => {
		const reader = new FileReader()
		reader.readAsDataURL(imageFile);
		reader.onloadend = () => {
			uploadImage(reader.result)
		}
	}
	const uploadImage = async (base64Encoded) => {
		try {
			let response = await fetch('api/uploadImage', {
				method: 'POST',
				body: JSON.stringify({ data: base64Encoded }),
				headers: { 'Content-type': 'application/json' }
			})
			let data = await response.json()
			let newHamster = {
				name: name,
				age: Number(age),
				favFood: favFood,
				loves: loves,
				imgName: 'https://res.cloudinary.com/deusclkek/image/upload/v1601296218/' + data.id,
				wins: 0,
				defeats: 0,
				games: 0,
				latestGame: ''
			}
			addHamster(newHamster)
		} catch (error) {
			console.log(error)
		}
	}
	// gamla add hmasterimage functionen
	// async function addHamsterImage() {
	// 	const formData = new FormData();
	// 	formData.append('file', imageFile)
	// 	try {
	// 		const response = await Axios.post('/api/uploadImage', formData, {
	// 			headers: {
	// 				'Content-Type': 'multipart/form-data'
	// 			}

	// 		})
	// 		console.log('i addhamsterimage')
	// 		console.log('response addhamsterimage: ', response)
	 		//? varför ser man inte dessa console logs?
	// 	}//slut try
	// 	catch (error) {
	// 		console.log('addHasterImage: Something went wrong when adding a new image')
	// 	}//slut catch

	// } //slut func

	async function addHamster(newHamster) {
		console.log(newHamster)
		setLoading(true)

		try {
			const response = await fetch('/api/addhamster', {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify(newHamster)
			});

			const text = await response.text();
			// const data = JSON.parse(text); 
			let dataHamster = JSON.parse(text);
			console.log('response i inputfields: ', dataHamster)
			if (dataHamster.ops.length) {
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
			<form className='form' onSubmit={handleSubmit(onSubmit)}>

				{/* Name */}
				<div className='form-group'>
					<input type='text'
						id="name"
						name='name'
						className='form-control'
						value={name}
						placeholder='name placeholder'
						ref={register({ required: true, maxLength: 10 })}
						onChange={event => setName(event.target.value)} />
					<label htmlFor="name" className='form-label'>Name</label>
					<div className="error-message">
						{errors.name && errors.name.type === 'required' && <span>*Oops, forgot the name!</span>}
						{errors.name && errors.name.type === 'maxLength' && <span>*Hey! Max 10 characters</span>}
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
						ref={register({ required: true, maxLength: 10, minLength: 1 })}
						onChange={event => setAge(event.target.value)} />
					<label htmlFor="age" className='form-label'>Age in months</label>
					<div className="error-message">
						{errors.age && errors.age.type === 'required' && <span>*Dont forget the age</span>}
						{errors.age && errors.age.type === 'maxLength' && <span>*Whops! Max 10 characters</span>}
						{errors.age && errors.age.type === 'minLength' && <span>*Min 1 character</span>}
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
						ref={register({ required: true, maxLength: 10, minLength: 2 })}
						onChange={event => setFavFood(event.target.value)} />
					<label htmlFor="favFood" className='form-label'>Favorite food</label>
					<div className="error-message">
						{errors.favFood && errors.favFood.type === 'required' && <span>*Fav food here please</span>}
						{errors.favFood && errors.favFood.type === 'maxLength' && <span>*Max 10 characters please</span>}
						{errors.favFood && errors.favFood.type === 'minLength' && <span>*Min 2 character</span>}
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
						ref={register({ required: true, maxLength: 15, minLength: 2 })}
						onChange={event => setLoves(event.target.value)} />
					<label htmlFor="loves" className='form-label'>Loves</label>
					<div className="error-message">
						{errors.loves && errors.loves.type === 'required' && <span>*Some love here plz</span>}
						{errors.loves && errors.loves.type === 'maxLength' && <span>*Max 15 characters</span>}
						{errors.loves && errors.loves.type === 'minLength' && <span>*Min 2 character</span>}
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
							onChange={onChangeSaveFile} />
					</label>
					<div className="error-message">
						{errors.imageFile && errors.imageFile.type === 'required' && <span>*Need an image 😘</span>}
					</div>
				</div>
				{/* <input type="submit" value='Add hamster' className='submit-button'/>  */}

				{loading ? <p className='loading-text'>Loading...</p> : <input type="submit" value='Add hamster' className='submit-button' />}
			</form>
			{/* <button onClick={addNewHamster}>Add hamster</button> */}


		</div>
	)


}

export default FormInput