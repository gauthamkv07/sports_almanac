import React from "react";
import { useNavigate } from "react-router-dom";
import './table.component.scss';



const TableComponent = ({ datas }) => {
    let navigate = useNavigate();
    return (
        <div className="league-table">
            <table className="league-table-header">
                <tr className="league-table-head">
                    <th className="team">Club</th>
                    <th className="wld">W</th>
                    <th className="wld">L</th>
                    <th className="wld">D</th>
                    <th className="wld">GF</th>
                    <th className="wld">GA</th>
                    <th className="wld">GD</th>
                    <th className="wld">P</th>
                </tr>
                {
                    datas.map((data) => (
                        data.map((sd) => (
                            <tr className="league-row" key={sd.team.id} 
                                onClick={()=> {navigate('/teamDetails', {state: {id: sd.team.id, name: sd.team.name, logo: sd.team.logo}})}}>
                                <td className="team"><span><img  className = "image" src={sd.team.logo} alt="#" /></span>{sd.team.name}</td>
                                <td className="wld">{sd.all.win}</td>
                                <td className="wld">{sd.all.lose}</td>
                                <td className="wld">{sd.all.draw}</td>
                                <td className="wld">{sd.all.goals.for}</td>
                                <td className="wld">{sd.all.goals.against}</td>
                                <td className="wld">{sd.goalsDiff}</td>
                                <td className="wld">{sd.points}</td>
                            </tr>
                        ))
                    ))
                }
            </table>
        </div>
    )
}

export default TableComponent;