import React from "react";
import { useNavigate } from "react-router-dom";

const PlayerListComponent = ({ datas }) => {
    let navigate = useNavigate()

    console.log(datas)
    return (<div>
        {
            datas.map((data) => (
                <div onClick={() => { navigate('/playerDetails', { state: {id: data.player.id} }) }}>{data.player.firstname}</div>
            ))
        }
    </div>)
}

export default PlayerListComponent;