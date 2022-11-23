import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './team_detail.pages.scss';
import TeamLogo from "../components/team_details.component/team_logo.component.jsx";
import PlayerListComponent from "../components/team_details.component/player_list.component";
import TeamFixtures from "../components/team_details.component/team_fixtures.component";
import apiService from "../service/apiService";
import StatusBar from "../components/team_details.component/status_bars.component/status_bars.component";

const TeamDetailPage = () => {
    const [teamData, setTeamData] = useState(null)
    const { state } = useLocation();
    const [status, setStatus] = useState('results')

    useEffect(() => {
        apiService.getTeamPlayerStatsbyTeamid(state.id).then(function (response) {
            setTeamData(response.data.response);
        }).catch(function (error) {
            console.error(error);
        });
    }, [state.id, teamData, status])

    function updateStatus(newStatus) {
        console.log(newStatus);
        setStatus(newStatus);
    }

    return (
        <div className="team-page">
            <div className="team-status">
                <TeamLogo logo={state.logo} name={state.name} />
                <StatusBar status={status} handleClick={updateStatus} />
            </div>
            <div className="team-data">
                {teamData == null ? <div>Loading...</div> :
                    <div className="team-align">
                        {
                            {
                                'results': <div>
                                    <TeamFixtures id={state.id} leagueid={state.leagueid} />
                                </div>,
                                'standings': <PlayerListComponent datas={teamData} />
                            }[status]
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default TeamDetailPage;