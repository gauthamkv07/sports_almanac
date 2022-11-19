import React from "react";

const TeamLogo = ({logo, name}) => {
    return (<div className="team">
        <img src={logo} alt="#" />
        <h1>{name}</h1>
    </div>)
}

export default TeamLogo;