import React, { useEffect, useState } from "react";
import './leagues.pages.scss';
import LeagueListComponent from "../components/league_page_components/leageuelist.component";
import apiService from "../service/apiService";

const Leagues = () => {
    const [datas, setData] = useState([])

    useEffect(() => {
        const storedData = localStorage.getItem("datas");
        const fetchData = async () => {
            try {
                apiService.getLeagueData().then(function (response) {
                    setData(response.data.response)
                    localStorage.setItem("datas", JSON.stringify(response.data.response))
                }).catch(function (error) {
                    console.error(error);
                });
            } catch (err) {
                console.error(err);
            }
        };
        if (!storedData) {
            fetchData();
        } else {
            setData(JSON.parse(storedData))
        }
    }, [])

    return (
        <div className="leagues-container">
            <div className="leagues-title">Sports Almanac</div>
            {datas == null ? <div>Loading...</div> : <LeagueListComponent datas={datas} />}
        </div>
    )

}

export default Leagues;