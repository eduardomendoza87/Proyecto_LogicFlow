import React from "react";
import { useLocation } from "react-router-dom";

function VerExamen() {
  const { state } = useLocation(); // para recibir props si vienen de EvaluacionesCursos

  const examen = state || {
    curso: "Matemáticas I",
    fecha: "2025-04-20",
    duracion: "45 minutos",
    tipo: "Parcial",
    estado: "Pendiente",
    instrucciones: "Lee con atención cada pregunta. Dispones de un intento.",
  };

  return (
    <div className="bg-cafe4Personalizado min-h-screen p-8 flex flex-col items-center justify-start">
      <div className="w-full max-w-3xl bg-blancoPersonalizado rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-negroPersonalizado mb-6 text-center">
          Detalles del Examen
        </h1>

        <div className="text-lg text-negroPersonalizado space-y-4">
          <p><strong>📘 Curso:</strong> {examen.curso}</p>
          <p><strong>🧪 Tipo de examen:</strong> {examen.tipo}</p>
          <p><strong>📆 Fecha límite:</strong> {examen.fecha}</p>
          <p><strong>⏱ Duración:</strong> {examen.duracion}</p>
          <p>
            <strong>📄 Instrucciones:</strong> {examen.instrucciones}
          </p>
          <p>
            <strong>🟡 Estado:</strong>{" "}
            <span className="inline-block bg-yellow-100 text-yellow-800 font-semibold px-2 py-1 rounded">
              {examen.estado}
            </span>
          </p>
        </div>

        {/* Botón para iniciar examen */}
        <div className="mt-8 flex justify-center">
          <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-negroPersonalizado font-bold py-2 px-6 rounded-lg shadow-md">
            Iniciar examen
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerExamen;
