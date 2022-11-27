import React, { useState } from 'react';
import Stats from "./stats.component";
import Statscompressed from './stats-compressed.component';

const Collapsible = ({ datas }) => {
    const [isExpanded, setExpanded] = useState(false);

    function handleClick() {
        setExpanded(!isExpanded);
    }

    return (
        <div>
            <div onClick={handleClick}>
                {isExpanded ? <Stats data={datas} /> : <Statscompressed data={datas} />}
            </div>
            <div>
            </div>
        </div>
    );
}

export default Collapsible;