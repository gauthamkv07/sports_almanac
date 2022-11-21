import React, { useEffect } from "react";
import FixturesResultsComponent from "./fixtures_results.component";
import './fixtures_table.component.scss';

const FixturesTableComponent = ({ datas, team }) => {
    useEffect(() => { }, []);

    return (<div>
        <table className="fixture-table">
            <tr className="fixture-table-head">
                <th className="played-against">Played against</th>
                <th className="score">Score</th>
                <th className="time">Time</th>
            </tr>
            {datas.filter((data) => data.fixture.status.long == "Match Finished").map((data) => (<FixturesResultsComponent key={data.fixture.id} data={data} team={team.toString()} />))}
        </table>
    </div>)
}

export default FixturesTableComponent;