import React from "react";
import { useNavigate } from "react-router-dom";

function VerDetalles() {
  const navigate = useNavigate();

  // Datos simulados de un examen
  const examen = {
    curso: "Cálculo I",
    tipoExamen: "Parcial",
    fechaRealizacion: "2024-04-20",
    calificacion: 85,
    estado: "Aprobado",
    detalles: [
      { pregunta: "¿Qué es una derivada?", respuesta: "Tasa de cambio instantánea." },
      { pregunta: "¿Cuál es la derivada de x²?", respuesta: "2x" },
      { pregunta: "¿Qué representa el límite cuando x tiende a 0?", respuesta: "Comportamiento cercano al punto." },
    ],
  };

  return (
    <div className="bg-cafe4Personalizado min-h-screen p-6 flex flex-col items-center">
      <div className="bg-blancoPersonalizado w-full max-w-4xl rounded-lg shadow-lg p-8">
        
        {/* Botón de regresar */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-cafe3Personalizado hover:bg-opacity-80 text-negroPersonalizado font-bold py-2 px-6 rounded-lg shadow-md"
          >
            ⬅ Regresar
          </button>
        </div>

        {/* Información general del examen */}
        <h2 className="text-3xl font-bold text-center mb-8 text-negroPersonalizado">
          Detalles del Examen
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-negroPersonalizado mb-8">
          <div>
            <p><strong>Curso:</strong> {examen.curso}</p>
            <p><strong>Tipo de examen:</strong> {examen.tipoExamen}</p>
          </div>
          <div>
            <p><strong>Fecha de realización:</strong> {examen.fechaRealizacion}</p>
            <p>
              <strong>Estado:</strong>{" "}
              <span className={`font-semibold ${
                examen.estado === "Aprobado"
                  ? "text-green-600"
                  : examen.estado === "Reprobado"
                  ? "text-red-600"
                  : "text-yellow-600"
              }`}>
                {examen.estado}
              </span>
            </p>
          </div>
        </div>

        {/* Calificación grande */}
        <div className="text-center mb-12">
          <div className="text-5xl font-bold text-cafe2Personalizado">
            {examen.calificacion !== null ? `${examen.calificacion}` : "Sin calificación"}
          </div>
          <div className="text-lg text-gray-600">Puntos obtenidos</div>
        </div>

        {/* Detalle de preguntas y respuestas */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-negroPersonalizado">Preguntas y respuestas</h3>
          <div className="space-y-6">
            {examen.detalles.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-inner"
              >
                <p className="font-semibold mb-2">❓ {item.pregunta}</p>
                <p className="text-gray-700">✅ {item.respuesta}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default VerDetalles;
