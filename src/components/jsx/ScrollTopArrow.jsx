import React from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import '../scss/ScrollTopArrow.scss';


const ScrollTopArrow = (props) =>{

  return (
	  <div className="ScrollTopArrow">
			<FaArrowCircleUp className="scrollTop" onClick={props.scrollTop} style={{height: 50, fill: '#EFA377', display: props.showScroll ? 'flex' : 'none'}}/>
		</div>
  );
}

export default ScrollTopArrow;