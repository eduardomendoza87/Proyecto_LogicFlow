import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login_eduspark from "../../assets/img/Login_eduspark.webp";

function IniciarSesion() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Simulación de login
    if (email === "alumno@ucla.edu" && password === "1234") {
      localStorage.setItem("usuarioRol", "alumno");
      localStorage.setItem("usuario", JSON.stringify({ email, rol: "alumno" }));
      toast.success("Bienvenido alumno, redirigiendo...");
      setTimeout(() => navigate("/"), 2000);
    } else if (email === "docente@ucla.edu" && password === "4321") {
      localStorage.setItem("usuarioRol", "docente");
      localStorage.setItem("usuario", JSON.stringify({ email, rol: "docente" }));
      toast.success("Bienvenido docente, redirigiendo...");
      setTimeout(() => navigate("/docente/inicio"), 2000);
    } else if (email === "admin@ucla.edu" && password === "54321") {
      localStorage.setItem("usuarioRol", "admin");
      localStorage.setItem("usuario", JSON.stringify({ email, rol: "admin" }));
      toast.success("Bienvenido administrador, redirigiendo...");
      setTimeout(() => navigate("/admin/inicio"), 2000);
    } else {
      toast.error("Credenciales inválidas");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <ToastContainer position="top-right" autoClose={2000} />
      
      <div className="bg-cafe4Personalizado flex flex-col md:flex-row w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
        {/* Imagen */}
        <div className="md:w-1/2">
          <img src={Login_eduspark} alt="Imagen de inicio de sesión" className="w-full h-full object-cover" />
        </div>

        {/* Formulario */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">Iniciar Sesión</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-negroPersonalizado text-sm font-bold mb-2">
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Correo electrónico"
                className="shadow border rounded w-full py-2 px-3 text-negroPersonalizado focus:ring-2 focus:ring-cafe2Personalizado"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-negroPersonalizado text-sm font-bold mb-2">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                required
                placeholder="Contraseña"
                className="shadow border rounded w-full py-2 px-3 text-negroPersonalizado focus:ring-2 focus:ring-cafe2Personalizado"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-cafe3Personalizado text-negroPersonalizado font-bold py-2 px-4 rounded hover:bg-opacity-80 active:scale-95 shadow-md"
              >
                Iniciar Sesión
              </button>
              <a className="text-sm font-bold text-negroPersonalizado hover:underline cursor-pointer">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <div className="text-center mt-4">
              <a href="/registrarse" className="text-sm font-bold text-negroPersonalizado hover:underline cursor-pointer">
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
