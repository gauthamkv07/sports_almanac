import React from "react";
import { useLocation } from "react-router-dom";
import './player_detail.pages.scss';

const PlayerDetailPage = () => {
    const { state } = useLocation();

    return(
        <div>{state.id}</div>
    )
} 

export default PlayerDetailPage;