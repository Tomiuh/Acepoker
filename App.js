import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Beginner from './pages/Beginner';
import Intermediate from './pages/Intermediate';
import Advanced from './pages/Advanced';
import Tools from './pages/Tools';
import Videos from './pages/Videos';
import Articles from './pages/Articles';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white">
        <nav className="bg-gray-900 p-4 flex justify-center space-x-6 text-sm">
          <Link to="/" className="hover:text-blue-400">Inicio</Link>
          <Link to="/beginner" className="hover:text-blue-400">Principiante</Link>
          <Link to="/intermediate" className="hover:text-blue-400">Intermedio</Link>
          <Link to="/advanced" className="hover:text-blue-400">Avanzado</Link>
          <Link to="/videos" className="hover:text-blue-400">Vídeos</Link>
          <Link to="/tools" className="hover:text-blue-400">Herramientas</Link>
          <Link to="/articles" className="hover:text-blue-400">Artículos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beginner" element={<Beginner />} />
          <Route path="/intermediate" element={<Intermediate />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </Router>
  );
}