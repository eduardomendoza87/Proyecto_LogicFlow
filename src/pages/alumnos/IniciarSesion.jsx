import React from "react";
import Login_eduspark from "../../assets/img/Login_eduspark.webp"; // Asegúrate de que la ruta sea correcta

function IniciarSesion() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-lg shadow-lg overflow-hidden bg-white">
        
        {/* Imagen a la izquierda */}
        <div className="md:w-1/2">
          <img src={Login_eduspark} alt="Imagen de inicio de sesión" className="w-full h-full object-cover"/>
        </div>

        {/* Formulario de Inicio de Sesión */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Iniciar Sesión
          </h2>
          
          <form className="space-y-6">
            {/* Campo de Correo */}
            <div>
              <label className="block text-negroPersonalizado text-sm font-bold mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-negroPersonalizado leading-tight focus:outline-none focus:ring-2 focus:ring-moradoPersonalizado" 
                id="email"
                type="email"
                placeholder="Correo electrónico"
              />
            </div>

            {/* Campo de Contraseña */}
            <div>
              <label className="block text-negroPersonalizado text-sm font-bold mb-2" htmlFor="password">
                Contraseña
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-negroPersonalizado leading-tight focus:outline-none focus:ring-2 focus:ring-moradoPersonalizado" 
                id="password"
                type="password"
                placeholder="Contraseña"
              />
            </div>

            {/* Botón de Iniciar Sesión */}
            <div className="flex items-center justify-between">
              <button 
                className="bg-verdePersonalizado text-negroPersonalizado font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-opacity-80 active:scale-95"
                type="submit"
              >
                Iniciar Sesión
              </button>
              
              <a className="text-sm font-bold text-negroPersonalizado hover:underline cursor-pointer">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Link para Registrarse */}
            <div className="text-center mt-4">
              <a className="text-sm font-bold text-negroPersonalizado hover:underline cursor-pointer" href="/registrarse">
                ¿No tienes cuenta? Regístrate aquí
              </a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default IniciarSesion;