import React from "react";
import { Link } from "react-router-dom";

function VerDetallesEvaluacion() {
  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/* Encabezado */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-10 text-center">
        <h1 className="text-3xl font-bold mb-2 text-negroPersonalizado">Detalles de la evaluación</h1>
        <h2 className="text-xl text-gray-700">Evaluación Final - Matemáticas 1</h2>
        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 mt-4 rounded-full text-sm font-medium">
          Activo
        </span>
      </div>

      {/* Información básica */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 text-center">Información general</h3>
        <p><strong>Curso asociado:</strong> Matemáticas 1</p>
        <p><strong>Docente creador:</strong> Juan Pérez</p>
        <p><strong>Fecha de creación:</strong> 2024-10-01</p>
        <p><strong>Tipo de evaluación:</strong> Sumativa</p>
        <p><strong>Modalidad:</strong> Virtual</p>
        <p><strong>Número de preguntas:</strong> 10</p>
      </div>

      {/* Configuración */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 text-center">Configuración y reglas</h3>
        <p><strong>Fecha límite:</strong> 2024-12-01</p>
        <p><strong>Tiempo asignado:</strong> 40 minutos</p>
        <p><strong>Intentos permitidos:</strong> 1</p>
        <p><strong>Calificación mínima:</strong> 6.0</p>
        <p><strong>Retroalimentación inmediata:</strong> Sí</p>
      </div>

      {/* Resumen de preguntas */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 text-center">Preguntas incluidas</h3>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>¿Cuál es el resultado de 2 + 2? (Opción múltiple)</li>
          <li>Resuelve la ecuación x² - 4 = 0 (Respuesta corta)</li>
          <li>Selecciona los elementos de un conjunto (Selección múltiple)</li>
          {/* Puedes repetir o mapear estas preguntas desde la lógica futura */}
        </ul>
      </div>

      {/* Botones */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4 w-full">
        <Link to="/admin/monitoreo-evaluaciones">
          <button className="bg-gray-400 text-white font-bold py-2 px-4 rounded shadow hover:bg-gray-500">
            Regresar
          </button>
        </Link>
        <button className="bg-cafe3Personalizado text-black font-bold py-2 px-4 rounded shadow hover:bg-opacity-80">
          Ver evaluación completa
        </button>
        <button className="bg-cafe3Personalizado text-black font-bold py-2 px-4 rounded shadow hover:bg-opacity-80">
          Descargar PDF
        </button>
      </div>
    </div>
  );
}

export default VerDetallesEvaluacion;
