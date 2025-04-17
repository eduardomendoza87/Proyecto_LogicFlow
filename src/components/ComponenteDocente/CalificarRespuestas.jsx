import React from "react";
import { Link } from "react-router-dom";

function CalificarRespuestas() {
  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">

      {/* Resumen general */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-center">
        <h4 className="text-2xl font-bold text-negroPersonalizado mb-4">
          Evaluación: Desarrollo Web - Parcial 1
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-negroPersonalizado">
          <p><strong>Total de alumnos:</strong> 25</p>
          <p><strong>Entregas realizadas:</strong> 20</p>
          <p><strong>Promedio actual:</strong> 8.3</p>
          <p><strong>Estado:</strong> En revisión</p>
        </div>
      </div>

      {/*  Búsqueda y filtros */}
      <div className="flex flex-col md:flex-row gap-6 flex-wrap mb-12">
        <input
          type="text"
          placeholder="Buscar estudiante..."
          className="shadow border rounded py-2 px-3 w-full md:flex-1 text-negroPersonalizado focus:ring-2 focus:ring-cafe1Personalizado"
        />
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Estado de entrega</option>
          <option>En curso</option>
          <option>Pendiente</option>
          <option>Finalizado</option>
        </select>
      </div>

      {/*  Cards de estudiantes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {[1, 2, 3, 4].map((alumno, index) => (
          <div key={index} className="bg-blancoPersonalizado p-6 rounded-lg shadow text-negroPersonalizado">
            <h4 className="text-xl font-semibold mb-2">Alumno: Juan Pérez</h4>
            <p><strong>Estado de entrega:</strong> Finalizado</p>
            <p><strong>Fecha de envío:</strong> 2025-04-15</p>
            <p><strong>Calificación:</strong> 9.0</p>

            <div className="flex justify-center mt-4">
              <Link to="/docente/ver-respuestas">
                <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                  Ver respuestas
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/*  Botón publicar calificaciones */}
      <div className="text-center mt-10">
        <button className="bg-cafe2Personalizado text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-cafe4Personalizado transition">
          Publicar calificaciones
        </button>
      </div>
    </div>
  );
}

export default CalificarRespuestas;
