import React from "react";
import './table.component.scss';

const TableComponent = ({ datas }) => {
    return (
        <div className="league-table">
            <div className="league-table-head">
                <span className="pos">pos</span>
                <span className="team">Team</span>
                <span className="wld">Win</span>
                <span className="wld">Loss</span>
                <span className="wld">Draw</span>
            </div>
            <div className="league-content">
                {
                    datas.map((data) => (
                        data.map((sd) => (
                            <div style={{ background: sd.rank % 2 == 0 ? 'grey' : 'white' }} className = "league-row" key={sd.id}>
                                <span className="pos">{sd.rank}</span>
                                <span className="team">{sd.team.name}</span>
                                <span className="wld">{sd.all.win}</span>
                                <span className="wld">{sd.all.lose}</span>
                                <span className="wld">{sd.all.draw}</span>
                            </div>
                        ))
                    ))
                }
            </div>
        </div>
    )
}

export default TableComponent;