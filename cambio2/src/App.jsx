import React from 'react'; 
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Institucion from './pages/Institucion';
import Contacto from './pages/Contacto';
import Cursos from './pages/Cursos';
import '/public/styles/app.css';
import Coworking from './pages/Coworking';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/institucion" element={<Institucion />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/coworking" element={<Coworking />} />
        
        {/* Ruta para la categoría específica */}
        <Route path="/cursos/:categoriaId" element={<Cursos />} />
        
        {/* Ruta para los detalles de un curso en una categoría */}
        <Route path="/cursos/:categoriaId/detalle/:cursoId" element={<Cursos />} />
        
        {/* Ruta de cursos sin categoría */}
        <Route path="/cursos" element={<Cursos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
