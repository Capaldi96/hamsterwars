import React, {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import '../scss/ScrollTopArrow.scss';


const ScrollTopArrow = (props) =>{

  
  
 
  return (
	  <div className="ScrollTopArrow">
			<FaArrowCircleUp className="scrollTop" onClick={props.scrollTop} style={{height: 40, display: props.showScroll ? 'flex' : 'none'}}/>
		</div>
  );
}

export default ScrollTopArrow;