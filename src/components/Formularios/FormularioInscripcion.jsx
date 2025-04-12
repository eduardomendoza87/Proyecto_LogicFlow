import React, { useState } from "react";

function FormularioInscripcion() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      {/* Contenedor principal */}
      <div className="bg-cafe4Personalizado w-full max-w-2xl rounded-lg shadow-lg p-10">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Solicitud de Inscripción
        </h2>
        <h5 className="text-xl font-medium mb-6 text-center">
          Rellena el siguiente formulario para inscribirte en la UCLA
        </h5>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Campo de Nombre completo */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-bold mb-1 text-negroPersonalizado">
              Nombre completo
            </label>
            <input
              id="nombre"
              type="text"
              required
              placeholder="Nombre completo"
              className="w-full border rounded py-2 px-3 shadow focus:outline-none focus:ring-2 focus:ring-moradoPersonalizado text-negroPersonalizado"
            />
          </div>

          {/* Campo de matrícula */}
          <div>
            <label htmlFor="matricula" className="block text-sm font-bold mb-1 text-negroPersonalizado">
              Matrícula
            </label>
            <input
              id="matricula"
              type="text"
              required
              placeholder="Matrícula"
              className="w-full border rounded py-2 px-3 shadow focus:outline-none focus:ring-2 focus:ring-moradoPersonalizado text-negroPersonalizado"
            />
          </div>

          {/* Campo de correo */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-1 text-negroPersonalizado">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Correo electrónico"
              className="w-full border rounded py-2 px-3 shadow focus:outline-none focus:ring-2 focus:ring-moradoPersonalizado text-negroPersonalizado"
            />
          </div>

          {/* Campo teléfono */}
          <div>
            <label htmlFor="telefono" className="block text-sm font-bold mb-1 text-negroPersonalizado">
              Teléfono
            </label>
            <input
              id="telefono"
              type="tel"
              required
              placeholder="Teléfono"
              className="w-full border rounded py-2 px-3 shadow focus:outline-none focus:ring-2 focus:ring-moradoPersonalizado text-negroPersonalizado"
            />
          </div>

          {/* Curso Seleccionado */}
          <div>
            <label htmlFor="curso" className="block text-sm font-bold mb-1 text-negroPersonalizado">
              Curso seleccionado
            </label>
            <input
              id="curso"
              type="text"
              required
              placeholder="Curso seleccionado"
              className="w-full border rounded py-2 px-3 shadow focus:outline-none focus:ring-2 focus:ring-moradoPersonalizado text-negroPersonalizado"
            />
          </div>

          {/* Botón de enviar */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-cafe3Personalizado text-negroPersonalizado font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 active:scale-95 shadow-md transition duration-300 ease-in-out"
            >
              Enviar Solicitud
            </button>
          </div>
        </form>

        {/* Mensaje de éxito */}
        {enviado && (
          <p className="text-green-700 font-medium text-center mt-6">
            ✅ Tu solicitud ha sido enviada correctamente.
          </p>
        )}
      </div>
    </div>
  );
}

export default FormularioInscripcion;
