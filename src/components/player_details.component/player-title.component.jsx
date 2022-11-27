import React from "react";
import './player-title.component.scss'
import PlayerDetailRow from "./player-detail-row.component";

const PlayerTitle = ({data}) => {
    return(
        <div className="player-title">
            <div><img className="player-title-team-logo" src={data.statistics[0].team.logo} alt="#"/></div>
            <div className="player-title-name"><PlayerDetailRow>{data.player.name.toUpperCase()}</PlayerDetailRow></div>
        </div>
    )
}

export default PlayerTitle;