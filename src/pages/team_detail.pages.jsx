import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './team_detail.pages.scss';
import TeamLogo from "../components/team_details.component/team_logo.component.jsx";
import PlayerListComponent from "../components/team_details.component/player_list.component";
import TeamFixtures from "../components/team_details.component/team_fixtures.component";
import apiService from "../service/apiService";

const TeamDetailPage = () => {
    const [teamData, setTeamData] = useState(null)
    const { state } = useLocation();

    useEffect(() => {
        apiService.getTeamPlayerStatsbyTeamid(state.id).then(function (response) {
            setTeamData(response.data.response);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div className="team-page">
            <TeamLogo logo={state.logo} name={state.name} />
            <div className="team-data">
                {teamData == null ? <div>Loading...</div> :
                    <div className="team-align">
                        <div>
                            <TeamFixtures id={state.id} leagueid={state.leagueid} />
                        </div>
                        <PlayerListComponent datas={teamData} />
                    </div>
                }
            </div>
        </div>
    )
}

export default TeamDetailPage;