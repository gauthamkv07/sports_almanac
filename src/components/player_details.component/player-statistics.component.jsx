import React from "react";
import Stats from "./stats.component";
import './player-statistics.component.scss';

const PlayerStatisticsComponent = ({ datas }) => {
    return (
        <div className="player-stat">
            <h3><u>Statistics</u></h3>
            <h3>CLUB</h3>
            {
                datas.map((data) => (<div>
                    {data.games.appearences?<Stats data={data} />:null}
                </div>))
            }
        </div>
    )
}

export default PlayerStatisticsComponent;