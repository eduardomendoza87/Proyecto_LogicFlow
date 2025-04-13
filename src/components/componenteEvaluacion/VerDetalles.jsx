import React from "react";

function VerDetalles() {
  return (
    <div className="bg-cafe4Personalizado min-h-screen py-12 px-6 flex justify-center">
      <div className="bg-blancoPersonalizado w-full max-w-4xl p-8 rounded-lg shadow-lg">

        {/* Título */}
        <h2 className="text-3xl font-bold text-negroPersonalizado text-center mb-8">
          Detalles del examen
        </h2>

        {/* Información general */}
        <div className="mb-6 space-y-2 text-lg text-negroPersonalizado">
          <p><strong>📘 Curso:</strong> Matemáticas I</p>
          <p><strong>🧪 Tipo:</strong> Examen Parcial</p>
          <p><strong>🗓 Fecha:</strong> 20 de abril de 2025</p>
          <p><strong>⏳ Duración:</strong> 45 minutos</p>
          <p>
            <strong>📈 Calificación:</strong>{" "}
            <span className="text-green-700 font-bold">8.5 / 10</span>
          </p>
          <p>
            <strong>✅ Estado:</strong>{" "}
            <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
              Aprobado
            </span>
          </p>
        </div>

        {/* Retroalimentación (si aplica) */}
        <div className="bg-gray-100 p-4 rounded mb-8">
          <h4 className="font-semibold text-negroPersonalizado mb-2">📌 Comentarios del docente:</h4>
          <p className="text-gray-700">
            Buen desempeño general. Revisa la pregunta 3 para reforzar el tema de ecuaciones cuadráticas.
          </p>
        </div>

        {/* Botón de acción */}
        <div className="flex justify-center">
          <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-6 py-2 rounded-lg hover:bg-opacity-80 shadow-md">
            Descargar resumen en PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerDetalles;
