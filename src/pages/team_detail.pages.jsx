import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './team_detail.pages.scss';
import axios from "axios";
import TeamLogo from "../components/team_details.component/team_logo.component.jsx";
import PlayerListComponent from "../components/team_details.component/player_list.component";
import TeamFixtures from "../components/team_details.component/team_fixtures.component";

const TeamDetailPage = () => {
    const [teamData, setTeamData] = useState(null)
    const { state } = useLocation();

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/players',
            params: { team: state.id, season: '2022' },
            headers: {
                'X-RapidAPI-Key': '92ec2310a4mshff3d44ae1f7662ap127a45jsn83ef4fcbd902',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
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