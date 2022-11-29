import React from "react";
import { Link } from "react-router-dom";
import './title.component.scss'

const Title = ({show,logo,page_title}) =>{
    return(
        <div className="title">
            {show == null ? <div className="title-website-name">
                <Link to="/" style={{textDecoration:'none', color:'white'}}>SPORTS ALMANAC 2022</Link>
            </div>: null}
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