import React from "react";
import { useNavigate } from "react-router-dom";
import './logo.component.scss';

const LogoComponent = ({data}) => {
    let navigate = useNavigate();
    return (
        <div className="logo-div" onClick={()=> {navigate('/leagueDetails', {state: {id: data.league.id}})}}>
            <img src={data.league.logo} alt="#" />
            <h1>{data.league.name}</h1>
        </div>
    )
}

export default LogoComponent;