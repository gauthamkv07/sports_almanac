import React from "react";
import LoaderGif from'./loader.gif'
import './loader.component.scss'

const Loader = () => {
    return(
        <div className="loader">
            <img src={LoaderGif} alt = "#"/>
        </div>
    )
}

export default Loader;