import React, { useState } from "react";
import { Link } from "react-router-dom";

function EvaluacionesDelCurso() {
  const [showModal, setShowModal] = useState(false);

  const handleEliminarEvaluacion = () => {
    setShowModal(false);
    alert("Evaluación eliminada correctamente.");
  };

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/* Título principal */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-negroPersonalizado">
        Evaluaciones del curso
      </h1>

      {/* Resumen superior */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-center">
        <p className="text-lg text-negroPersonalizado">
          Administra, crea y evalúa las actividades y exámenes de tus cursos fácilmente.
        </p>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-col md:flex-row gap-6 flex-wrap mb-16">
        <input
          type="text"
          placeholder="Buscar por nombre evaluación"
          className="shadow border rounded py-2 px-3 w-full md:flex-1 text-negroPersonalizado focus:ring-2 focus:ring-cafe1Personalizado"
        />
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Tipo</option>
          <option>Evaluación</option>
          <option>Actividad</option>
        </select>
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Fecha de creación</option>
          <option>Hoy</option>
          <option>Última semana</option>
          <option>Este mes</option>
        </select>
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Estado</option>
          <option>Borrador</option>
          <option>Publicado</option>
          <option>Calificado</option>
        </select>
      </div>

      {/* Botón de crear evaluación */}
      <div className="flex flex-col md:flex-row items-center gap-6 flex-wrap mb-16">
        <Link to="/docente/crear-evaluacion">
          <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
            Crear evaluación
          </button>
        </Link>
      </div>

      {/* Cards de Evaluaciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blancoPersonalizado p-6 rounded-lg shadow">
          <h4 className="text-xl font-semibold mb-4 text-negroPersonalizado">Curso: Desarrollo Web</h4>
          <div className="space-y-2 text-negroPersonalizado">
            <p><strong>Nombre:</strong> Examen Parcial #1</p>
            <p><strong>Tipo:</strong> Evaluación</p>
            <p><strong>Estado:</strong> Publicado</p>
            <p><strong>Duración:</strong> 45 minutos</p>
            <p><strong>Fecha de entrega:</strong> 2025-05-10</p>
            <p><strong>Total de alumnos:</strong> 25</p>
            <p><strong>Calificación promedio:</strong> 8.5</p>
          </div>

          <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
            <Link to="/docente/ver-evaluacion">
              <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                Ver evaluación
              </button>
            </Link>
            <Link to="/docente/calificar-respuestas">
              <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                Calificar respuestas
              </button>
            </Link>
            <Link to="/docente/editar-evaluacion">
              <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                Editar evaluación
              </button>
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
            >
              Eliminar evaluación
            </button>
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">¿Eliminar evaluación?</h2>
            <p className="mb-6 text-gray-700">Esta acción no se puede deshacer. ¿Estás seguro?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleEliminarEvaluacion}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EvaluacionesDelCurso;
