import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ScrollTopArrow from './ScrollTopArrow'
import '../scss/Gallery.scss';

const Gallery = (props) => {
    
    const [hamsterList, setHamsterList] = useState([]);
    const [showScroll, setShowScroll] = useState(true) // ändra till false
	const windowGallery = useRef()
	
    useEffect(() => {
        getHamsters();
        
        windowGallery.current.addEventListener('scroll', checkScrollTop);
	  }, [])

	  useEffect(() => {
		console.log('useEffect competitorList', props.competitorsList)
		
	  }, [props.competitorsList])
      
    // Back to top
    const scrollTop = () =>{
        console.log('scrollTop click')
        windowGallery.current.scrollTo({top: 0, behavior: 'smooth'});
    };
    const checkScrollTop = () => {
        console.log('checkScrollTop')
        console.log('showScroll utanför if sats', showScroll)
    
        if (!showScroll && windowGallery.current.pageYOffset > 200){
            console.log('checkScrollTop if')
            setShowScroll(true)
          console.log('showScroll utanför i if sats', showScroll)
        } else if (showScroll && windowGallery.current.pageYOffset <= 200){
            setShowScroll(false)
            console.log('showScroll else if', showScroll)
        }
      };
    // getHamsters
    async function getHamsters(){
        await axios.get('/api/gallery')
        .then(res => {
            /* console.log('Hamsters', res.data); */
            setHamsterList(res.data)
        })
        .catch(err => {
            console.log('Something went wrong', err)
        })
    }
    // deleteHamster
    async function deleteHamster(id){
        const response = await axios.delete('/api/deleteHamster/' + id);
        getHamsters();
	}
	
	//Ändra pointern på korten beroende på om Gallery eller Competitors visas
    let classIcon=''
    if(props.toCompetitorsComp){
        classIcon='card-cursor'
    }
    
    //Lägger till competitors i lista med ett klick
    const handleCompetitors=(id) => {
        if(!props.toCompetitorsComp){
			return
		}
		props.setShowText(false)
		
		//
		if(props.competitorsList.find(hamsterId => hamsterId === id)){
			props.setCompetitorsList(props.competitorsList.filter(hamsterId => hamsterId !== id)) 

			props.setStatusButton(true) 
		}
		//
		else if(props.competitorsList.length <= 1){
			let array = [...props.competitorsList];
			array.push(id)
			props.setCompetitorsList(array)

			if(array.length === 2){
				props.setStatusButton(false) 
			}
		}
	}
	
    let status = null;
	let loadingText = null;
	let competitorBackground = '';

    if (!hamsterList.length) {
        loadingText = <div className="loading"><h2>Loading...</h2></div>;
    } 
    else {
        status=hamsterList.map(hamster=>{
    
        if(props.competitorsList.length){
            if (hamster._id === props.competitorsList[0] || hamster._id === props.competitorsList[1]){ 
				competitorBackground = 'competitorBackground'
			}
			else{
				competitorBackground = ''
			}
        }
            
            return (
                <div key={hamster._id} className={`list ${classIcon} ${competitorBackground}`} onClick={() => handleCompetitors(hamster._id)}>
                    <img src={hamster.imgName} alt="Hamster" className="hamster-image"/>
                    {!props.toCompetitorsComp ? (<button onClick={() => deleteHamster(hamster._id)}>X</button>) : (  <img alt='hand-icon' className='hand-icon' src='https://www.flaticon.com/svg/static/icons/svg/1612/1612636.svg'></img>)}
            
                    <p ><span>{hamster.name}</span></p>
                    <p>Years: {hamster.age}</p>
                    <p>Games: {hamster.games}</p>
                    <p>Favfood: {hamster.favFood}</p>
                    <p>Loves: {hamster.loves}</p>
                    <p>Wins: {hamster.wins}</p>
                    <p>Losses: {hamster.defeats}</p>
                </div>
                
            )
        })//slut map
            
    }//slut else
    
    return (
        <div className="Gallery" ref={windowGallery} onScroll={() => console.log('Scroll i gallery')}>
            <main>
                <div>{loadingText}</div>
                <div>
                    <div className="container-list">{status}</div>
                </div>
                
                {<ScrollTopArrow scrollTop={scrollTop} showScroll={showScroll}/>}
            </main>
        </div>
    )
}
export default Gallery;