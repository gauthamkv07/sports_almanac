import './App.css';
import Leagues from './pages/leagues.pages';
import { Routes, Route } from 'react-router-dom';
import LeagueDetail from './pages/league_detail.pages';
import TeamDetailPage from './pages/team_detail.pages';
import PlayerDetailPage from './pages/player_detail.pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Leagues />} />
        <Route exact path='/leagueDetails' element={<LeagueDetail />} />
        <Route exact path='/teamDetails' element={<TeamDetailPage />} />
        <Route exact path='playerDetails' element={<PlayerDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
