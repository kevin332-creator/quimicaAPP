// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterDocente from './pages/Registerdocente';
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';
import MainLayout from './layouts/MainLayout';
import CursoDetalle from './pages/CursoDetalle';
import JuegoLayout from './layouts/JuegoLayout';
import Niveles from './pages/juego/Niveles'; 
import Ranking from './pages/juego/JuegosNivel/Ranking';
import Nivel1 from './pages/juego/JuegosNivel/Nivel1';    
import Nivel2 from './pages/juego/JuegosNivel/Nivel2';   
import NivelDisparo from './pages/juego/JuegosNivel/NivelDisparo'; 


// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Import Bootstrap CSS (or SCSS if you prefer)
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registroDocentesDeLaINSTITUCIONEDUCATIVA" element={<RegisterDocente />} />

        {/* Rutas protegidas con layout común */}
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="/cursos/:id" element={<CursoDetalle />} />
        </Route>
        
        <Route path="/juegos" element={<JuegoLayout />}>
          <Route index element={<Niveles />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="nivel1" element={<Nivel1 />} />
          <Route path="nivel2" element={<Nivel2 />} />
          <Route path="disparo" element={<NivelDisparo />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
