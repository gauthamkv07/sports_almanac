import React from "react";
import './league.component.scss';

const LeagueComponent = ({data}) => {
    console.log(data);
    return (
        <div className="league-div">
            <img src={data.league.logo} alt="#" />
            <h1>{data.league.name}</h1>
        </div>
    )
}

export default LeagueComponent;