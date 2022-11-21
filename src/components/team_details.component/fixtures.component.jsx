import React from "react";

const FixturesComponent = ({data}) => {
    return (<div>
        <div>{data.teams.away.name}</div>
        <div>{data.teams.home.name}</div>
    </div>)
}

export default FixturesComponent;