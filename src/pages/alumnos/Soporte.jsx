import React, { useState } from "react";

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

  const togglePregunta = (index) => {
    setPreguntaActiva(preguntaActiva === index ? null : index);
  };

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
          {preguntas.map((item, index) => (
            <div key={index} className="border rounded-lg shadow-sm">
              <button
                onClick={() => togglePregunta(index)}
                className="w-full text-left px-6 py-4 text-lg font-medium text-negroPersonalizado hover:bg-gray-100 focus:outline-none"
              >
                {item.pregunta}
              </button>
              {preguntaActiva === index && (
                <div className="px-6 pb-4 text-gray-700 text-base">
                  {item.respuesta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Soporte;
