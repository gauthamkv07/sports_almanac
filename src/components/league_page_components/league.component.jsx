import React from "react";
import { useNavigate } from "react-router-dom";
import './league.component.scss';

const LeagueComponent = ({data}) => {
    let navigate = useNavigate();
    return (
        <div className="league-div" onClick={()=> {navigate('/leagueDetails', {state: {id: data.league.id}})}}>
            <img src={data.league.logo} alt="#" />
            <h1>{data.league.name}</h1>
        </div>
    )
}

export default LeagueComponent;