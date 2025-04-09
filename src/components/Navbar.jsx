import React from "react";
import { Link } from "react-router-dom";
import Logo_Ucla from "../assets/img/logo_ucla.webp"

function Navbar() {
  return (
    <nav className="bg-cafe2Personalizado p-4 font-sans">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo con Link para evitar recarga */}
        <Link to="/" className="text-black font-bold text-xl flex items-center">
          <img src={Logo_Ucla} className="h-20 mr-2" alt="EduSpark Logo" />
        </Link>

        {/* Menú de navegación */}
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-blancoPersonalizado hover:text-black">Inicio</Link></li>
          <li><Link to="/acerca-de-nosotros" className="text-blancoPersonalizado hover:text-black">Acerca de nosotros</Link></li>
          <li><Link to="/clasedetalle" className="text-blancoPersonalizado hover:text-black">Clases virtuales</Link></li>
          <li><Link to="/explorarclase" className="text-blancoPersonalizado hover:text-black">Explorar Cursos</Link></li>
          <li><Link to="/evaluaciones" className="text-blancoPersonalizado hover:text-black">Evaluaciones</Link></li>
          <li><Link to="/perfil" className="text-blancoPersonalizado hover:text-black">Perfil</Link></li>
          <li><Link to="/soporte" className="text-blancoPersonalizado hover:text-black">Soporte</Link></li>



          {/* Botones de acción */}
          <li className="ml-4">
            <Link to="/iniciar-sesion" className="bg-cafe3Personalizado hover:bg-gray-200 text-blancoPersonalizado py-2 px-4 rounded">
              Iniciar sesión
            </Link>
          </li>
          <li>
            <Link to="/registrarse" className="bg-cafe3Personalizado hover:bg-gray-200 text-blancoPersonalizado py-2 px-4 rounded">
              Registrarse
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
