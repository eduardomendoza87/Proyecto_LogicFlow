import React from "react";
import { Link } from "react-router-dom";

function DetallesAlumnoCurso() {
  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/* Título principal */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-negroPersonalizado">
        Detalles del Alumno en el curso
      </h1>

      {/* Resumen superior */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-center">
        <p className="text-lg text-negroPersonalizado">
          Aquí puedes ver los detalles del alumno en base al curso seleccionado.
        </p>
      </div>

      {/* Contenido estructurado en grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Resumen del progreso */}
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Resumen de progreso</h2>
          <p><strong>Nombre del alumno:</strong></p>
          <p><strong>Curso:</strong></p>
          <p><strong>Estado académico:</strong></p>
          <p><strong>Fecha de inicio del curso:</strong></p>
          <p><strong>Progreso actual del curso:</strong> 75%</p>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
            <div className="bg-cafe3Personalizado h-4 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="mt-2"><strong>Promedio de evaluaciones:</strong> 9.0</p>
          <div className="mt-4">
            <Link to="/docente/estudiantes">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md">
                Volver a estudiantes
              </button>
            </Link>
          </div>
        </div>

        {/* Tabla de evaluaciones */}
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Evaluaciones</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-negroPersonalizado border border-gray-300">
              <thead className="bg-cafe3Personalizado text-white">
                <tr>
                  <th className="px-6 py-3">Nombre de la evaluación</th>
                  <th className="px-6 py-3">Calificación</th>
                  <th className="px-6 py-3">Estado</th>
                  <th className="px-6 py-3">Fecha de entrega</th>
                  <th className="px-6 py-3">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td>Examen desarrollo web</td>
                  <td>9</td>
                  <td>Entregado</td>
                  <td>07/05/2025</td>
                  <td>
                    <Link to="/docente/ver-respuesta-evaluacion">
                    <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                      Ver respuestas
                    </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Clases del curso */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4 text-center">Clases del curso</h2>
        </div>
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6 md:col-span-2">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-negroPersonalizado border border-gray-300">
              <thead className="bg-cafe3Personalizado text-white">
                <tr>
                  <th className="px-6 py-3">Nombre de la clase</th>
                  <th className="px-6 py-3">Estado</th>
                  <th className="px-6 py-3">Fecha programada</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td>Introducción a React</td>
                  <td>Vista</td>
                  <td>07/05/2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Retroalimentación */}
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6 md:col-span-2">
          <h2 className="text-xl font-bold mb-4 text-center">Retroalimentación</h2>
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded-lg"
            placeholder="Escribe tus comentarios aquí..."
          ></textarea>
          <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md mt-4">
            Enviar comentario
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetallesAlumnoCurso;
