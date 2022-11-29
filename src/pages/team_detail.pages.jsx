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
        window.onbeforeunload = () => {
            setTeamData(null);
            fetchData();
        }
        const localTeamData = localStorage.getItem("teamData");
        const teamId = localStorage.getItem("teamId");
        const localStatus = localStorage.getItem("status");

        const fetchData = async () => {
            try {
                apiService.getTeamPlayerStatsbyTeamid(state.id).then(function (response) {
                    setTeamData(response.data.response);
                    localStorage.setItem("teamData", JSON.stringify(response.data.response))
                    localStorage.setItem("status", JSON.stringify(status))
                    localStorage.setItem("teamId", JSON.stringify(state.id))
                }).catch(function (error) {
                    console.error(error);
                });
            } catch (err) {
                // Handle Error
            }
        };
        if (teamId !== state.id.toString()) {
            fetchData();
        } else {
            setTeamData(JSON.parse(localTeamData))
            setStatus(JSON.parse(localStatus))
        }
    }, [state.id, status])

    function updateStatus(newStatus) {
        setStatus(newStatus);
        localStorage.setItem("status", JSON.stringify(newStatus))
    }
    return (
        <div className="team-page">
            <div className="team-status">
                <TeamLogo logo={state.logo} name={state.name} />
                <StatusBar status={status} handleClick={updateStatus} />
            </div>
            {teamData == null ? <div className="loader-space"><div className="loader"></div></div> :
                <div className="team-data">
                    <div className="team-align">
                        {
                            {
                                'results': <div>
                                    <TeamFixtures id={state.id} leagueid={state.leagueid} />
                                </div>,
                                'players': <PlayerListComponent datas={teamData} />
                            }[status]
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default TeamDetailPage;