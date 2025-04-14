import React from "react";
import { useNavigate } from "react-router-dom";
import Login_eduspark from "../../assets/img/Login_eduspark.webp"; // Asegúrate de que la ruta sea correcta

function IniciarSesion() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Simulación de usuario
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    // Puedes crear más de un caso si quieres
    if (email === "alumno@ucla.edu" && password === "1234") {
      localStorage.setItem("usuarioRol", "alumno");
      navigate("/"); // Redirige a la página de alumno
    } else if (email === "docente@ucla.edu" && password === "4321") {
      localStorage.setItem("usuarioRol", "docente");
      navigate("/docente"); // Redirige a la página de docente
    } else {
      alert("Credenciales inválidas");
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      {/* Contenedor principal */}
      <div className="bg-cafe4Personalizado flex flex-col md:flex-row w-full max-w-4xl rounded-lg shadow-lg overflow-hidden ">
        
        {/* Imagen a la izquierda */}
        <div className="md:w-1/2">
          <img src={Login_eduspark} alt="Imagen de inicio de sesión" className="w-full h-full object-cover"/>
        </div>

        {/* Formulario de Inicio de Sesión */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Iniciar Sesión
          </h2>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Campo de Correo */}
            <div>
              <label className="block text-negroPersonalizado text-sm font-bold mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-negroPersonalizado leading-tight focus:outline-none focus:ring-2 focus:ring-cafe2Personalizado" 
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-negroPersonalizado leading-tight focus:outline-none focus:ring-2 focus:ring-cafe2Personalizado" 
                id="password"
                type="password"
                placeholder="Contraseña"
              />
            </div>

            {/* Botón de Iniciar Sesión */}
            <div className="flex items-center justify-between">
              <button 
                className="bg-cafe3Personalizado text-negroPersonalizado font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-opacity-80 active:scale-95"
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