import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Registrarse_eduspark from "../../assets/img/Registrarse_eduspark.webp";

function Registrarse() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmar = e.target.confirmarpassword.value;
    const aceptarTerminos = e.target.aceptar.checked;

    if (!aceptarTerminos) {
      toast.error("Debes aceptar los términos y condiciones.");
      return;
    }

    if (password !== confirmar) {
      toast.error("Las contraseñas no coinciden.");
      return;
    }

    const nuevoUsuario = {
      nombre,
      email,
      rol: "alumno",
    };

    localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
    toast.success("¡Registro exitoso! Redirigiendo...");

    setTimeout(() => {
      navigate("/"); // Redirige al home después del toast
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="bg-cafe4Personalizado flex flex-col md:flex-row w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
        {/* Imagen */}
        <div className="md:w-1/2">
          <img src={Registrarse_eduspark} alt="Imagen de registro" className="w-full h-full object-cover" />
        </div>

        {/* Formulario */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">Registrarse en UCLA</h2>
          <h5 className="text-xl font-semibold mb-6 text-center">
            Completa el formulario para crear tu cuenta
          </h5>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre" className="block text-sm font-bold text-negroPersonalizado mb-2">
                Nombre completo
              </label>
              <input id="nombre" required type="text" placeholder="Nombre completo"
                className="shadow border rounded w-full py-2 px-3 text-negroPersonalizado focus:ring-2 focus:ring-moradoPersonalizado" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-negroPersonalizado mb-2">
                Correo Electrónico
              </label>
              <input id="email" required type="email" placeholder="Correo electrónico"
                className="shadow border rounded w-full py-2 px-3 text-negroPersonalizado focus:ring-2 focus:ring-moradoPersonalizado" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-negroPersonalizado mb-2">
                Contraseña
              </label>
              <input id="password" required type="password" placeholder="Contraseña"
                className="shadow border rounded w-full py-2 px-3 text-negroPersonalizado focus:ring-2 focus:ring-moradoPersonalizado" />
            </div>

            <div>
              <label htmlFor="confirmarpassword" className="block text-sm font-bold text-negroPersonalizado mb-2">
                Confirmar contraseña
              </label>
              <input id="confirmarpassword" required type="password" placeholder="Confirmar contraseña"
                className="shadow border rounded w-full py-2 px-3 text-negroPersonalizado focus:ring-2 focus:ring-moradoPersonalizado" />
            </div>

            <div className="flex items-center mb-4">
              <input id="aceptar" type="checkbox" required
                className="w-4 h-4 text-negroPersonalizado bg-gray-100 border-gray-300 rounded focus:ring-moradoPersonalizado" />
              <label htmlFor="aceptar" className="ml-2 text-sm font-medium text-negroPersonalizado">
                Aceptar términos y condiciones
              </label>
            </div>

            <div className="text-center mt-4">
              <p className="text-sm font-bold text-negroPersonalizado">¿Ya tienes cuenta?</p>
            </div>

            <div className="flex items-center justify-center mt-2">
              <a href="/iniciar-sesion" className="bg-cafe3Personalizado text-negroPersonalizado font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 shadow-md">
                Iniciar Sesión
              </a>
            </div>

            <div className="flex justify-center mt-6">
              <button type="submit" className="bg-cafe3Personalizado text-negroPersonalizado font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 shadow-md">
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registrarse;
