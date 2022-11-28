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
                <PlayerDetailRow><div className="header-text">Full Name:&nbsp;</div>{data.player.firstname}{" "}{data.player.lastname}</PlayerDetailRow>
                <PlayerDetailRow><div className="header-text">Nationality:&nbsp;</div>{data.player.nationality}</PlayerDetailRow>
                <PlayerDetailRow><div className="header-text">Age:&nbsp;</div>{data.player.age}</PlayerDetailRow>
                <PlayerDetailRow><div className="header-text">Club:&nbsp;</div>{data.statistics[0].team.name}</PlayerDetailRow>
                <PlayerDetailRow><div className="header-text">Position:&nbsp;</div>{data.statistics[0].games.position}</PlayerDetailRow>
                <PlayerDetailRow><div className="header-text">Date of Birth:&nbsp;</div>{data.player.birth.date}</PlayerDetailRow>
            </div>
        </div>
    )
}

export default PlayerDetailsComponent;