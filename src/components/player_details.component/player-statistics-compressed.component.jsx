import React from "react";
import Statscompressed from "./stats-compressed.component";
import './player-statistics.component.scss';

const PlayerStatisticsCompressedComponent = ({ datas }) => {
    console.log(datas);
    return (
        <div className="player-compressed-stat">
            <h3><u>Statistics</u></h3>
            <h3>CLUB</h3>
            {
                datas.map((data) => (<div key = {data.league.name}>
                    {data.games.appearences?<Statscompressed data={data} />:null}
                </div>))
            }
        </div>
    )
}

export default PlayerStatisticsCompressedComponent;