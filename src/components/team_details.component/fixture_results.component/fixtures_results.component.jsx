import React, { useEffect, useState } from "react";
import './fixtures_results.component.scss';

const FixturesResultsComponent = ({ data, team }) => {
    const [matchdate, setDate] = useState("")

    useEffect(() => {
        var date = new Date(data.fixture.date);
        setDate(date.toString().substring(0, 24))
    }, [data.fixture.date])

    return (<tr className="fixture-row">
        <td className="played-against">{team === data.teams.home.id ? data.teams.away.name : data.teams.home.name}</td>
        {team === data.teams.home.id ? <td className="score">{data.goals.away}-{data.goals.home}</td>
            : <td className="score">{data.goals.home}-{data.goals.away}</td>}
        <td className="time">{matchdate}</td>
    </tr>)
}

export default FixturesResultsComponent;