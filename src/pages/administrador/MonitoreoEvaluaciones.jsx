import React, { useState } from "react";
import { Link } from "react-router-dom";

function MonitoreoEvaluaciones() {
  const evaluaciones = [
    {
      id: 1,
      nombre: "Evaluación Final",
      curso: "Matemáticas I",
      docente: "Juan Pérez",
      npreguntas: 10,
      estado: "Activo",
      fecha: "2024-04-21",
      tipo: "Examen",
      calificada: true,
    },
    {
      id: 2,
      nombre: "Tarea 3",
      curso: "Ciencias Naturales",
      docente: "María López",
      npreguntas: 5,
      estado: "Inactivo",
      fecha: "2024-04-10",
      tipo: "Tarea",
      calificada: false,
    },
  ];

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-negroPersonalizado">
        Monitoreo de evaluaciones
      </h1>

      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-center">
        <p className="text-lg text-negroPersonalizado">
          Monitorea las evaluaciones creadas por los docentes.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-6 flex-wrap mb-16">
        <input
          type="text"
          placeholder="Buscar"
          className="shadow border rounded py-2 px-3 w-full md:flex-1 text-negroPersonalizado focus:ring-2 focus:ring-cafe1Personalizado"
        />
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Curso</option>
          <option>Ciencias</option>
          <option>Matemáticas</option>
        </select>
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Estado</option>
          <option>Activo</option>
          <option>Inactivo</option>
        </select>
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Docente</option>
          <option>Juan Pérez</option>
          <option>María López</option>
        </select>
      </div>

      {/* Tabla de evaluaciones */}
      <div className="max-h-[600px] overflow-y-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-negroPersonalizado border border-gray-300">
          <thead className="bg-cafe3Personalizado text-white">
            <tr>
              <th className="px-6 py-3">Nombre de evaluación</th>
              <th className="px-6 py-3">Curso asociado</th>
              <th className="px-6 py-3">Docente</th>
              <th className="px-6 py-3">Preguntas</th>
              <th className="px-6 py-3">Tipo</th>
              <th className="px-6 py-3">Estado</th>
              <th className="px-6 py-3">Calificada</th>
              <th className="px-6 py-3">Fecha</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
          {evaluaciones.map((evaluacion) => (
  <tr key={evaluacion.id}>
    <td>{evaluacion.nombre}</td>
    <td>{evaluacion.curso}</td>
    <td>{evaluacion.docente}</td>
    <td>{evaluacion.npreguntas}</td>
    <td>{evaluacion.tipo}</td>
    <td>
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          evaluacion.estado === "Activo"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {evaluacion.estado}
      </span>
    </td>
    <td>
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          evaluacion.calificada
            ? "bg-blue-100 text-blue-800"
            : "bg-yellow-100 text-yellow-800"
        }`}
      >
        {evaluacion.calificada ? "Sí" : "Pendiente"}
      </span>
    </td>
    <td>{evaluacion.fecha}</td>
    <td className="flex flex-wrap gap-2">
      <Link to="/admin/ver-detalles-evaluacion">
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

export default MonitoreoEvaluaciones;
