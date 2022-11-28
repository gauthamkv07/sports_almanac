import React from "react";
import { Image} from 'react-native';
import LoaderGif from'./loader.gif'
import './loader.component.scss'

const Loader = () => {
    return(
        <div className="loader">
            <img src={LoaderGif}/>
        </div>
    )
}

export default Loader;