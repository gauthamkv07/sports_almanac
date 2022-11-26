import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './table.component.scss';



const TableComponent = ({ datas, id }) => {
    let navigate = useNavigate();
    const ref = useRef(null);
    var div = useRef(0);

    useEffect(() => {
        const element = ref.current;

        element.addEventListener("scroll", setScrollPostion);
        const getScrollposition = JSON.parse(localStorage.getItem("league-scroll-position"));
        if (getScrollposition != null) {
            div.current = getScrollposition;
            if (getScrollposition != null) document.getElementById("league-table-div").scrollTop = getScrollposition;
        }

        return () => {
            setScrollinCache();
        }
    }, [])

    function setScrollinCache() {
        localStorage.setItem("league-scroll-position", JSON.stringify(div.current));
    }

    function setScrollPostion() {
        div.current = (document.getElementById("league-table-div").scrollTop);
    }

    function navToTeamDetailPage(sid, name, logo, leagueid) {
        navigate('/teamDetails', { state: { id: sid, name: name, logo: logo, leagueid: leagueid } });
        localStorage.removeItem("teamId");
        localStorage.removeItem("fixtures-table-scroll-position")
    }

    return (
        <div id="league-table-div" ref={ref} className="league-table">
            <table className="league-table-header">
                <thead>
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
                </thead>
                <tbody>
                    {
                        datas.map((data) => (
                            data.map((sd) => (
                                <tr className="league-row" key={sd.team.id}
                                    onClick={() => { navToTeamDetailPage(sd.team.id, sd.team.name, sd.team.logo, id) }}>
                                    <td className="team">
                                        <div className="img-txt">
                                            <div><img className="image" src={sd.team.logo} alt="#" /></div>
                                            <div>{sd.team.name}</div>
                                        </div>
                                    </td>
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
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent;