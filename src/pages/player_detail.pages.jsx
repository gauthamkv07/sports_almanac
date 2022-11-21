import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import './player_detail.pages.scss';
import PlayerDetailsComponent from "../components/player_details.component/players-details.component";
import PlayerStatisticsComponent from "../components/player_details.component/player-statistics.component";

const PlayerDetailPage = () => {
    const { state } = useLocation();

    const [datas, setData] = useState(null)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/players',
            params: { id: state.id, season: '2022' },
            headers: {
                'X-RapidAPI-Key': '92ec2310a4mshff3d44ae1f7662ap127a45jsn83ef4fcbd902',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setData(response.data.response)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div>{
            datas == null ? <div>Loading...</div> :
                <div>
                    <div className="player-detail">
                        <PlayerDetailsComponent data = {datas[0]}/>
                        <PlayerStatisticsComponent datas = {datas[0].statistics}/>
                    </div>
                </div>
        }</div>
    )
}

export default PlayerDetailPage;