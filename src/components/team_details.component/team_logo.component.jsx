import React from "react";
import './team_logo.component.scss';
import Title from "../title.component/title.component";

const TeamLogo = ({logo, name}) => {
    return (<div>
        <Title logo={logo} page_title={name}/>
        {/* <div><img className="team-logo-image" src={logo} alt="#" /></div>
        <div><h1 className="team-name">{name}</h1></div> */}
    </div>)
}

export default TeamLogo;