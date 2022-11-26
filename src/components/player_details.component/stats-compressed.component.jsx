import './stats-compressed.component.scss';
import expandArrow from './expandArrow.png'

const Statscompressed = ({data}) => {
    return (
        <div>
            {/* <h3>{data.league.name}</h3> */}
            <div className="stats-compressed-detail">
                    <h3>{data.league.name}</h3>
                    <div><p>Appearances: {data.games.appearences?data.games.appearences:0}</p></div>
                    <div><p>Average Rating: {data.games.rating?data.games.rating:0}</p></div>
                    <div><img className="expand-arrow" src={expandArrow} alt="logo"/></div>
            </div>
        </div>
    )
}

export default Statscompressed;