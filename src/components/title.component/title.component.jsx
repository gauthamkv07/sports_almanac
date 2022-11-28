import React from "react";
import { Link } from "react-router-dom";
import './title.component.scss'

const Title = ({logo,page_title}) =>{
    return(
        <div className="title">
            <div className="title-website-name{">
                <h1 style={{margin:'2rem'}}><Link to="/" style={{textDecoration:'none', color:'white',marginLeft:'1rem'}}>SPORTS ALMANAC</Link></h1>
            </div>
            {(logo == null )?null:
                <img className="title-logo-image" src={logo} alt="#"/>
            }
            {(page_title == null )?null:
                <h1>{page_title}</h1>
            }
        </div>
    )
}

export default Title;