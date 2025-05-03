import React from "react";
import { Link } from "react-router-dom";

function DetallesEvaluacionAdmin() {
  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/* Información de la Evaluación */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Detalles de la evaluación</h2>
        <p><strong>Nombre de la evaluación:</strong> Examen Final</p>
        <p><strong>Curso asociado:</strong> Ciencias Naturales</p>
        <p><strong>Docente:</strong> María López</p>
        <p><strong>Fecha de creación:</strong> 2025-04-20</p>
        <p><strong>Promedio general:</strong> 8.7</p>
        <p><strong>Entregas realizadas:</strong> 25</p>
        <p><strong>Entregas pendientes:</strong> 5</p>
        <p><strong>Número de preguntas:</strong> 10</p>
        <p><strong>Estado:</strong> Activa</p>
      </div>

      {/* Acciones */}
      <div className="flex justify-center space-x-4">
        <Link to="/admin/reportes-estadisticas">
          <button className="bg-gray-400 text-white font-bold py-2 px-4 rounded shadow hover:bg-gray-500">
            Regresar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DetallesEvaluacionAdmin;
