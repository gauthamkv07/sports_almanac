import React, { useEffect, useState } from "react";
import './team_fixtures.component.scss';
import FixturesTableComponent from "./fixture_results.component/fixtures_table.component";
import apiService from "../../service/apiService";

const TeamFixtures = ({ id, leagueid }) => {
    const [team, setTeam] = useState(null)
    const [datas, setData] = useState(null)

    useEffect(() => {
        const localTeamFixturesData = localStorage.getItem("teamFixturesData");
        const teamId = localStorage.getItem("teamIdResult");
        const localTeam = localStorage.getItem("team");

        const fetchData = async () => {
            try {
                apiService.getFixturesbyTeamid(id, leagueid).then(function (response) {
                    setTeam(response.data.parameters.team)
                    localStorage.setItem("team", JSON.stringify(response.data.parameters.team))
                    setData(response.data.response)
                    localStorage.setItem("teamFixturesData", JSON.stringify(response.data.response))
                    localStorage.setItem("teamIdResult", JSON.stringify(id))
                }).catch(function (error) {
                    console.error(error);
                });
            } catch (err) {
                // Handle Error
            }
        };
        if (teamId !== id.toString()) {
            fetchData();
        } else {
            setData(JSON.parse(localTeamFixturesData))
            setTeam(JSON.parse(localTeam))
        }
    }, [id, leagueid])

    return (<div className="fixtures-list">
        {datas == null ? <div>hi</div> : <div className="fixtures">
            <FixturesTableComponent datas={datas} team={team.toString()} />
        </div>}
    </div>)
}

export default TeamFixtures;