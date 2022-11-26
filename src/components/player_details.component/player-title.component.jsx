import React from "react";
import './player-title.component.scss'
import PlayerDetailRow from "./player-detail-row.component";

const PlayerTitle = ({data}) => {
    return(
        <div className="player-title">
            <div><img className="team-logo" src={data.statistics[0].team.logo} alt="#"/></div>
            <div className="player-name"><PlayerDetailRow>{data.player.name.toUpperCase()}</PlayerDetailRow></div>
        </div>
    )
}

export default PlayerTitle;