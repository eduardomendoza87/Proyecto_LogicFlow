import React from "react";
import { Link } from "react-router-dom";

function VerRespuestasEvaluacion() {
  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/* Encabezado */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-negroPersonalizado mb-4">
          Respuestas de la evaluación
        </h2>
        <div className="text-left text-negroPersonalizado space-y-2">
          <p><strong>Curso:</strong> Desarrollo Web</p>
          <p><strong>Evaluación:</strong> Examen Parcial</p>
          <p><strong>Fecha de entrega:</strong> 07/05/2025</p>
          <p><strong>Estado:</strong> Entregado</p>
        </div>
      </div>

      {/* Preguntas y respuestas */}
      <div className="grid grid-cols-1 gap-6 mb-12">
        {[1, 2, 3].map((num) => (
          <div key={num} className="bg-blancoPersonalizado p-6 rounded-lg shadow space-y-4">
            <p className="text-lg font-bold text-negroPersonalizado">Pregunta {num}</p>
            <p className="text-gray-700"><strong>Respuesta del alumno:</strong> Aquí va la respuesta escrita del estudiante.</p>

            {/* Comentario del docente */}
            <div>
              <label htmlFor={`comentario${num}`} className="block font-semibold text-negroPersonalizado mb-1">
                Comentario del docente:
              </label>
              <textarea
                id={`comentario${num}`}
                className="w-full h-24 border rounded-lg p-2 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                placeholder="Escribe un comentario..."
              />
            </div>

            {/* Calificación */}
            <div>
              <label htmlFor={`calificacion${num}`} className="block font-semibold text-negroPersonalizado mb-1">
                Calificación:
              </label>
              <input
                id={`calificacion${num}`}
                type="number"
                max="10"
                min="0"
                className="w-24 border rounded px-3 py-2 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                placeholder="0"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Botones de acción */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <button className="bg-cafe3Personalizado text-white font-bold px-6 py-2 rounded-lg shadow hover:bg-opacity-80">
          Calificar
        </button>
        <Link to="/docente/detalles-alumno-curso">
          <button className="bg-gray-400 text-white font-bold px-6 py-2 rounded-lg shadow hover:bg-gray-500">
            Volver 
          </button>
        </Link>
      </div>
    </div>
  );
}

export default VerRespuestasEvaluacion;
