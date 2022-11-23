import React from "react";
import { useNavigate } from "react-router-dom";
import './league.component.scss';

const LeagueComponent = ({ data }) => {
    let navigate = useNavigate();

    function navigateToLeagueDetailPage(leagueId) {
        navigate('/leagueDetails', { state: { id: leagueId } });
        localStorage.removeItem("leagueid");
    }

    return (
        <div className="league-div" onClick={() => { navigateToLeagueDetailPage(data.league.id) }}>
            <img src={data.league.logo} alt="#" />
            <h1>{data.league.name}</h1>
        </div>
    )
}

export default LeagueComponent;