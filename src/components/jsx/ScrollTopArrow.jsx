import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import '../scss/ScrollTopArrow.scss';


const ScrollTopArrow = () =>{

  const [showScroll, setShowScroll] = useState(true)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100){
		console.log('if window.pageYOffset', window.pageYOffset )
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 100){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
	  console.log('scrollTop click')
		window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
	  <div className="ScrollTopArrow">
			<FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
		</div>
  );
}

export default ScrollTopArrow;