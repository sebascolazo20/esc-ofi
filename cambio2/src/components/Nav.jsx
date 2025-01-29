import { NavLink } from 'react-router-dom';
import './nav.css';

function Nav() {

  // Verifica si la URL actual pertenece a "Cursos" o una de sus subpáginas
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggler" data-toggle="open-navbar1">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <NavLink to="/" className="navbar-brand">
            <div className="logo">
              <div className="top"><h3>IFVC</h3></div>
              <div className="bottom"><h6>Instituto de Formacion de Villa Constitucion</h6></div>
            </div>
          </NavLink>
        </div>

        <div className="navbar-menu" id="open-navbar1">
          <ul className="navbar-nav">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                  to="/cursos"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Cursos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/institucion"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Institución
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
