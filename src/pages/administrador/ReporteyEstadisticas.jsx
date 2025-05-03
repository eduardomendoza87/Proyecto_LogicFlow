
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ReporteyEstadisticas() {
  const cursos = [
    {
      id: 1,
      nombre: "Matemáticas 1",
      docente: "Juan Pérez",
      inscritos: "30",
      avance: 70,
      estado: "Finalizado",
    },
  ];

  const evaluaciones = [
    {
      id: 1,
      nombre: "Examen",
      curso: "Ciencias Naturales",
      docente: "María López",
      promedio: "9.5",
      entregas: "20",
    },
    {
      id: 2,
      nombre: "Tarea 3",
      curso: "Ciencias Naturales",
      docente: "María López",
      promedio: "8.7",
      entregas: "18",
    },
  ];

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-negroPersonalizado">
        Reportes y Estadísticas
      </h1>

      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-center">
        <p className="text-lg text-negroPersonalizado">
          Visualiza el rendimiento de los cursos, evaluaciones y participación de los estudiantes.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-6 flex-wrap mb-16">
        <input
          type="text"
          placeholder="Buscar curso o docente"
          className="shadow border rounded py-2 px-3 w-full md:flex-1 text-negroPersonalizado focus:ring-2 focus:ring-cafe1Personalizado"
        />
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Curso</option>
          <option>Ciencias</option>
          <option>Matemáticas</option>
        </select>
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Docente</option>
          <option>Juan Pérez</option>
          <option>María López</option>
        </select>
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Área académica</option>
          <option>Exactas</option>
          <option>Humanidades</option>
        </select>
      </div>

      {/* Tabla cursos */}
      <div className="max-h-[600px] overflow-y-auto shadow-md sm:rounded-lg mb-16">
        <table className="w-full text-sm text-left text-negroPersonalizado border border-gray-300">
          <thead className="bg-cafe3Personalizado text-white">
            <tr>
              <th className="px-6 py-3">Nombre</th>
              <th className="px-6 py-3">Docente</th>
              <th className="px-6 py-3">Inscritos</th>
              <th className="px-6 py-3">Avance</th>
              <th className="px-6 py-3">Estado</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {cursos.map((curso) => (
              <tr key={curso.id}>
                <td>{curso.nombre}</td>
                <td>{curso.docente}</td>
                <td>{curso.inscritos}</td>
                <td>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-green-500 h-4 rounded-full"
                      style={{ width: `${curso.avance}%` }}
                    ></div>
                  </div>
                  <span className="text-sm ml-2">{curso.avance}%</span>
                </td>
                <td>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    curso.estado === "Finalizado"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {curso.estado}
                  </span>
                </td>
                <td className="flex flex-wrap gap-2">
                  <Link to="/admin/detalles-cursos-admin">
                    <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                      Ver detalles
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabla evaluaciones */}
      <div className="max-h-[600px] overflow-y-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-negroPersonalizado border border-gray-300">
          <thead className="bg-cafe3Personalizado text-white">
            <tr>
              <th className="px-6 py-3">Evaluación</th>
              <th className="px-6 py-3">Curso</th>
              <th className="px-6 py-3">Docente</th>
              <th className="px-6 py-3">Promedio</th>
              <th className="px-6 py-3">Entregas</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {evaluaciones.map((ev) => (
              <tr key={ev.id}>
                <td>{ev.nombre}</td>
                <td>{ev.curso}</td>
                <td>{ev.docente}</td>
                <td>{ev.promedio}</td>
                <td>{ev.entregas}</td>
                <td className="flex flex-wrap gap-2">
                  <Link to="/admin/detalles-evaluacion-admin">
                    <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                      Ver detalles
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReporteyEstadisticas;
