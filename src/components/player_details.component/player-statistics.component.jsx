
import React from "react";
import './player-statistics.component.scss';
import Collapsible from "./Collapsible";

const PlayerStatisticsComponent = ({ datas }) => {
    console.log(datas);
    return (
        <div className="player-stat">
            {/* <h3><u>STATISTICS</u></h3> */}
            {
                datas.map((data) => (<div key = {data.league.name}>
                    {data.games.appearences?<Collapsible datas={data}/>:null}
                </div>))
            }
        </div>
    )
}

export default PlayerStatisticsComponent;