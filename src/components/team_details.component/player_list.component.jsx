import React, {useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import './player_list.component.scss';

const PlayerListComponent = ({ datas }) => {
    let navigate = useNavigate()
    const ref = useRef(null);
    var div = useRef(0);
    useEffect(() => {
        window.onbeforeunload = () => {
            localStorage.removeItem("player-list-scroll-position");}
        const element = ref.current;

        element.addEventListener("scroll", setScrollPostion);
        const getScrollposition = JSON.parse(localStorage.getItem("player-list-scroll-position"));
        if (getScrollposition != null) {
            div.current = getScrollposition;
            if (getScrollposition != null) document.getElementById("player-list").scrollTop = getScrollposition;
        }

        return () => {
            setScrollinCache();
        }
    }, []);

    function setScrollinCache() {
        localStorage.setItem("player-list-scroll-position", JSON.stringify(div.current));
    }

    function setScrollPostion() {
        div.current = (document.getElementById("player-list").scrollTop);
    }

    function navigateToPlayerDetailPage(playerId) {
        navigate('/playerDetails', { state: { id: playerId } });
        localStorage.removeItem("playerId");
    }

    return (<div id ="player-list" ref = {ref} className="player-detail">
        <div className="player-detail-container">{
            datas.map((data) => (
                <div key={data.player.id} className="player-div" onClick={() => { navigateToPlayerDetailPage(data.player.id) }}>
                    <div className="player-image-holder"><img className="player-image" src={data.player.photo} alt="#" /></div>
                    <div className="player-name">{data.player.firstname}{" "}{data.player.lastname}</div>
                </div>
            ))
        }</div>
        <div className="empty-space"></div>
    </div>)
}

export default PlayerListComponent;