import React, { useState } from "react";
import FadeEffectGamesPlayed from './FadeEffectGamesPlayed'
import FadeEffectTop5Winners from './FadeEffectTop5Winners'
import '../scss/Statistics.scss';

export default function Statistic() {
const [showGamesPlayed, setShowGamesPlayed] = useState(false);
const [showTop5Winners, setShowTop5Winners] = useState(false);

	return (
<div className="circlesInRow">

{/* Games played */}
<FadeEffectGamesPlayed showGamesPlayed={showGamesPlayed}>
<div className="ellipsbackground" onClick={() => setShowGamesPlayed(show => !showGamesPlayed)}>

		<img className="ellipseGamesPlayed" src={require('../../assets/ellipseGamesPlayed.svg')} alt=""/>
</div>
</FadeEffectGamesPlayed> 

<img className="bigCircle1" onClick={() => setShowGamesPlayed(showGamesPlayed => !showGamesPlayed)} src={require('../../assets/bigCircleGamesPlayed.svg')} alt=""/> 


{/* Top 5 winners */}

<FadeEffectTop5Winners showTop5Winners={showTop5Winners}>
<div className="ellipsbackground" onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)}>

		<img className="ellipseGamesPlayed" src={require('../../assets/ellipseTop5Winners.svg')} alt=""/>
</div>
</FadeEffectTop5Winners> 

<img className="bigCircle2" onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)} src={require('../../assets/bigCircleTop5Winners.svg')} alt=""/> 

<img className="bigCircle3" src={require('../../assets/bigCircleTop5Loosers.svg')} alt=""/> 

<img className="bigCircle4" src={require('../../assets/bigCircleLeastParticipated.svg')} alt=""/> 

<img className="bigCircle5" src={require('../../assets/bigCircleLatestBattles.svg')} alt=""/> 





</div>
	)
}

