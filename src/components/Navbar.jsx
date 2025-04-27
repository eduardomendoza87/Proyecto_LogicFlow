import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo_Ucla from "../assets/img/logo_ucla.webp";

function Navbar() {
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
          <li><Link to="/" className="hover:text-black">Inicio</Link></li>
          <li><Link to="/acerca-de-nosotros" className="hover:text-black">Acerca de nosotros</Link></li>

          {usuarioAutenticado && (
            <>
              <li className="relative">
                <button onClick={() => toggleSubmenu("cursos")} className="hover:text-black">Cursos</button>
                {submenu === "cursos" && (
                  <ul className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10">
                    <li><Link to="/cursos-actuales" className="block px-4 py-2 hover:bg-gray-100">Cursos actuales</Link></li>
                    <li><Link to="/clases-virtuales" className="block px-4 py-2 hover:bg-gray-100">Clases virtuales</Link></li>
                    <li><Link to="/horario" className="block px-4 py-2 hover:bg-gray-100">Horario</Link></li>
                  </ul>
                )}
              </li>

              <li className="relative">
                <button onClick={() => toggleSubmenu("explorar")} className="hover:text-black">Explorar cursos</button>
                {submenu === "explorar" && (
                  <ul className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10">
                    <li><Link to="/explorarclase" className="block px-4 py-2 hover:bg-gray-100">Ver cursos disponibles</Link></li>
                  </ul>
                )}
              </li>

              <li className="relative">
                <button onClick={() => toggleSubmenu("evaluaciones")} className="hover:text-black">Mis evaluaciones</button>
                {submenu === "evaluaciones" && (
                  <ul className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10">
                    <li><Link to="/evaluaciones-cursos" className="block px-4 py-2 hover:bg-gray-100">Evaluaciones activas</Link></li>
                    <li><Link to="/resultados" className="block px-4 py-2 hover:bg-gray-100">Ver resultados</Link></li>
                  </ul>
                )}
              </li>

              <li><Link to="/perfil" className="hover:text-black">Perfil</Link></li>
              <li><Link to="/soporte" className="hover:text-black">Soporte</Link></li>
            </>
          )}

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

export default Navbar;
