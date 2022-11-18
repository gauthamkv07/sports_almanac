import React from "react";

const LeagueComponent = () => {
    return (
        data.map((data) => (
            <div key={data.league.id} className="league-div">
                <img src={data.league.logo} alt="#" />
                <h1>{data.league.name}</h1>
            </div>
        ))
    )
}

export default LeagueComponent;