import React from "react";
import Registrarse_eduspark from "../../assets/img/Registrarse_eduspark.webp"

function Registrarse() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-lg shadow-lg overflow-hidden bg-blancoPersonalizado">
        
        {/* Imagen a la izquierda */}
        <div className="md:w-1/2">
          <img src={Registrarse_eduspark} alt="Imagen de registro" className="w-full h-full object-cover"/>
        </div>

        {/* Formulario de registro */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Registrarse en UCLA
          </h2>
          <h5 className="text-xl font-semibold mb-6 text-center">
            Completa el siguiente formulario para crear tu cuenta
          </h5>

          <form className="space-y-6">
            {/* Campo de Nombre completo */}
            <div>
              <label className="block text-negroPersonalizado text-sm font-bold mb-2" htmlFor="nombre">
                Nombre completo
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-negroPersonalizado leading-tight focus:outline-none focus:ring-2 focus:ring-moradoPersonalizado" 
                id="nombre"
                type="text"
                placeholder="Nombre completo"
              />
            </div>

            {/* Campo de correo */}
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

            {/* Campo de Confirmar Contraseña */}
            <div>
              <label className="block text-negroPersonalizado text-sm font-bold mb-2" htmlFor="confirmarpassword">
                Confirmar contraseña
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-negroPersonalizado leading-tight focus:outline-none focus:ring-2 focus:ring-moradoPersonalizado" 
                id="confirmarpassword"
                type="password"
                placeholder="Confirmar contraseña"
              />
            </div>

            {/* Checkbox Aceptar términos y condiciones */}
            <div className="flex items-center mb-4">
              <input 
                id="aceptar"
                type="checkbox"
                className="w-4 h-4 text-negroPersonalizado bg-gray-100 border-gray-300 rounded focus:ring-moradoPersonalizado"
              />
              <label htmlFor="aceptar" className="ml-2 text-sm font-medium text-negroPersonalizado">
                Aceptar términos y condiciones
              </label>
            </div>

            {/* Texto de orientación */}
            <div className="text-center mt-4">
             <p className="text-sm font-bold text-negroPersonalizado">
               ¿Ya tienes cuenta? 
              </p>
            </div>

             {/* Botón de Iniciar Sesión */}
            <div className="flex items-center justify-center mt-2">
             <a 
                href="/iniciar-sesion"
                className="bg-verdePersonalizado text-negroPersonalizado font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-opacity-80 active:scale-95 shadow-md"
               >
                Iniciar Sesión
                </a>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Registrarse;