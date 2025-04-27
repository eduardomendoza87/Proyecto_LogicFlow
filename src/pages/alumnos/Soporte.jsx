import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Íconos de expandir/cerrar

const preguntas = [
  {
    pregunta: "¿Cómo puedo acceder a mi cuenta?",
    respuesta: "Puedes acceder a tu cuenta desde el botón 'Iniciar sesión' en la parte superior del sitio usando tu correo institucional y contraseña."
  },
  {
    pregunta: "¿Qué hago si olvidé mi contraseña?",
    respuesta: "Haz clic en '¿Olvidaste tu contraseña?' en la página de inicio de sesión y sigue las instrucciones para restablecerla."
  },
  {
    pregunta: "¿Cómo puedo cambiar mi información personal?",
    respuesta: "Ve a tu perfil, haz clic en 'Editar perfil' y modifica los campos necesarios."
  },
  {
    pregunta: "¿Dónde encuentro los materiales de estudio?",
    respuesta: "Puedes encontrarlos dentro del panel de clases, en la sección 'Materiales'."
  },
  {
    pregunta: "¿Cómo puedo contactar al soporte técnico?",
    respuesta: "Envía un correo a soporte@ucla.edu.mx o utiliza el chat en vivo disponible de lunes a viernes."
  }
];

function Soporte() {
  const [preguntaActiva, setPreguntaActiva] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  const togglePregunta = (index) => {
    setPreguntaActiva(preguntaActiva === index ? null : index);
  };

  const preguntasFiltradas = preguntas.filter((item) =>
    item.pregunta.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Sección superior */}
      <div className="bg-cafe4Personalizado py-20 px-6 text-center">
        <h1 className="text-4xl font-bold text-negroPersonalizado mb-6">
          ¿Qué problema tienes?
        </h1>
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar una pregunta..."
            className="w-full rounded-full px-6 py-3 text-lg text-negroPersonalizado shadow-md focus:outline-none focus:ring-2 focus:ring-cafe1Personalizado"
          />
        </div>
      </div>

      {/* Sección de preguntas frecuentes */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-negroPersonalizado">
          Preguntas Frecuentes
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {preguntasFiltradas.length > 0 ? (
            preguntasFiltradas.map((item, index) => (
              <div key={index} className="border rounded-lg shadow-sm">
                <button
                  onClick={() => togglePregunta(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-negroPersonalizado hover:bg-gray-100 focus:outline-none"
                >
                  {item.pregunta}
                  {preguntaActiva === index ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                </button>
                {preguntaActiva === index && (
                  <div className="px-6 pb-4 text-gray-700 text-base">
                    {item.respuesta}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 text-lg mt-6">
              No se encontraron resultados para tu búsqueda.
            </div>
          )}
        </div>
      </div>

      {/* Tarjeta de contacto */}
      <div className="flex justify-center mb-16">
        <div className="bg-cafe3Personalizado rounded-lg p-8 shadow-lg text-center w-full max-w-lg">
          <h3 className="text-2xl font-bold text-negroPersonalizado mb-4">¿No encontraste lo que buscabas?</h3>
          <p className="text-negroPersonalizado mb-6">Contacta a nuestro equipo de soporte, estamos para ayudarte.</p>
          <a
            href="mailto:soporte@ucla.edu.mx"
            className="inline-block bg-white text-cafe2Personalizado font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Contactar Soporte
          </a>
        </div>
      </div>
    </div>
  );
}

export default Soporte;
