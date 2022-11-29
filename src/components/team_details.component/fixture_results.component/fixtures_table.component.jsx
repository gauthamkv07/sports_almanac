import React, { useEffect, useRef } from "react";
import FixturesResultsComponent from "./fixtures_results.component";
import './fixtures_table.component.scss';

const FixturesTableComponent = ({ datas, team }) => {
    const ref = useRef(null);
    var div = useRef(0);
    useEffect(() => {
        window.onbeforeunload = () => {
            localStorage.removeItem("fixtures-table-scroll-position");}
        const element = ref.current;

        element.addEventListener("scroll", setScrollPostion);
        const getScrollposition = JSON.parse(localStorage.getItem("fixtures-table-scroll-position"));
        if (getScrollposition != null) {
            div.current = getScrollposition;
            if (getScrollposition != null) document.getElementById("fixtures-tables").scrollTop = getScrollposition;
        }

        return () => {
            setScrollinCache();
        }
    }, []);

    function setScrollinCache() {
        localStorage.setItem("fixtures-table-scroll-position", JSON.stringify(div.current));
    }

    function setScrollPostion() {
        div.current = (document.getElementById("fixtures-tables").scrollTop);
    }

    return (<div id="fixtures-tables" ref={ref} className="fixtures">
        <table className="fixture-table">
            <thead>
                <tr className="fixture-table-head">
                    <div className="played-team">Home</div>
                    <div className="score">Score</div>
                    <div className="played-away-team">Away</div>
                    <div className="time">Start time</div>
                </tr>
            </thead>
            <tbody>
                {datas.filter((data) => data.fixture.status.long === "Match Finished").map((data) => (<FixturesResultsComponent key={data.fixture.id} data={data} team={team.toString()} />))}
                <tr className="empty-space"></tr>
            </tbody>
        </table>
    </div>)
}

export default FixturesTableComponent;