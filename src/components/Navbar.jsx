import React from "react";
import { Link } from "react-router-dom";
import Logo_EduSpark2 from "../assets/img/Logo_EduSpark2.png" // Asegúrate de que la ruta sea correcta

function Navbar() {
  return (
    <nav className="bg-blancoPersonalizado p-4 font-sans">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo con Link para evitar recarga */}
        <Link to="/" className="text-black font-bold text-xl flex items-center">
          <img src={Logo_EduSpark2} className="h-20 mr-2" alt="EduSpark Logo" />
        </Link>

        {/* Menú de navegación */}
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-gray-600 hover:text-black">Inicio</Link></li>
          <li><Link to="/acerca-de-nosotros" className="text-gray-600 hover:text-black">Acerca de nosotros</Link></li>
          <li><Link to="/clases" className="text-gray-600 hover:text-black">Clases</Link></li>
          <li><Link to="/juegos" className="text-gray-600 hover:text-black">Cursoss</Link></li>
          <li><Link to="/videollamadas" className="text-gray-600 hover:text-black">Evaluaciones</Link></li>
          <li><Link to="/progreso" className="text-gray-600 hover:text-black">Perfil</Link></li>

          {/* Botones de acción */}
          <li className="ml-4">
            <Link to="/iniciar-sesion" className="bg-moradoPersonalizado hover:bg-gray-200 text-black py-2 px-4 rounded">
              Iniciar sesión
            </Link>
          </li>
          <li>
            <Link to="/registrarse" className="bg-moradoPersonalizado hover:bg-gray-200 text-black py-2 px-4 rounded">
              Registrarse
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
