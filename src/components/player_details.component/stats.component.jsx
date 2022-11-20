import React from "react";
import './stats.component.scss';

const Stats = ({data}) => {
    return (
        <div>
            <h3>{data.league.name}</h3>
            <div className="stats-detail">
                <div className="stats-row">
                    <div><p>Appearances: {data.games.appearences}</p></div>
                    <div><p>Starting: {data.games.lineups}</p></div>
                    <div><p>Total Minutes: {data.games.minutes}</p></div>
                </div>
                <div className="stats-row">
                    <div><p>Goals: {data.goals.total}</p></div>
                    <div><p>Assists: {data.goals.assists}</p></div>
                    <div><p>Pass Accuracy: {data.passes.accuracy}</p></div>
                </div>
                <div className="stats-row">
                    <div><p>Red Cards: {data.cards.red}</p></div>
                    <div><p>Yellow Cards: {data.cards.yellow}</p></div>
                    <div><p>Average Rating: {data.games.rating}</p></div>
                </div>
            </div>
        </div>
    )
}

export default Stats;