import { NavLink, useLocation, useNavigate } from 'react-router-dom'; // 👈 1. Importamos useNavigate
import { Users, BookOpen, CheckSquare, LogOut } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // 👈 2. Inicializamos el enrutador de navegación

  // Si el usuario está en la raíz (/) o en el (/login), oculta la barra por completo
  if (location.pathname === '/' || location.pathname === '/login') {
    return null;
  }

  // 👈 3. Función para cerrar sesión de manera segura
  const handleLogout = () => {
    // Limpia el almacenamiento por si guardas tokens de autenticación ahí
    localStorage.clear();
    sessionStorage.clear();

    // Redirige al inicio de sesión inmediatamente
    navigate('/login');
  };

  return (
    <nav className="main-nav">
      {/* Logo de la marca */}
      <div className="nav-brand">OBSERVA<span>TECH</span></div>
      
      {/* Enlaces del sistema */}
      <div className="nav-links">
        <NavLink to="/usuarios" className="nav-item">
          <Users size={16}/> USUARIOS
        </NavLink>
        <NavLink to="/narrativas" className="nav-item">
          <BookOpen size={16}/> NARRATIVAS
        </NavLink>
        <NavLink to="/evaluaciones" className="nav-item">
          <CheckSquare size={16}/> EVALUACIONES
        </NavLink>
        <NavLink to="/reportes" className="nav-item">
        <FheckSquare size={16}/> REPORTES
        </NavLink>
        
        {/* 👈 4. Vinculamos la función handleLogout al evento onClick */}
        <button className="btn-logout" onClick={handleLogout}>
          <LogOut size={16}/> SALIR
        </button>
      </div>
    </nav>
  );
};

export default Navbar;