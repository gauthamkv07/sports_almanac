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
    }, [datas])

    return (
        <div className="leagues-container">
            <div className="leagues-title">Sports Almanac</div>
            {datas == null ? <div>Loading...</div> : <div className="leagues-tiles">
                {
                    datas.map((data) => (
                        <LeagueComponent key={data.league.id} data={data} />
                    ))
                }
            </div>}
        </div>
    )

}

export default Leagues;