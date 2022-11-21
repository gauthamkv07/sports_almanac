import React, { useEffect, useState } from "react";
import './team_fixtures.component.scss';
import axios from "axios";
import FixturesTableComponent from "./fixture_results.component/fixtures_table.component";

const TeamFixtures = ({ id, leagueid }) => {
    const [team, setTeam] = useState(null)
    const [datas, setData] = useState(null)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            params: { season: '2022', team: id, league: leagueid },
            headers: {
                'X-RapidAPI-Key': '92ec2310a4mshff3d44ae1f7662ap127a45jsn83ef4fcbd902',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
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