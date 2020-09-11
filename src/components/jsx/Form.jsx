import React ,{useState} from 'react'
import '../scss/Form.scss'


const Form=()=>{

	// const [name, setName]=useState('')
	const [name, setName]=useState('')
	const [age, setAge]=useState('')
	const [favoritefood, setFavoritefood]=useState('')
	const [loves, setLoves]=useState('')
	const [image, setImage]=useState('')

	return(

		<div className='form-component'>
			<div className='form-wrapper'>

				<p>Add your own hamster</p>
				<form className='form'>

					<div className='form-group'>
						<input type='text'
						id="name"
						name='name'
						className='form-control'
						value={name}
						placeholder='name placeholder'
						onChange={event=>setName(event.target.value)}/>
						<label htmlFor="name" className='form-label'>Name</label>
					</div>
					
					<div className='form-group'>
						<input type='text' 
						id='age'
						name='age'
						className='form-control'
						value={age}
						placeholder='age placeholder'
						onChange={event=>setAge(event.target.value)}/>
						<label htmlFor="age" className='form-label'>Age</label>
					</div>
			
					<div className='form-group'>
						<input type='text'
						id='favoritefood'
						name='favoritefood'
						className='form-control' 
						value={favoritefood}
						placeholder='food placeholder'
						onChange={event=>setFavoritefood(event.target.value)}/>
						<label htmlFor="favoritefood" className='form-label'>Favorite food</label>

					</div>
				
					<div className='form-group'>
						<input type='text'
						className='form-control'
						id='loves'
						name='loves' 
						value={loves}
						placeholder='love placeholder'
						onChange={event=>setLoves(event.target.value)}/>
						<label htmlFor="loves" className='form-label'>Loves</label>

					</div>
				
					<div className='form-group'>
						<input type='text'
						className='form-control'
						id='image'
						name='image' 
						value={image}
						placeholder='image placeholder'
						onChange={event=>setImage(event.target.value)}/>
						<label htmlFor="image" className='form-label'>Image</label>

					</div>
				

				</form>
				<button>Add hamster</button>
			

			</div>
					

		</div>


)





}



export default Form