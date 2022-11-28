import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './player_detail.pages.scss';
import PlayerDetailsComponent from "../components/player_details.component/players-details.component";
import PlayerStatisticsComponent from "../components/player_details.component/player-statistics.component";
import apiService from "../service/apiService";
import PlayerTitle from "../components/player_details.component/player-title.component";
import Loader from "../components/loader.component/loader.component";

const PlayerDetailPage = () => {
    const { state } = useLocation();

    const [datas, setData] = useState(null)

    useEffect(() => {
        const storedData = localStorage.getItem("playerData");
        const playerId = localStorage.getItem("playerId");
        const fetchData = async () => {
            try {
                apiService.getPlayerStatsbyPlayerid(state.id).then(function (response) {
                    setData(response.data.response)
                    localStorage.setItem("playerData", JSON.stringify(response.data.response))
                    localStorage.setItem("playerId", JSON.stringify(state.id))
                }).catch(function (error) {
                    console.error(error);
                });
            } catch (err) {
                // Handle Error
            }
        };
        if (playerId !== state.id.toString()) {
            fetchData();
        } else {
            setData(JSON.parse(storedData))
        }
    }, [state.id])

    return (
        <div>{
            datas === null ? <div><Loader/></div> :
                <div>
                    <PlayerTitle data={datas[0]} />
                    <div className="player-page">
                        <div className="player-detail">
                            <PlayerDetailsComponent data={datas[0]} />
                            <PlayerStatisticsComponent datas={datas[0].statistics} />
                        </div>
                    </div>
                </div>
        }</div>
    )
}

export default PlayerDetailPage;