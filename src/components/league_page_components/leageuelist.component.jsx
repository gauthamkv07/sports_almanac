import React from "react";
import './leageuelist.component.scss';
import LeagueComponent from "./league.component";

const LeagueListComponent = ({ datas }) => {

    const list = new Set(["Premier League", "Championship", "National League", "League One", "League Two",
        "FA WSL", "National League - North", "National League - South", "Non League Div One - Isthmian North",
        "Non League Div One - Isthmian South Central", "Non League Div One - Northern West",
        "Non League Div One - Northern Midlands"])

        // .filter((data) => list.has(data.league.name))
    return (<div className="leagues-tiles">
        {
            datas.map((data) => (
                <LeagueComponent key={data.league.id} data={data} />
            ))
        }
    </div>)
}

export default LeagueListComponent;