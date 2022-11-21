import React, { useEffect, useState } from "react";
import './league_detail.pages.scss';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import LogoComponent from "../components/league_details.component/logo.component";
import TableComponent from "../components/league_details.component/table.component";

const LeagueDetail = () => {
    const [leagueData, setLeagueData] = useState(null)
    const { state } = useLocation();

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            params: { season: '2022', league: state.id },
            headers: {
                'X-RapidAPI-Key': '92ec2310a4mshff3d44ae1f7662ap127a45jsn83ef4fcbd902',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setLeagueData(response.data.response[0])
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return <div>{
        leagueData == null ? <div>loading</div> :
            <div className="league-detail">
                <div className="league-align">
                    <LogoComponent data={leagueData} />
                    <TableComponent className = "points-table" datas={leagueData.league.standings} id = {state.id} />
                </div>
            </div>}</div>

}

export default LeagueDetail;