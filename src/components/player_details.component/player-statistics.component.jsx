
import React, { useEffect, useState } from "react";
import './player-statistics.component.scss';
import Collapsible from "./Collapsible";

const PlayerStatisticsComponent = ({ datas }) => {
    const [showNoStats, setShowNoStats] = useState(false);

    useEffect(() => {
        setShowNoStats(!datas.some((data)=> data.games.appearences));
        console.log(showNoStats);
    },[showNoStats, datas]);

    return (
        <div className="player-stat">
            {
                !showNoStats?datas.map((data) => (<div key = {data.league.name}>
                    {data.games.appearences?<Collapsible datas={data}/>:null}
                </div>)):<div className="no-stat-msg">No stats Available for this player right now.</div>
            }
        </div>
    )
}

export default PlayerStatisticsComponent;