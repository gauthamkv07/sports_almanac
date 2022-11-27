import './stats-compressed.component.scss';
import expandArrow from './expandArrow.png'

const Statscompressed = ({ data }) => {
    return (
        <div>
            {/* <h3>{data.league.name}</h3> */}
            <div className="stats-compressed-detail">
                <div className='arrow-space'><img className="expand-arrow" src={expandArrow} alt="logo" /></div>
                <h3 className='stats-league-name'>{data.league.name}</h3>
                <div className='stat-space'><div className='header-text'>Appearances:&nbsp;</div>{data.games.appearences ? data.games.appearences : 0}</div>
                <div className="stat-space"><div className="header-text">Goals:&nbsp;</div>{data.goals.total ? data.goals.total : 0}</div>
                <div className='stat-space'><div className='header-text'>Average Rating:&nbsp;</div>{data.games.rating ? data.games.rating.substring(0, 4) : 0}</div>
            </div>
        </div>
    )
}

export default Statscompressed;