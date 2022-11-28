import React from "react";
import './player-title.component.scss';
import Title from "../title.component/title.component";

const PlayerTitle = ({data}) => {
    return(
        <div>
            <Title logo={data.statistics[0].team.logo} page_title={data.player.name.toUpperCase()}/>
            {/* <div><img className="player-title-team-logo" src={data.statistics[0].team.logo} alt="#"/></div>
            <div className="player-title-name"><PlayerDetailRow>{data.player.name.toUpperCase()}</PlayerDetailRow></div> */}
        </div>
    )
}

export default PlayerTitle;