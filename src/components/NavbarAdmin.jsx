import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo_Ucla from "../assets/img/logo_ucla.webp";

function NavbarAdmin() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [submenu, setSubmenu] = React.useState(null);
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const usuarioAutenticado = !!usuario;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = (key) => setSubmenu(submenu === key ? null : key);

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    <nav className="bg-cafe2Personalizado text-blancoPersonalizado font-sans shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={Logo_Ucla} alt="Logo" className="h-16 mr-2" />
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul className={`md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 ${menuOpen ? "block mt-6" : "hidden md:flex"}`}>
          <li><Link to="/admin/inicio" className="hover:text-black">Inicio</Link></li>
          <li><Link to="gestion-usuarios" className="hover:text-black">Gestion de usuarios</Link></li>
          <li><Link to="gestion-cursos" className="hover:text-black">Gestion de cursos</Link></li>
          <li><Link to="monitoreo-evaluaciones" className="hover:text-black">Monitoreo evaluaciones</Link></li>
          <li><Link to="solicitudes-inscripcion" className="hover:text-black">Solicitudes de inscripcion</Link></li>
          <li><Link to="reportes-estadisticas" className="hover:text-black">Reporte y estadisticas</Link></li>
          
          {!usuarioAutenticado ? (
            <>
              <li><Link to="/iniciar-sesion" className="bg-cafe3Personalizado hover:bg-gray-200 text-blancoPersonalizado py-2 px-4 rounded">Iniciar sesión</Link></li>
              <li><Link to="/registrarse" className="bg-cafe3Personalizado hover:bg-gray-200 text-blancoPersonalizado py-2 px-4 rounded">Registrarse</Link></li>
            </>
          ) : (
            <li><button onClick={cerrarSesion} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Cerrar sesión</button></li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavbarAdmin;
