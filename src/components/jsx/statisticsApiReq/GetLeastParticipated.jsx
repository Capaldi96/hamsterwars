import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/Statistics.scss'

const GetLeastParticipated = () => {
	return (
		<div>
			<div className="potatoeContainer">

			<img className="ellipse" src={require('../../../assets/ellipseLeastParticipated.svg')} alt=""/>

			<div className="potatoeText">
			<h1 className="statPotatoeHeader">Least Participated</h1>
			
			</div>
			</div>
		</div>
	)
}

export default GetLeastParticipated;