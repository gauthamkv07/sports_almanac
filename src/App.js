import './App.css';
import Leagues from './pages/leagues.pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Leagues />} />
      </Routes>
    </div>
  );
}

export default App;
