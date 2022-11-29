import React, { useEffect, useState } from "react";
import './leagues.pages.scss';
import LeagueListComponent from "../components/league_page_components/leageuelist.component";
import apiService from "../service/apiService";
import Title from "../components/title.component/title.component";
import Loader from "../components/loader.component/loader.component";

const Leagues = () => {
    const [datas, setData] = useState([])

    useEffect(() => {
        window.onbeforeunload = () => {localStorage.removeItem("datas")}
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
            <Title show = "" page_title = "SPORTS ALMANAC"/>
            <div>
                {/* <div className="leagues-title">Sports Almanac</div> */}
                {datas == null ? <div><Loader/></div> : <div className="league-tile-conatiner"><LeagueListComponent datas={datas} /></div>}
            </div>
        </div>

    )

}

export default Leagues;