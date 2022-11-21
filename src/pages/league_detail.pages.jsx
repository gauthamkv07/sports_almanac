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
        apiService.getStandingsbyLeagueid(state.id).then(function (response) {
            setLeagueData(response.data.response[0])
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return <div>{
        leagueData == null ? <div>loading</div> :
            <div className="league-detail">
                <div className="league-align">
                    <LogoComponent data={leagueData} />
                    <TableComponent className="points-table" datas={leagueData.league.standings} id={state.id} />
                </div>
            </div>}</div>

}

export default LeagueDetail;