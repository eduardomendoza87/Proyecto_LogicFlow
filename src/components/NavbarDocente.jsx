import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo_Ucla from "../assets/img/logo_ucla.webp";

function NavbarDocente() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [submenu, setSubmenu] = React.useState(null);
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const usuarioAutenticado = usuario?.rol === "docente";

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = (key) => setSubmenu(submenu === key ? null : key);

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    navigate("/iniciar-sesion");
  };

  return (
    <nav className="bg-cafe2Personalizado text-blancoPersonalizado font-sans shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="inicio" className="flex items-center">
          <img src={Logo_Ucla} alt="Logo" className="h-16 mr-2" />
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {usuarioAutenticado && (
          <ul className={`md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 ${menuOpen ? "block mt-6" : "hidden md:flex"}`}>
            <li><Link to="inicio" className="hover:text-black">Inicio</Link></li>

            <li className="relative">
              <button onClick={() => toggleSubmenu("cursos")} className="hover:text-black">Gestión de Cursos</button>
              {submenu === "cursos" && (
                <ul className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10">
                  <li><Link to="/docente/mis-cursos" className="block px-4 py-2 hover:bg-gray-100">Mis Cursos</Link></li>
                </ul>
              )}
            </li>

            <li className="relative">
              <button onClick={() => toggleSubmenu("evaluaciones")} className="hover:text-black">Evaluaciones</button>
              {submenu === "evaluaciones" && (
                <ul className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10">
                  <li><Link to="/docente/admin-evaluaciones" className="block px-4 py-2 hover:bg-gray-100">Administrar Evaluaciones</Link></li>
                </ul>
              )}
            </li>

            <li className="relative">
              <button onClick={() => toggleSubmenu("seguimiento")} className="hover:text-black">Seguimiento</button>
              {submenu === "seguimiento" && (
                <ul className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10">
                  <li><Link to="/docente/seguimiento" className="block px-4 py-2 hover:bg-gray-100">Progreso de Alumnos</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/docente/perfil-docente" className="hover:text-black">Perfil</Link></li>

            <li>
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                onClick={cerrarSesion}
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavbarDocente;
