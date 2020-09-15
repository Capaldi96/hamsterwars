import React, { useState } from "react";
import FadeEffectGamesPlayed from './FadeEffect/FadeEffectGamesPlayed'
import FadeEffectTop5Winners from './FadeEffect/FadeEffectTop5Winners'
import FadeEffectTop5Loosers from './FadeEffect/FadeEffectTop5Loosers'
import FadeEffectLeastParticipated from './FadeEffect/FadeEffectLeastParticipated'
import FadeEffectLatestBattles from './FadeEffect/FadeEffectLatestBattles'

import '../scss/Statistics.scss';


export default function Statistic() {
const [showGamesPlayed, setShowGamesPlayed] = useState(false);
const [showTop5Winners, setShowTop5Winners] = useState(false);
const [showTop5Loosers, setShowTop5Loosers] = useState(false);
const [showLeastParticipated, setShowLeastParticipated] = useState(false);
const [showLatestBattles, setShowLatestBattles] = useState(false);

	return (
		<div className="circlesInRowContainer">
		<div className="circlesInRow">
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> amended img to dov circles, media q, fade effect
=======
>>>>>>> amended img to dov circles, media q, fade effect

>>>>>>> amended img to dov circles, media q, fade effect
{/* Games played */}
<FadeEffectGamesPlayed showGamesPlayed={showGamesPlayed}>
<div className="ellipsbackground" onClick={() => setShowGamesPlayed(show => !showGamesPlayed)}>
<img className="ellipse" src={require('../../assets/ellipseGamesPlayed.svg')} alt=""/></div>
</FadeEffectGamesPlayed> 

<div className="statCircle1 circleSpecifics" onClick={() => setShowGamesPlayed(showGamesPlayed => !showGamesPlayed)}>
<img className="iconInsideCircle" src={require('../../assets/iconGamesPlayed.svg')} alt=""/> 
<<<<<<< HEAD
<<<<<<< HEAD
<img className="miniIconInsideCircle" src={require('../../assets/miniIconGamesPlayed.svg')} alt=""/></div>
<p className="miniIconText">Games played</p>
<<<<<<< HEAD
</div>
</div>

=======
=======
</div>
>>>>>>> amended img to dov circles, media q, fade effect
<<<<<<< HEAD
=======
=======
</div>
>>>>>>> amended img to dov circles, media q, fade effect
>>>>>>> amended img to dov circles, media q, fade effect


{/* Top 5 winners */}
<FadeEffectTop5Winners showTop5Winners={showTop5Winners}>
<div className="ellipsbackground" onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)}>
<img className="ellipse" src={require('../../assets/ellipseTop5Winners.svg')} alt=""/></div>
</FadeEffectTop5Winners> 

<div className="statCircle2 circleSpecifics" onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)}>
<img className="iconInsideCircle" src={require('../../assets/iconTop5Winners.svg')} alt=""/> 
<<<<<<< HEAD
<img className="miniIconInsideCircle" src={require('../../assets/miniIconTop5Winners.svg')} alt=""/></div>
<p className="miniIconText">Top 5 Winners</p>


{/* Top 5 loosers */}
<FadeEffectTop5Loosers showTop5Loosers={showTop5Loosers}>
<div className="ellipsbackground" onClick={() => setShowTop5Loosers(showTop5Loosers => !showTop5Loosers)}>
<img className="ellipse" src={require('../../assets/ellipseTop5Loosers.svg')} alt=""/></div>
</FadeEffectTop5Loosers> 

<div className="statCircle3 circleSpecifics" onClick={() => setShowTop5Loosers(showTop5Loosers => !showTop5Loosers)}>
<img className="iconInsideCircle" src={require('../../assets/iconTop5Loosers.svg')} alt=""/> 
<img className="miniIconInsideCircle" src={require('../../assets/miniIconTop5Loosers.svg')} alt=""/></div>
<p className="miniIconText">Top 5 Loosers</p>
</div>

<<<<<<< HEAD
=======
=======
</div>

<<<<<<< HEAD
>>>>>>> amended img to dov circles, media q, fade effect
=======
<<<<<<< HEAD
>>>>>>> amended img to dov circles, media q, fade effect
<div className="statCircle3 circleSpecifics" onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)}>
<img className="iconInsideCircle" src={require('../../assets/iconTop5Loosers.svg')} alt=""/> 
</div>

<div className="statCircle4 circleSpecifics" onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)}>
<img className="iconInsideCircle" src={require('../../assets/iconLeastParticipated.svg')} alt=""/> 
</div>

<div className="statCircle5 circleSpecifics" onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)}>
<img className="iconLatestBattles" src={require('../../assets/iconTop5Loosers.svg')} alt=""/> 
</div>
<<<<<<< HEAD
=======
>>>>>>> amended img to dov circles, media q, fade effect
>>>>>>> amended img to dov circles, media q, fade effect

{/* Least participated */}
<FadeEffectLeastParticipated showLeastParticipated={showLeastParticipated}>
<div className="ellipsbackground" onClick={() => setShowLeastParticipated(showLeastParticipated => !showLeastParticipated)}>
<img className="ellipse" src={require('../../assets/ellipseLeastParticipated.svg')} alt=""/></div>
</FadeEffectLeastParticipated> 

<div className="statCircle4 circleSpecifics" onClick={() => setShowLeastParticipated(showLeastParticipated => !showLeastParticipated)}>
<img className="iconInsideCircle" src={require('../../assets/iconLeastParticipated.svg')} alt=""/> 
<img className="miniIconInsideCircle" src={require('../../assets/miniIconLeastParticipated.svg')} alt=""/></div>
<p className="miniIconText">Least participated</p>
=======
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
>>>>>>> amended img to dov circles, media q, fade effect

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



{/* Latest battles */}
<FadeEffectLatestBattles showLatestBattles={showLatestBattles}>
<div className="ellipsbackground" onClick={() => setShowLatestBattles(showLatestBattles => !showLatestBattles)}>
<img className="ellipse" src={require('../../assets/ellipseLatestBattles.svg')} alt=""/></div>
</FadeEffectLatestBattles> 

<div className="statCircle5 circleSpecifics" onClick={() => setShowLatestBattles(showLatestBattles => !showLatestBattles)}>
<img className="iconInsideCircle" src={require('../../assets/iconLatestBattles.svg')} alt=""/> 
<img className="miniIconInsideCircle" src={require('../../assets/miniIconLatestBattles.svg')} alt=""/></div>
<p className="miniIconText">Latests battles</p>


</div>
		</div>

	)
}

