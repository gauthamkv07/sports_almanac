import React from "react";
import './fixtures.component.scss';

const FixturesComponent = ({ data, team }) => {
    return (<div className="fixture-data">
        {team == data.teams.home.id ? <div>{data.teams.away.name}</div>
            : <div>{data.teams.home.name}</div>}
    </div>)
}

export default FixturesComponent;