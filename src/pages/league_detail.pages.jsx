import React, { useEffect, useState } from "react";
import './league_detail.pages.scss';
import { useLocation } from 'react-router-dom';
import LogoComponent from "../components/league_details.component/logo.component";
import TableComponent from "../components/league_details.component/table.component";
import apiService from "../service/apiService";

const LeagueDetail = () => {
    const [leagueData, setLeagueData] = useState(null)
    const { state } = useLocation();

    useEffect(() => {
        window.onbeforeunload = () => {
            localStorage.removeItem("leagueid");
            localStorage.removeItem("league-scroll-position");
        }
        const leagueid = localStorage.getItem("leagueid");
        const localLeagueData = localStorage.getItem("leagueData")

        const fetchData = async () => {
            try {
                apiService.getStandingsbyLeagueid(state.id).then(function (response) {
                    setLeagueData(response.data.response[0])
                    localStorage.setItem("leagueData", JSON.stringify(response.data.response[0]))
                    localStorage.setItem("leagueid", state.id)
                }).catch(function (error) {
                    console.error(error);
                });
            } catch (err) {
                // Handle Error
            }
        };
        if (leagueid !== state.id.toString()) {
            fetchData();
        } else {
            setLeagueData(JSON.parse(localLeagueData));
        }
    }, [state.id])

    return <div>{
        leagueData == null ? <div>loading</div> :
            <div className="league-detail">
                    <LogoComponent data={leagueData} />
                    <TableComponent className="points-table" datas={leagueData.league.standings} id={state.id} />
            </div>}</div>

}

export default LeagueDetail;