import React from "react";
import { useNavigate } from "react-router-dom";
import './league.component.scss';

const LeagueComponent = ({ data }) => {
    let navigate = useNavigate();

    function navigateToLeagueDetailPage(leagueId) {
        navigate('/leagueDetails', { state: { id: leagueId } });
        localStorage.removeItem("leagueid");
        localStorage.removeItem("league-scroll-position");
    }

    return (
        <div className="league-div" onClick={() => { navigateToLeagueDetailPage(data.league.id) }}>
            <div className="league-image-holder"><img className="league-image" src={data.league.logo} alt="#" /></div>
            <div className="league-name">{data.league.name}</div>
        </div>
    )
}

export default LeagueComponent;