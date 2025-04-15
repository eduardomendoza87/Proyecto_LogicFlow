import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo_Ucla from "../assets/img/logo_ucla.webp";

function NavbarDocente() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = (key) => setSubmenu(submenu === key ? null : key);

  return (
    <nav className="bg-cafe2Personalizado text-blancoPersonalizado font-sans shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="inicio" className="flex items-center">
          <img src={Logo_Ucla} alt="Logo" className="h-16 mr-2" />
          
        </Link>

        {/* Botón hamburguesa para móviles */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menú principal */}
        <ul className={`md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 ${menuOpen ? "block mt-6" : "hidden md:flex"}`}>

          <li><Link to="inicio" className="hover:text-black">Inicio</Link></li>

          {/* Gestión de Cursos */}
          <li className="relative">
            <button onClick={() => toggleSubmenu("cursos")} className="hover:text-black">Gestión de Cursos</button>
            {submenu === "cursos" && (
              <ul className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10">
                <li><Link to="/docente/mis-cursos" className="block px-4 py-2 hover:bg-gray-100">Mis Cursos</Link></li>
                <li><Link to="/docente/crear-curso" className="block px-4 py-2 hover:bg-gray-100">Crear Curso</Link></li>
              </ul>
            )}
          </li>

          {/* Evaluaciones */}
          <li className="relative">
            <button onClick={() => toggleSubmenu("evaluaciones")} className="hover:text-black">Evaluaciones</button>
            {submenu === "evaluaciones" && (
              <ul className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10">
                <li><Link to="/docente/evaluaciones" className="block px-4 py-2 hover:bg-gray-100">Administrar Evaluaciones</Link></li>
              </ul>
            )}
          </li>

          {/* Seguimiento */}
          <li className="relative">
            <button onClick={() => toggleSubmenu("seguimiento")} className="hover:text-black">Seguimiento</button>
            {submenu === "seguimiento" && (
              <ul className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10">
                <li><Link to="/docente/seguimiento" className="block px-4 py-2 hover:bg-gray-100">Progreso de Alumnos</Link></li>
              </ul>
            )}
          </li>

          {/* Perfil */}
          <li><Link to="/docente/perfil" className="hover:text-black">Perfil</Link></li>

          {/* Cerrar sesión */}
          <li>
            <button
              className="bg-cafe3Personalizado hover:bg-gray-200 text-blancoPersonalizado py-2 px-4 rounded block text-center"
              onClick={() => {
                localStorage.removeItem("usuarioRol");
                window.location.href = "/iniciar-sesion";
              }}
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarDocente;
