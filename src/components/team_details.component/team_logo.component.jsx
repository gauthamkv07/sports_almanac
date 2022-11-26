import React from "react";
import './team_logo.component.scss';

const TeamLogo = ({logo, name}) => {
    return (<div className="team-logo">
        <div><img className="team-logo-image" src={logo} alt="#" /></div>
        <div><h1 className="team-name">{name}</h1></div>
    </div>)
}

export default TeamLogo;