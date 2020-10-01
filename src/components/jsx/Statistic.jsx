import React, { useState } from "react";
import '../scss/Statistics.scss';
import '../scss/StatisticsPotatoes.scss'
import FadeEffectGamesPlayed from './FadeEffect/FadeEffectGamesPlayed'
import FadeEffectTop5Winners from './FadeEffect/FadeEffectTop5Winners'
import FadeEffectTop5Loosers from './FadeEffect/FadeEffectTop5Loosers'
import FadeEffectLeastParticipated from './FadeEffect/FadeEffectLeastParticipated'
import FadeEffectLatestBattles from './FadeEffect/FadeEffectLatestBattles'
import FadeEffectMoreInfoTopWinners from './FadeEffect/FadeEffectMoreInfoTopWinners'
import FadeEffectMoreInfoTopLoosers from './FadeEffect/FadeEffectMoreInfoTopLoosers'


import GetGamesPlayed from './statisticsApiReq/GetGamesPlayed'
import GetTopLoosers from './statisticsApiReq/GetTopLoosers'
import GetTopWinners from './statisticsApiReq/GetTopWinners'
import GetLatestBattles from './statisticsApiReq/GetLatestBattles'
import GetLeastParticipated from './statisticsApiReq/GetLeastParticipated'
import GetMoreInfoTopWinners from './statisticsApiReq/GetMoreInfoTopWinners'
import GetMoreInfoTopLoosers from './statisticsApiReq/GetMoreInfoTopLoosers'


const Statistic = () => {
	const [showGamesPlayed, setShowGamesPlayed] = useState(false);
	const [showTop5Winners, setShowTop5Winners] = useState(false);
	const [showTop5Loosers, setShowTop5Loosers] = useState(false);
	const [showLeastParticipated, setShowLeastParticipated] = useState(false);
	const [showLatestBattles, setShowLatestBattles] = useState(false);
	const [showMoreInfoTopWinners, setShowMoreInfoTopWinners] = useState(false);
	const [showMoreInfoTopLoosers, setShowMoreInfoTopLoosers] = useState(false);


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
					<img className="iconInsideCircle" src={require('../../assets/iconGamesPlayed.svg')} alt="" />
					<img className="miniIconInsideCircle" src={require('../../assets/miniIconGamesPlayed.svg')} alt="" /></div>
				<p className="miniIconText1 miniIconText">Games played</p>


				{/* Top 5 winners */}
				{/* Top 5 winners - fade potatoe */}
				<FadeEffectTop5Winners showTop5Winners={showTop5Winners}>
					<div className="ellipsebackground" onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)}
					><GetTopWinners /></div>
				</FadeEffectTop5Winners>
				{/* Top 5 winners - green circles */}
				<div className="statCircle2 circleSpecifics" onClick={() => setShowTop5Winners(showTop5Winners => !showTop5Winners)}>
					<img className="iconInsideCircle" src={require('../../assets/iconTop5Winners.svg')} alt="" />
					<img className="miniIconInsideCircle" src={require('../../assets/miniIconTop5Winners.svg')} alt="" /></div>
				<p className="miniIconText2 miniIconText">Top 5 Winners</p>


				{/* Top 5 loosers */}
				{/* Top 5 loosers - fade potatoe */}
				<FadeEffectTop5Loosers showTop5Loosers={showTop5Loosers}>
					<div className="ellipsebackground" onClick={() => setShowTop5Loosers(showTop5Loosers => !showTop5Loosers)}>
						<GetTopLoosers /></div>
				</FadeEffectTop5Loosers>
				{/* Top 5 loosers - green circles */}
				<div className="statCircle3 circleSpecifics" onClick={() => setShowTop5Loosers(showTop5Loosers => !showTop5Loosers)}>
					<img className="iconInsideCircle" src={require('../../assets/iconTop5Loosers.svg')} alt="" />
					<img className="miniIconInsideCircle" src={require('../../assets/miniIconTop5Loosers.svg')} alt="" /></div>
				<p className="miniIconText3 miniIconText">Top 5 Loosers</p>


				{/* Least participated */}
				{/* Least participated - fade potatoe */}
				<FadeEffectLeastParticipated showLeastParticipated={showLeastParticipated}>
					<div className="ellipsebackground" onClick={() => setShowLeastParticipated(showLeastParticipated => !showLeastParticipated)}>
						<GetLeastParticipated /></div>
				</FadeEffectLeastParticipated>
				{/* Least participated - green circles */}
				<div className="statCircle4 circleSpecifics" onClick={() => setShowLeastParticipated(showLeastParticipated => !showLeastParticipated)}>
					<img className="iconInsideCircle" src={require('../../assets/iconLeastParticipated.svg')} alt="" />
					<img className="miniIconInsideCircle" src={require('../../assets/miniIconLeastParticipated.svg')} alt="" /></div>
				<p className="miniIconText4 miniIconText">Least participated</p>


				{/* Latest battles */}
				{/* Latest battles - fade potatoe */}
				<FadeEffectLatestBattles showLatestBattles={showLatestBattles}>
					<div className="ellipsebackground" onClick={() => setShowLatestBattles(showLatestBattles => !showLatestBattles)}>
						<GetLatestBattles /></div>
				</FadeEffectLatestBattles>
				{/* Latest battles - green circles */}
				<div className="statCircle5 circleSpecifics" onClick={() => setShowLatestBattles(showLatestBattles => !showLatestBattles)}>
					<img className="iconInsideCircle" src={require('../../assets/iconLatestBattles.svg')} alt="" />
					<img className="miniIconInsideCircle" src={require('../../assets/miniIconLatestBattles.svg')} alt="" /></div>
				<p className="miniIconText5 miniIconText">Latests battles</p>



				{/* More info top winners */}
				{/* More info top winners - fade potatoe */}
				<FadeEffectMoreInfoTopWinners showMoreInfoTopWinners={showMoreInfoTopWinners}>
					<div className="ellipsebackground" onClick={() => setShowMoreInfoTopWinners(showMoreInfoTopWinners => !showMoreInfoTopWinners)}>
						<GetMoreInfoTopWinners /></div>
				</FadeEffectMoreInfoTopWinners>
				{/* Latest battles - green circles */}
				<div className="statCircle6 circleSpecifics" onClick={() => setShowMoreInfoTopWinners(showMoreInfoTopWinners => !showMoreInfoTopWinners)}>
					<img className="iconInsideCircle" src={require('../../assets/iconWinnerCommonalities.svg')} alt="" />
					<img className="miniIconInsideCircle" src={require('../../assets/miniIconWinnerLooserCommonalities.svg')} alt="" /></div>
				<p className="miniIconText6 miniIconText">Winner commonalities</p>


				{/* More info top loosers */}
				{/* More info top loosers - fade potatoe */}
				<FadeEffectMoreInfoTopLoosers showMoreInfoTopLoosers={showMoreInfoTopLoosers}>
					<div className="ellipsebackground" onClick={() => setShowMoreInfoTopLoosers(showMoreInfoTopLoosers => !showMoreInfoTopLoosers)}>
						<GetMoreInfoTopLoosers /></div>
				</FadeEffectMoreInfoTopLoosers>
				{/* Latest battles - green circles */}
				<div className="statCircle7 circleSpecifics" onClick={() => setShowMoreInfoTopLoosers(showMoreInfoTopLoosers => !showMoreInfoTopLoosers)}>
					<img className="iconInsideCircle" src={require('../../assets/iconLooserCommonalities.svg')} alt="" />
					<img className="miniIconInsideCircle" src={require('../../assets/miniIconWinnerLooserCommonalities.svg')} alt="" /></div>
				<p className="miniIconText7 miniIconText">Looser commonalities</p>

			</div>
		</div>
	)
}


export default Statistic;
