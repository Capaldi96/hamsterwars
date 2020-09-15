import React ,{useState} from 'react'
import { useForm } from "react-hook-form";
import '../scss/Form.scss'


const Form=()=>{

	// const [name, setName]=useState('')
	const [name, setName]=useState('')
	const [age, setAge]=useState('')
	const [favFood, setFavFood]=useState('')
	const [loves, setLoves]=useState('')
	const [image, setImage]=useState('')

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = data => console.log(data);

	let newHamster = {
		name:name,
		age:age,
		favFood:favFood,
		loves:loves,
		imgName:image,
		wins:0,
		defeats:0,
		games:0,
		latestGame: ''
	}

	async function addHamster(){
		try{

			const response= await fetch('/api/addhamster', {
				headers:{
					'Accept':'application/json',
					'Content-Type':'application/json'
				},
				method:'POST',
				body:JSON.stringify(newHamster)
			});
	
	
			const text = await response.text(); // Parse it as text
			console.log('text: ', text)
			const data = JSON.parse(text); // Try to parse it as json
			console.log('response: ', data)

			//TODO Lägg upp meddelande om success when adding hamster


		}catch(error){
			console.log('something went wrong when adding hamster')
		}
		
	
	}

	return(

		<div className='form-component'>
			<div className='form-wrapper'>

				<p>Add your own hamster</p>
				<form className='form' onSubmit={handleSubmit(onSubmit)}>

					<div className='form-group'>
						<input type='text'
						id="name"
						name='name'
						className='form-control'
						value={name}
						placeholder='name placeholder'
						ref={register({ required: true, maxLength:15, minLength:1 })}
						onChange={event=>setName(event.target.value)}/>
						<label htmlFor="name" className='form-label'>Name</label>
					</div>
					{errors.name && errors.name.type==='required' && <span>This field is required</span>}
					{errors.name && errors.name.type==='maxLength' && <span>Max 15 characters</span>}
					{errors.name && errors.name.type==='minLength' && <span>Min 1 character</span>}
				
					<div className='form-group'>
						<input type='number' 
						id='age'
						name='age'
						className='form-control'
						value={age}
						placeholder='age placeholder'
						ref={register({ required: true, maxLength:10, minLength:1 })}
						onChange={event=>setAge(event.target.value)}/>
						<label htmlFor="age" className='form-label'>Age (3 mån=0.3. 1 år=1)</label>
					</div>
					{errors.age && errors.age.type==='required' && <span>This field is required</span>}
					{errors.age && errors.age.type==='maxLength' && <span>Max 10 characters</span>}
					{errors.age && errors.age.type==='minLength' && <span>Min 1 character</span>}
			
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

					</div>
					{errors.favFood && errors.favFood.type==='required' && <span>This field is required</span>}
					{errors.favFood && errors.favFood.type==='maxLength' && <span>Max 10 characters</span>}
					{errors.favFood && errors.favFood.type==='minLength' && <span>Min 2 character</span>}
				
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

					</div>
					{errors.loves && errors.loves.type==='required' && <span>This field is required</span>}
					{errors.loves && errors.loves.type==='maxLength' && <span>Max 15 characters</span>}
					{errors.loves && errors.loves.type==='minLength' && <span>Min 2 character</span>}
				
					<div className='form-group'>
						<input type='text'
						className='form-control'
						id='image'
						name='image' 
						value={image}
						placeholder='image placeholder'
						ref={register({ required: true })}
						onChange={event=>setImage(event.target.value)}/>
						<label htmlFor="image" className='form-label'>Image</label>

					</div>
					{errors.image && errors.image.type==='required' && <span>This field is required</span>}
				
					<input type="submit" />
				</form>
				<button onClick={addHamster}>Add hamster</button>
			

			</div>
					

		</div>


)





}



export default Form