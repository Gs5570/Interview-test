import { Routes, Route } from 'react-router-dom';
import './App.css';

//Pages
import Home from './pages/Home.jsx';
import Team from './pages/Team';
import History from './pages/History';
import Mountain1 from './pages/Mountain1.jsx';
import Mountain2 from './pages/Mountain2.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="history" element={<History />} />
        <Route path="mountain1" element={<Mountain1 />} />
        <Route path="mountain2" element={<Mountain2 />} />
      </Routes>
    </>
  );
}

export default App;
