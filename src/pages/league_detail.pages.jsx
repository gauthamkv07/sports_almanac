import React, { useEffect, useState } from "react";
import './leagues.pages.scss';
import axios from "axios";
import {useLocation} from 'react-router-dom';
import LeagueComponent from "../components/league_page_components/league.component";

const LeagueDetail = () => {
    const [leagueData, setLeagueData] = useState([])
    const location = useLocation();

    useEffect(() => {
        console.log("triggering effectively")
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            params: {season: '2020', league: '39'},
            headers: {
                'X-RapidAPI-Key': '92ec2310a4mshff3d44ae1f7662ap127a45jsn83ef4fcbd902',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setLeagueData(response)
            console.log(leagueData)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    
    return (
        <div>League</div>
    )
}

export default LeagueDetail;