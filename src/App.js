import './App.css';
import Leagues from './pages/leagues.pages';
import { Routes, Route } from 'react-router-dom';
import LeagueDetail from './pages/league_detail.pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Leagues />} />
        <Route exact path='/leagueDetails' element = {<LeagueDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
