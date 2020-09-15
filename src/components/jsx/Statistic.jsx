import React, { useState } from "react";
import FadeEffectGamesPlayed from './FadeEffectGamesPlayed'
import FadeEffectTop5Winners from './FadeEffectTop5Winners'
import '../scss/Statistics.scss';

export default function Statistic() {
const [showGamesPlayed, setShowGamesPlayed] = useState(false);
const [showTop5Winners, setShowTop5Winners] = useState(false);

	return (
		<div className="circlesInRowContainer">
		<div className="circlesInRow">

{/* Games played */}
<FadeEffectGamesPlayed showGamesPlayed={showGamesPlayed}>
<div className="ellipsbackground" onClick={() => setShowGamesPlayed(show => !showGamesPlayed)}>

		<img className="ellipse1" src={require('../../assets/ellipseGamesPlayed.svg')} alt=""/>
</div>
</FadeEffectGamesPlayed> 

<div className="statCircle1 circleSpecifics" onClick={() => setShowGamesPlayed(showGamesPlayed => !showGamesPlayed)}>
<img className="iconInsideCircle" src={require('../../assets/iconGamesPlayed.svg')} alt=""/> 
</div>


{/* Top 5 winners */}

<FadeEffectTop5Winners showTop5Winners={showTop5Winners}>
<div className="ellipsbackground" onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)}>

		<img className="ellipse2" src={require('../../assets/ellipseTop5Winners.svg')} alt=""/>
</div>
</FadeEffectTop5Winners> 

<div className="statCircle2 circleSpecifics" onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)}>
<img className="iconInsideCircle" src={require('../../assets/iconTop5Winners.svg')} alt=""/> 
</div>

<div className="statCircle3 circleSpecifics" onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)}>
<img className="iconInsideCircle" src={require('../../assets/iconTop5Loosers.svg')} alt=""/> 
</div>

<div className="statCircle4 circleSpecifics" onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)}>
<img className="iconInsideCircle" src={require('../../assets/iconLeastParticipated.svg')} alt=""/> 
</div>

<div className="statCircle5 circleSpecifics" onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)}>
<img className="iconLatestBattles" src={require('../../assets/iconTop5Loosers.svg')} alt=""/> 
</div>





</div>
		</div>

	)
}

