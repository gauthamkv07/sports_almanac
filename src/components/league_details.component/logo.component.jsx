import React from "react";
// import { useNavigate } from "react-router-dom";
import './logo.component.scss';
import Title from "../title.component/title.component";

const LogoComponent = ({data}) => {
    // let navigate = useNavigate();
    return (
        <div>
            <Title logo={data.league.logo} page_title={data.league.name}/>
            {/* <img className = "logo-image"src={data.league.logo} alt="#" />
            <h1>{data.league.name}</h1> */}
        </div>
    )
}

export default LogoComponent;

// onClick={()=> {navigate('/leagueDetails', {state: {id: data.league.id}})}}