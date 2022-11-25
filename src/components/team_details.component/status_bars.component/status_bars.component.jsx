import React from "react";
import './status_bars.component.scss';
import StatusTab from "./status_tab.component";

const StatusBar = ({ status, handleClick }) => {

    return (
        <div className="status-bar">
            <StatusTab cname={status === "results" ? "hg" : ""} status="results" handleClick={handleClick}>Results</StatusTab>
            <StatusTab cname={status === "players" ? "hg" : ""} status="players" handleClick={handleClick}>Players</StatusTab>
        </div>
    )
}

export default StatusBar;