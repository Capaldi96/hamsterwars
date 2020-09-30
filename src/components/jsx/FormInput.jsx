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
	
	const [nameIsTouched, setNameIsTouched]=useState(false)
	const [ageIsTouched, setAgeIsTouched]=useState(false)
	const [favFoodIsTouched, setFavFoodIsTouched]=useState(false)
	const [lovesIsTouched, setLovesIsTouched]=useState(false)

	const onSubmit = () => {
        setLoading(true)
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
        }
        catch (error) {
            console.log(error)
        }
    }

    async function addHamster(newHamster) {
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
            if (dataHamster.ops.length) {
                setLoading(false)
                props.setDisplayForm(false)
            }

        } catch (error) {
            console.log(' addhamster: something went wrong when adding hamster: ', error)
        }
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

		if(age.length<1){ ageInvalidMessage='Dont forget the age'; return false; }
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
		
		if(!imageFile){ imageFileInvalidMessage='Need an image 😘'; return false;}
		return true;
	}

	let isValidName=validateName()
	let isValidAge=validateAge()
	let isValidFavFood=validateFavFood()
	let isValidLoves=validateLoves()
	let isValidImageFile=validateImageFile()

	const [nameSubmitMessage, setNameSubmitMessage]=useState(false)
	const [ageSubmitMessage, setAgeSubmitMessage]=useState(false)
	const [favFoodSubmitMessage, setFavFoodSubmitMessage]=useState(false)
	const [lovesSubmitMessage, setLovesSubmitMessage]=useState(false)
	const [imageFileSubmitMessage, setImageFileSubmitMessage]=useState(false)

	const nameClassName= nameIsTouched && !isValidName ? 'form-control invalid' : 'form-control'
	const ageClassName= ageIsTouched && !isValidAge ? 'form-control invalid' : 'form-control'
	const favFoodClassName= favFoodIsTouched && !isValidFavFood ? 'form-control invalid' : 'form-control'
	const lovesClassName= lovesIsTouched && !isValidLoves ? 'form-control invalid' : 'form-control'
	const imageFileClassName=`imageFile-label`

	const addNewHamster=()=>{
		
		if (isValidName && isValidAge && isValidFavFood && isValidLoves && isValidImageFile){
			
			onSubmit();
		}
		else{
		
			if(!isValidName) setNameSubmitMessage(true);
			if(!isValidAge) setAgeSubmitMessage(true)
			if(!isValidFavFood) setFavFoodSubmitMessage(true)
			if(!isValidLoves) setLovesSubmitMessage(true)
			if(!isValidImageFile) setImageFileSubmitMessage(true)

		}
	}

	const onChangeSaveFile=(e)=>{
		setimageFile(e.target.files[0])
		setImageLabelText('New image ready to upload')
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
						className={nameClassName}
						value={name}
						placeholder='name placeholder'
						onBlur={()=>setNameIsTouched(true)}
						onChange={event=>setName(event.target.value)}/>
						<label htmlFor="name" className='form-label'>Name</label>
						<div className="error-message">

							{(nameIsTouched && !isValidName) || nameSubmitMessage ? <span>{nameInvalidMessage}</span> : <span></span>}
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
						onChange={event=>setAge(event.target.value)}/>
						<label htmlFor="age" className='form-label'>Age in months</label>
						<div className="error-message">

							{(ageIsTouched && !isValidAge) || ageSubmitMessage ? <span>{ageInvalidMessage}</span> : <span></span>}
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
						onChange={event=>setFavFood(event.target.value)}/>
						<label htmlFor="favFood" className='form-label'>Favorite food</label>
						<div className="error-message">

							{(favFoodIsTouched && !isValidFavFood) || favFoodSubmitMessage ? <span>{favFoodInvalidMessage}</span> : <span></span>}
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
						onChange={event=>setLoves(event.target.value)}/>
						<label htmlFor="loves" className='form-label'>Loves</label>
						<div className="error-message">

							{(lovesIsTouched && !isValidLoves) || lovesSubmitMessage ? <span>{lovesInvalidMessage}</span> : <span></span>}
							{loves.length>15 ? <span>Hey! Max 15 characters please</span> : <span></span>}
						
						</div>
					</div>

					{/* Image */}
					<div className='form-group'>
						<label htmlFor="imageFile" className={imageFileClassName}>{imageLabelText}
						<input type='file'
						id='imageFile'
						name='imageFile'
						placeholder='imageFile placeholder'
						onChange={onChangeSaveFile}/>
						</label>
						<div className="error-message">
							{ imageFileSubmitMessage ? <span>{imageFileInvalidMessage}</span> : <span></span>}
							
						</div>
					</div>
				
				</form>
					
				{loading ? <p className='loading-text'>Loading...</p> : <button className='submitButton' onClick={addNewHamster}>Add hamster</button>}
			
		</div>
	)
}

export default FormInput