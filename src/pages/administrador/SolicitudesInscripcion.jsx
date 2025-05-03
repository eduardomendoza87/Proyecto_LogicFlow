import React, { useState } from "react";
import { Link } from "react-router-dom";

function SolicitudesInscripcion() {
  const [modalAprobar, setModalAprobar] = useState(false);
  const [modalRechazar, setModalRechazar] = useState(false);

  const solicitud = [
    {
      id: 1,
      alumno: "Carlos Torres",
      matricula: "UCLA20240123",
      curso: "Matemáticas",
      docente: "Juan Pérez",
      fecha: "2025-05-01",
      estado: "Pendiente",
    },
  ];

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-negroPersonalizado">
        Solicitudes de inscripción
      </h1>

      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-center">
        <p className="text-lg text-negroPersonalizado">
          Gestiona las solicitudes enviadas por alumnos para inscribirse en cursos.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-6 flex-wrap mb-16">
        <input
          type="text"
          placeholder="Buscar alumno o matrícula"
          className="shadow border rounded py-2 px-3 w-full md:flex-1 text-negroPersonalizado focus:ring-2 focus:ring-cafe1Personalizado"
        />
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Curso solicitado</option>
          <option>Ciencias</option>
          <option>Matemáticas</option>
        </select>
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Estado de solicitud</option>
          <option>Pendiente</option>
          <option>Aprobada</option>
          <option>Rechazada</option>
        </select>
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Fecha de solicitud</option>
          <option>Reciente</option>
          <option>Antiguas</option>
        </select>
      </div>

      {/* Tabla */}
      <div className="max-h-[600px] overflow-y-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-negroPersonalizado border border-gray-300">
          <thead className="bg-cafe3Personalizado text-white">
            <tr>
              <th className="px-6 py-3">Alumno</th>
              <th className="px-6 py-3">Matrícula</th>
              <th className="px-6 py-3">Curso</th>
              <th className="px-6 py-3">Docente</th>
              <th className="px-6 py-3">Fecha</th>
              <th className="px-6 py-3">Estado</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {solicitud.map((s) => (
              <tr key={s.id}>
                <td>{s.alumno}</td>
                <td>{s.matricula}</td>
                <td>{s.curso}</td>
                <td>{s.docente}</td>
                <td>{s.fecha}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      s.estado === "Pendiente"
                        ? "bg-yellow-100 text-yellow-800"
                        : s.estado === "Aprobada"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {s.estado}
                  </span>
                </td>
                <td className="flex flex-wrap gap-2">
                  <Link to="/admin/ver-detalles-solicitud">
                    <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                      Ver detalles
                    </button>
                  </Link>
                  <button
                    onClick={() => setModalAprobar(true)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-opacity-90"
                  >
                    Aprobar
                  </button>
                  <button
                    onClick={() => setModalRechazar(true)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-opacity-90"
                  >
                    Rechazar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL APROBAR */}
      {modalAprobar && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4 text-center">¿Aprobar solicitud?</h3>
            <p className="text-center text-gray-600 mb-6">Esta acción permitirá al alumno unirse al curso.</p>
            <div className="flex justify-end gap-4">
              <button onClick={() => setModalAprobar(false)} className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Aprobar</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL RECHAZAR */}
      {modalRechazar && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4 text-center text-red-600">¿Rechazar solicitud?</h3>
            <p className="text-center text-gray-600 mb-6">Esta acción impedirá al alumno inscribirse en el curso.</p>
            <div className="flex justify-end gap-4">
              <button onClick={() => setModalRechazar(false)} className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded">Rechazar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SolicitudesInscripcion;
