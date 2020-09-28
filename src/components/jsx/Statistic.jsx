import React, { useState } from "react";
import '../scss/Statistics.scss';
import FadeEffectGamesPlayed from './fadeEffect/FadeEffectGamesPlayed'
import FadeEffectTop5Winners from './fadeEffect/FadeEffectTop5Winners'
import FadeEffectTop5Loosers from './fadeEffect/FadeEffectTop5Loosers'
import FadeEffectLeastParticipated from './fadeEffect/FadeEffectLeastParticipated'
import FadeEffectLatestBattles from './fadeEffect/FadeEffectLatestBattles' 

import GetGamesPlayed from './statisticsApiReq/GetGamesPlayed'
import GetTopLoosers from './statisticsApiReq/GetTopLoosers'
import GetTopWinners from './statisticsApiReq/GetTopWinners'
import GetLatestBattles from './statisticsApiReq/GetLatestBattles'
import GetLeastParticipated from './statisticsApiReq/GetLeastParticipated'


const Statistic = () => {
const [showGamesPlayed, setShowGamesPlayed] = useState(false);
const [showTop5Winners, setShowTop5Winners] = useState(false);
const [showTop5Loosers, setShowTop5Loosers] = useState(false);
const [showLeastParticipated, setShowLeastParticipated] = useState(false);
const [showLatestBattles, setShowLatestBattles] = useState(false);  
 

	return (
		<div className="circlesInRowContainer">

<div className="circlesInRow">

{/* Games played */}
{/* Games played - fade potatoe */}
<FadeEffectGamesPlayed showGamesPlayed={showGamesPlayed}>
<div className="ellipsebackground" onClick={() => setShowGamesPlayed(showGamesPlayed => !showGamesPlayed)}>
<GetGamesPlayed /></div>
</FadeEffectGamesPlayed> 
{/* Games played - green circles */}
<div className="statCircle1 circleSpecifics" onClick={() => setShowGamesPlayed(showGamesPlayed => !showGamesPlayed)}>
<img className="iconInsideCircle" src={require('../../assets/iconGamesPlayed.svg')} alt=""/> 
<img className="miniIconInsideCircle" src={require('../../assets/miniIconGamesPlayed.svg')} alt=""/></div>
<p className="miniIconText1 miniIconText">Games played</p>


{/* Top 5 winners */}
{/* Top 5 winners - fade potatoe */}
<FadeEffectTop5Winners showTop5Winners={showTop5Winners}>
<div className="ellipsebackground" 
onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)}
>
<GetTopWinners />

</div>

</FadeEffectTop5Winners> 
{/* Top 5 winners - green circles */}
<div className="statCircle2 circleSpecifics" onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)}>
<img className="iconInsideCircle" src={require('../../assets/iconTop5Winners.svg')} alt=""/> 
<img className="miniIconInsideCircle" src={require('../../assets/miniIconTop5Winners.svg')} alt=""/></div>
<p className="miniIconText2 miniIconText">Top 5 Winners</p>


{/* Top 5 loosers */}
{/* Top 5 loosers - fade potatoe */}
<FadeEffectTop5Loosers showTop5Loosers={showTop5Loosers}>
<div className="ellipsebackground" onClick={() => setShowTop5Loosers(showTop5Loosers => !showTop5Loosers)}>
<GetTopLoosers /></div>
</FadeEffectTop5Loosers> 
{/* Top 5 loosers - green circles */}
<div className="statCircle3 circleSpecifics" onClick={() => setShowTop5Loosers(showTop5Loosers => !showTop5Loosers)}>
<img className="iconInsideCircle" src={require('../../assets/iconTop5Loosers.svg')} alt=""/> 
<img className="miniIconInsideCircle" src={require('../../assets/miniIconTop5Loosers.svg')} alt=""/></div>
<p className="miniIconText3 miniIconText">Top 5 Loosers</p>


{/* Least participated */}
{/* Least participated - fade potatoe */}
<FadeEffectLeastParticipated showLeastParticipated={showLeastParticipated}>
<div className="ellipsebackground" onClick={() => setShowLeastParticipated(showLeastParticipated => !showLeastParticipated)}>
<GetLeastParticipated /></div>
</FadeEffectLeastParticipated> 
{/* Least participated - green circles */}
<div className="statCircle4 circleSpecifics" onClick={() => setShowLeastParticipated(showLeastParticipated => !showLeastParticipated)}>
<img className="iconInsideCircle" src={require('../../assets/iconLeastParticipated.svg')} alt=""/> 
<img className="miniIconInsideCircle" src={require('../../assets/miniIconLeastParticipated.svg')} alt=""/></div>
<p className="miniIconText4 miniIconText">Least participated</p>


{/* Latest battles */}
{/* Latest battles - fade potatoe */}
<FadeEffectLatestBattles showLatestBattles={showLatestBattles}>
<div className="ellipsebackground" onClick={() => setShowLatestBattles(showLatestBattles => !showLatestBattles)}>
<GetLatestBattles /></div>
</FadeEffectLatestBattles> 
{/* Latest battles - green circles */}
<div className="statCircle5 circleSpecifics" onClick={() => setShowLatestBattles(showLatestBattles => !showLatestBattles)}>
<img className="iconInsideCircle" src={require('../../assets/iconLatestBattles.svg')} alt=""/> 
<img className="miniIconInsideCircle" src={require('../../assets/miniIconLatestBattles.svg')} alt=""/></div>
<p className="miniIconText5 miniIconText">Latests battles</p>

</div>
</div>
	)
}


export default Statistic;
