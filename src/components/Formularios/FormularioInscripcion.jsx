import React, { useState } from "react";
import { Link } from "react-router-dom";

function FormularioInscripcion() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    matricula: "",
    email: "",
    telefono: "",
    curso: ""
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formulario);
    setEnviado(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-cafe4Personalizado w-full max-w-2xl rounded-lg shadow-lg p-10">
        {/* Títulos */}
        <h2 className="text-3xl font-semibold mb-4 text-center text-negroPersonalizado">
          Solicitud de Inscripción
        </h2>
        <h5 className="text-xl font-medium mb-6 text-center text-negroPersonalizado">
          Completa el formulario para inscribirte en el curso
        </h5>

        {/* Formulario */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Nombre completo */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-bold mb-1 text-negroPersonalizado">
              Nombre completo
            </label>
            <input
              id="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              required
              placeholder="Nombre completo"
              className="w-full border rounded py-2 px-3 shadow focus:outline-none focus:ring-2 focus:ring-moradoPersonalizado text-negroPersonalizado"
            />
          </div>

          {/* Matrícula */}
          <div>
            <label htmlFor="matricula" className="block text-sm font-bold mb-1 text-negroPersonalizado">
              Matrícula
            </label>
            <input
              id="matricula"
              value={formulario.matricula}
              onChange={handleChange}
              required
              placeholder="Número de matrícula"
              className="w-full border rounded py-2 px-3 shadow focus:outline-none focus:ring-2 focus:ring-moradoPersonalizado text-negroPersonalizado"
            />
          </div>

          {/* Correo electrónico */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-1 text-negroPersonalizado">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              value={formulario.email}
              onChange={handleChange}
              required
              placeholder="Correo electrónico"
              className="w-full border rounded py-2 px-3 shadow focus:outline-none focus:ring-2 focus:ring-moradoPersonalizado text-negroPersonalizado"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="telefono" className="block text-sm font-bold mb-1 text-negroPersonalizado">
              Teléfono
            </label>
            <input
              id="telefono"
              type="tel"
              value={formulario.telefono}
              onChange={handleChange}
              required
              placeholder="Teléfono de contacto"
              className="w-full border rounded py-2 px-3 shadow focus:outline-none focus:ring-2 focus:ring-moradoPersonalizado text-negroPersonalizado"
            />
          </div>

          {/* Curso seleccionado */}
          <div>
            <label htmlFor="curso" className="block text-sm font-bold mb-1 text-negroPersonalizado">
              Curso seleccionado
            </label>
            <input
              id="curso"
              value={formulario.curso}
              onChange={handleChange}
              required
              placeholder="Nombre del curso"
              className="w-full border rounded py-2 px-3 shadow focus:outline-none focus:ring-2 focus:ring-moradoPersonalizado text-negroPersonalizado"
            />
          </div>

          {/* Botones */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
            <button
              type="submit"
              className="bg-cafe3Personalizado hover:bg-opacity-80 text-negroPersonalizado font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              Enviar Solicitud
            </button>
            <Link to="/explorarclase">
              <button
                type="button"
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Cancelar
              </button>
            </Link>
          </div>
        </form>

        {/* Mensaje después de enviar */}
        {enviado && (
          <div className="text-green-700 font-medium text-center mt-6">
            ✅ Tu solicitud ha sido enviada correctamente. <br />
            Nos pondremos en contacto contigo pronto.
          </div>
        )}
      </div>
    </div>
  );
}

export default FormularioInscripcion;
