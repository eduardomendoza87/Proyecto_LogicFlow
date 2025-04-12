import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo_Ucla from "../assets/img/logo_ucla.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = (key) => setSubmenu(submenu === key ? null : key);

  return (
    <nav className="bg-cafe2Personalizado text-blancoPersonalizado font-sans shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo_Ucla} alt="Logo" className="h-16 mr-2" />
        </Link>

        {/* Botón hamburguesa para móviles */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menú completo */}
        <ul className={`md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 ${menuOpen ? "block mt-6" : "hidden md:flex"}`}>

          {/* Enlaces simples */}
          <li><Link to="/" className="hover:text-black">Inicio</Link></li>
          <li><Link to="/acerca-de-nosotros" className="hover:text-black">Acerca de nosotros</Link></li>

          {/* Desplegable: Clases */}
          <li className="relative">
            <button onClick={() => toggleSubmenu("clases")} className="hover:text-black">Clases</button>
            {submenu === "clases" && (
              <ul className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10">
                <li><Link to="/cursos-actuales" className="block px-4 py-2 hover:bg-gray-100">Cursos actuales</Link></li>
                <li><Link to="/clases-virtuales" className="block px-4 py-2 hover:bg-gray-100">Clases virtuales</Link></li>
                <li><Link to="/horario" className="block px-4 py-2 hover:bg-gray-100">Horario</Link></li>
              </ul>
            )}
          </li>

          {/* Desplegable: Explorar cursos */}
          <li className="relative">
            <button onClick={() => toggleSubmenu("explorar")} className="hover:text-black">Explorar cursos</button>
            {submenu === "explorar" && (
              <ul className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10">
                <li><Link to="/explorarclase" className="block px-4 py-2 hover:bg-gray-100">Ver cursos disponibles</Link></li>
                <li><Link to="/solicitar-inscripcion" className="block px-4 py-2 hover:bg-gray-100">Solicitar inscripción</Link></li>
              </ul>
            )}
          </li>

          {/* Desplegable: Evaluaciones */}
          <li className="relative">
            <button onClick={() => toggleSubmenu("evaluaciones")} className="hover:text-black">Evaluaciones</button>
            {submenu === "evaluaciones" && (
              <ul className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10">
                <li><Link to="/examenes-activos" className="block px-4 py-2 hover:bg-gray-100">Exámenes activos por curso</Link></li>
                <li><Link to="/resultados" className="block px-4 py-2 hover:bg-gray-100">Ver resultados</Link></li>
              </ul>
            )}
          </li>

          {/* Enlaces simples */}
          <li><Link to="/perfil" className="hover:text-black">Perfil</Link></li>
          <li><Link to="/soporte" className="hover:text-black">Soporte</Link></li>

          {/* Botones de acción */}
          <li>
            <Link to="/iniciar-sesion" className="bg-cafe3Personalizado hover:bg-gray-200 text-blancoPersonalizado py-2 px-4 rounded block text-center">
              Iniciar sesión
            </Link>
          </li>
          <li>
            <Link to="/registrarse" className="bg-cafe3Personalizado hover:bg-gray-200 text-blancoPersonalizado py-2 px-4 rounded block text-center">
              Registrarse
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
