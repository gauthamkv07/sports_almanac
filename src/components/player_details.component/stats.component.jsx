import React from "react";
import './stats.component.scss';
import collapseArrow from './collapseArrow.png';

const Stats = ({ data }) => {
    return (
        <div>
            <div className="stats-detail">
                <div className="arrow-space"><img className="collapse-arrow" src={collapseArrow} alt="logo" /></div>
                <h3 className="stats-league-name">{data.league.name}</h3>
                <div className="stats-row">
                    <div className="stat-space"><div className="header-text">Appearances:&nbsp;</div>{data.games.appearences ? data.games.appearences : 0}</div>
                    <div className="stat-space"><div className="header-text">Starting:&nbsp;</div>{data.games.lineups ? data.games.lineups : 0}</div>
                    <div className="stat-space"><div className="header-text">Total Minutes:&nbsp;</div>{data.games.minutes ? data.games.minutes : 0}</div>
                </div>
                <div className="stats-row">
                    <div className="stat-space"><div className="header-text">Goals:&nbsp;</div>{data.goals.total ? data.goals.total : 0}</div>
                    <div className="stat-space"><div className="header-text">Assists:&nbsp;</div>{data.goals.assists ? data.goals.assists : 0}</div>
                    <div className="stat-space"><div className="header-text">Pass Accuracy:&nbsp;</div>{data.passes.accuracy ? data.passes.accuracy : 0}</div>
                </div>
                <div className="stats-row">
                    <div className="stat-space"><div className="header-text">Red Cards:&nbsp;</div>{data.cards.red ? data.cards.red : 0}</div>
                    <div className="stat-space"><div className="header-text">Yellow Cards:&nbsp;</div>{data.cards.yellow ? data.cards.yellow : 0}</div>
                    <div className="stat-space"><div className="header-text">Average Rating:&nbsp;</div>{data.games.rating ? data.games.rating.substring(0, 4) : 0}</div>
                </div>
            </div>
        </div>
    )
}

export default Stats;