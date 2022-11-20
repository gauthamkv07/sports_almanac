import React from "react";
import PlayerDetailRow from "./player-detail-row.component";
import './players-details.component.scss';

const PlayerDetailsComponent = ({ data }) => {
    return (
        <div className="player-detail-component">
            <PlayerDetailRow><img src={data.player.photo} alt="#" height='200px' width='200px' /></PlayerDetailRow>
            <PlayerDetailRow><p>Name:{data.player.firstname}{" "}{data.player.lastname}</p></PlayerDetailRow>
            <PlayerDetailRow><p>Nationality: {data.player.nationality}</p></PlayerDetailRow>
            <PlayerDetailRow><p>Age: {data.player.age}</p></PlayerDetailRow>
            <PlayerDetailRow><p>Club:{data.statistics[0].team.name}</p></PlayerDetailRow>
            <PlayerDetailRow><p>Position: {data.statistics[0].games.position}</p></PlayerDetailRow>
            <PlayerDetailRow><p>Date of Birth: {data.player.birth.date}</p></PlayerDetailRow>
        </div>
    )
}

export default PlayerDetailsComponent;