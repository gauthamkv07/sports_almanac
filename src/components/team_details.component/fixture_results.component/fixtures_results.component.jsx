import React, { useEffect, useState } from "react";
import './fixtures_results.component.scss';

const FixturesResultsComponent = ({ data, team }) => {
    const [matchdate, setDate] = useState("")

    useEffect(() => {
        var date = new Date(data.fixture.date);
        setDate(date.toString().substring(0, 24))
    }, [data.fixture.date])

    return (<tr className="fixture-row">
        <td className="player-team">
            <div className="img-txt">
                <div><img style={{ width: '25px', height: '25px', marginRight: '1rem' }} src={data.teams.home.logo} alt="#" /></div>
                <div>{data.teams.home.name}</div>
            </div>
        </td>
        {<td className="score">{data.goals.home}-{data.goals.away}</td>}
        <td className="player-team">
            <div className="img-txt">
                <div><img style={{ width: '25px', height: '25px', marginRight: '1rem' }} src={data.teams.away.logo} alt="#" /></div>
                <div>{data.teams.away.name}</div>
            </div>
        </td>
        <td className="time">{matchdate}</td>
    </tr>)
}

export default FixturesResultsComponent;