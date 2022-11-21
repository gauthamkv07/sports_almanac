import React, { useEffect, useState } from "react";
import './team_fixtures.component.scss';
import FixturesTableComponent from "./fixture_results.component/fixtures_table.component";
import apiService from "../../service/apiService";

const TeamFixtures = ({ id, leagueid }) => {
    const [team, setTeam] = useState(null)
    const [datas, setData] = useState(null)

    useEffect(() => {
        apiService.getFixturesbyTeamid(id, leagueid).then(function (response) {
            setTeam(response.data.parameters.team)
            setData(response.data.response)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (<div className="fixtures-list">
        {datas == null ? <div>hi</div> : <div className="fixtures">
            <FixturesTableComponent datas={datas} team={team.toString()} />
        </div>}
    </div>)
}

export default TeamFixtures;