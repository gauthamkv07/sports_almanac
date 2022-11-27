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
                <PlayerDetailRow><div className="stat-space"><div className="header-text">Full Name:&nbsp;</div>{data.player.firstname}{" "}{data.player.lastname}</div></PlayerDetailRow>
                <PlayerDetailRow><div className="stat-space"><div className="header-text">Nationality:&nbsp;</div>{data.player.nationality}</div></PlayerDetailRow>
                <PlayerDetailRow><div className="stat-space"><div className="header-text">Age:&nbsp;</div>{data.player.age}</div></PlayerDetailRow>
            </div>
            <div className="text-image">
                <PlayerDetailRow><div className="stat-space"><div className="header-text">Club:&nbsp;</div>{data.statistics[0].team.name}</div></PlayerDetailRow>
                <PlayerDetailRow><div className="stat-space"><div className="header-text">Position:&nbsp;</div>{data.statistics[0].games.position}</div></PlayerDetailRow>
                <PlayerDetailRow><div className="stat-space"><div className="header-text">Date of Birth:&nbsp;</div>{data.player.birth.date}</div></PlayerDetailRow>
            </div>
        </div>
    )
}

export default PlayerDetailsComponent;