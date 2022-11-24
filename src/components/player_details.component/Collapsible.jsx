import React from 'react';
import useCollapse from 'react-collapsed';
import Stats from "./stats.component";
import Statscompressed from './stats-compressed.component';

const Collapsible = ({datas}) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div>
            <div {...getToggleProps()}>
                {isExpanded ? <Stats data={datas}/> : <Statscompressed data={datas}/>}
            </div>
            <div {...getCollapseProps()}>
            </div>
        </div>
        );
}

export default Collapsible;