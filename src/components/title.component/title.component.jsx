import React from "react";
import { Link } from "react-router-dom";
import './title.component.scss'

const Title = () =>{
    return(
        <div className="link">
            <h1><Link to="/" style={{textDecoration:'none', color:'white',marginLeft:'1rem'}}>SPORTS ALMANAC</Link></h1>
        </div>
    )
}

export default Title;