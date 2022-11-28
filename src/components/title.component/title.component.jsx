import React from "react";
import { Link } from "react-router-dom";
import './title.component.scss'

const Title = ({logo,page_title}) =>{
    return(
        <div className="title">
            <div className="title-website-name">
                <div><Link to="/" style={{textDecoration:'none', color:'white'}}>SPORTS ALMANAC</Link></div>
            </div>
            {(logo == null )?null:
                <img className="title-logo-image" src={logo} alt="#"/>
            }
            {(page_title == null )?null:
                <div>{page_title}</div>
            }
        </div>
    )
}

export default Title;