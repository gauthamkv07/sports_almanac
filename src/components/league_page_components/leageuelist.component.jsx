import './leageuelist.component.scss';
import LeagueComponent from "./league.component";
import React, { useEffect, useRef } from 'react';

const LeagueListComponent = ({ datas }) => {
    const ref = useRef(null);
    var div = useRef(0);

    const list = new Set(["Premier League", "Championship", "National League", "League One", "League Two",
        "FA WSL", "National League - North", "National League - South", "Non League Div One - Isthmian North",
        "Non League Div One - Isthmian South Central", "Non League Div One - Northern West",
        "Non League Div One - Northern Midlands"])

    useEffect(() => {
        const element = ref.current;

        element.addEventListener("scroll", setScrollPostion);
        const getScrollposition = JSON.parse(localStorage.getItem("home-scroll-position"));
        if (getScrollposition != null) {
            div.current = getScrollposition;
            if (getScrollposition != null) document.getElementById("home-div").scrollTop = getScrollposition;
        }

        return () => {
            setScrollinCache();
        }
    }, [])

    function setScrollinCache() {
        localStorage.setItem("home-scroll-position", JSON.stringify(div.current));
    }

    function setScrollPostion() {
        div.current = (document.getElementById("home-div").scrollTop);
    }

    //.filter((data) => list.has(data.league.name))
    return (<div id="home-div" ref={ref} className="leagues-tiles">
        {
            datas.map((data) => (
                <LeagueComponent key={data.league.id} data={data} />
            ))
        }
    </div>)
}

export default LeagueListComponent;