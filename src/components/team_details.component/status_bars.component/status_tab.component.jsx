import React from "react";
import './status_tab.component.scss';

const StatusTab = ({ children, cname, handleClick, status }) => {
    return (
        <div className={cname} onClick={() => handleClick(status)}>
            <span className="status-tab">{children}</span>
        </div>
    )
}

export default StatusTab;