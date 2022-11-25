import React from "react";
import { useNavigate } from "react-router-dom";
import './player_list.component.scss';

const PlayerListComponent = ({ datas }) => {
    let navigate = useNavigate()

    function navigateToPlayerDetailPage(playerId) {
        navigate('/playerDetails', { state: { id: playerId } });
        localStorage.removeItem("playerId");
    }

    return (<div className="player-detail-container">
        {
            datas.map((data) => (
                <div key={data.player.id} className="player-div" onClick={() => { navigateToPlayerDetailPage(data.player.id) }}>
                    <div className="player-image-holder"><img className="player-image" src={data.player.photo} alt="#" /></div>
                    <div className="player-name">{data.player.firstname}{" "}{data.player.lastname}</div>
                </div>
            ))
        }
    </div>)
}

export default PlayerListComponent;