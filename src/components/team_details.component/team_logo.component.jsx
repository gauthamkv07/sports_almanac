import React from "react";
import './team_logo.component.scss';

const TeamLogo = ({logo, name}) => {
    return (<div className="team-logo">
        <img className="team-logo-image" src={logo} alt="#" />
        <h1 className="team-name">{name}</h1>
    </div>)
}

export default TeamLogo;