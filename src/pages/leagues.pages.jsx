import React, { useEffect, useState } from "react";
import './leagues.pages.scss';
import LeagueComponent from "../components/league_page_components/league.component";
import apiService from "../service/apiService";

const Leagues = () => {
    const [datas, setData] = useState([])

    useEffect(() => {
        apiService.getLeagueData().then(function (response) {
            setData(response.data.response)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div className="leagues-container">
            <h1 className="leagues-title">Sports Almanac</h1>
            <div className="leagues-tiles">
                {
                    datas.map((data) => (
                        <LeagueComponent key={data.league.id} data={data} />
                    ))
                }
            </div>
        </div>
    )

}

export default Leagues;