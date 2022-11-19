import React from "react";
import './table.component.scss';

const TableComponent = ({ datas }) => {
    return (
        <div className="league-table">
            <table className="league-table-header">
                <tr className="league-table-head">
                    <th className="pos">pos</th>
                    <th className="team">Team</th>
                    <th className="wld">Win</th>
                    <th className="wld">Loss</th>
                    <th className="wld">Draw</th>
                </tr>
                {
                    datas.map((data) => (
                        data.map((sd) => (
                            <tr className="league-row" key={sd.id}>
                                <td className="pos">{sd.rank}</td>
                                <td className="team">{sd.team.name}</td>
                                <td className="wld">{sd.all.win}</td>
                                <td className="wld">{sd.all.lose}</td>
                                <td className="wld">{sd.all.draw}</td>
                            </tr>
                        ))
                    ))
                }
            </table>
        </div>
    )
}

export default TableComponent;