import React, { useEffect, useState } from "react";
import axios from "axios";
import './leagues.pages.scss';
import LeagueComponent from "../components/league.component";

const Leagues = () => {

    const [datas, setData] = useState([])

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            params: { country: 'England' },
            headers: {
                'X-RapidAPI-Key': '92ec2310a4mshff3d44ae1f7662ap127a45jsn83ef4fcbd902',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setData(response.data.response)
            console.log(datas);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div className="leagues-container">
            {
                datas.map((data) => (
                    <LeagueComponent key = {data.league.id} data = {data}/>
                ))
            }
        </div>
    )

}

export default Leagues;