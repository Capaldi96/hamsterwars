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
				<form>

					<div>
						<input type='text'
						id="name"
						value={name}
						onChange={event=>setName(event.target.value)}/>
						<label for="name">Hamster name</label>
					</div>
					
					<div>
						<input type='text' 
						id='age'
						value={age}
						onChange={event=>setAge(event.target.value)}/>
						<label for="age">Hamster age</label>
					</div>
			
					<div>
						<input type='text'
						id='favoritefood' 
						value={favoritefood}
						onChange={event=>setFavoritefood(event.target.value)}/>
						<label for="favoritefood">Favoritefood</label>

					</div>
				
					<div>
						<input type='text'
						id='loves' 
						value={loves}
						onChange={event=>setLoves(event.target.value)}/>
						<label for="loves">Loves</label>

					</div>
				
					<div>
						<input type='text'
						id='image' 
						value={image}
						onChange={event=>setImage(event.target.value)}/>
						<label for="image">Image</label>


					</div>
				

				</form>
				<button>Add hamster</button>
			

			</div>
					

		</div>


)





}



export default Form