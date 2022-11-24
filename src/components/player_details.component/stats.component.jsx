import React from "react";
import './stats.component.scss';
import collapseArrow from './collapseArrow.png';

const Stats = ({data}) => {
    return (
        <div>
            <div className="stats-detail">
                <h3>{data.league.name}</h3>
                <div className="stats-row">
                    <div><p>Appearances: {data.games.appearences ? data.games.appearences:0}</p></div>
                    <div><p>Starting: {data.games.lineups ? data.games.lineups:0}</p></div>
                    <div><p>Total Minutes: {data.games.minutes ? data.games.minutes:0}</p></div>
                </div>
                <div className="stats-row">
                    <div><p>Goals: {data.goals.total ? data.goals.total:0}</p></div>
                    <div><p>Assists: {data.goals.assists ? data.goals.assists:0}</p></div>
                    <div><p>Pass Accuracy: {data.passes.accuracy ? data.passes.accuracy:0}</p></div>
                </div>
                <div className="stats-row">
                    <div><p>Red Cards: {data.cards.red ? data.cards.red:0}</p></div>
                    <div><p>Yellow Cards: {data.cards.yellow ? data.cards.yellow:0}</p></div>
                    <div><p>Average Rating: {data.games.rating ? data.games.rating:0}</p></div>
                </div>
                <img className="collapse-arrow" src={collapseArrow} alt="logo"/>
            </div>
        </div>
    )
}

export default Stats;