import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './player_detail.pages.scss';
import PlayerDetailsComponent from "../components/player_details.component/players-details.component";
import PlayerStatisticsComponent from "../components/player_details.component/player-statistics.component";
import apiService from "../service/apiService";

const PlayerDetailPage = () => {
    const { state } = useLocation();

    const [datas, setData] = useState(null)

    useEffect(() => {
        apiService.getPlayerStatsbyPlayerid(state.id).then(function (response) {
            setData(response.data.response)
        }).catch(function (error) {
            console.error(error);
        });
    }, [state.id])

    return (
        <div>{
            datas == null ? <div>Loading...</div> :
                <div>
                    <div className="player-detail">
                        <PlayerDetailsComponent data={datas[0]} />
                        <PlayerStatisticsComponent datas={datas[0].statistics} />
                    </div>
                </div>
        }</div>
    )
}

export default PlayerDetailPage;