import React from "react";
import PlayerDetailRow from "./player-detail-row.component";
import './players-details.component.scss';

const PlayerDetailsComponent = ({ data }) => {
    return (
        <div className="player-detail-component">
            <div>
                <img className="player-img" src={data.player.photo} alt="#" />
            </div>
            <div className="text-image">
                <PlayerDetailRow>Full Name:{data.player.firstname}{" "}{data.player.lastname}</PlayerDetailRow>
                <PlayerDetailRow>Nationality:{data.player.nationality}</PlayerDetailRow>
                <PlayerDetailRow>Age:{data.player.age}</PlayerDetailRow>
                <PlayerDetailRow>Club:{data.statistics[0].team.name}</PlayerDetailRow>
                <PlayerDetailRow>Position:{data.statistics[0].games.position}</PlayerDetailRow>
                <PlayerDetailRow>Date of Birth{data.player.birth.date}</PlayerDetailRow>
            </div>
        </div>
    )
}

export default PlayerDetailsComponent;