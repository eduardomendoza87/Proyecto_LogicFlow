import React, { useState } from "react";
import { Link } from "react-router-dom";

function GestionCursos() {
  const [modalCurso, setModalCurso] = useState(null);

  const cursos = [
    {
      id: 1,
      nombre: "Matemáticas 1",
      docente: "Juan Pérez",
      modalidad: "Virtual",
      estado: "Activo",
      duracion: "60 min",
    },
  ];

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-negroPersonalizado">
        Gestión de cursos
      </h1>

      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-center">
        <p className="text-lg text-negroPersonalizado">
          Administra todos los cursos disponibles en la plataforma, asigna docentes y controla su estado.
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
          <option>Área</option>
          <option>Ciencias</option>
          <option>Matemáticas</option>
        </select>
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Estado</option>
          <option>Activo</option>
          <option>Inactivo</option>
        </select>
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Modalidad</option>
          <option>Virtual</option>
          <option>Presencial</option>
        </select>
        <Link to="/admin/crear-curso" className="w-full md:w-auto">
          <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
            Crear Curso
          </button>
        </Link>
      </div>

      {/* Tabla de cursos */}
      <div className="max-h-[600px] overflow-y-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-negroPersonalizado border border-gray-300">
          <thead className="bg-cafe3Personalizado text-white">
            <tr>
              <th className="px-6 py-3">Nombre</th>
              <th className="px-6 py-3">Docente</th>
              <th className="px-6 py-3">Modalidad</th>
              <th className="px-6 py-3">Estado</th>
              <th className="px-6 py-3">Duración</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {cursos.map((curso) => (
              <tr key={curso.id}>
                <td>{curso.nombre}</td>
                <td>{curso.docente}</td>
                <td>{curso.modalidad}</td>
                <td>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {curso.estado}
                  </span>
                </td>
                <td>{curso.duracion}</td>
                <td className="flex flex-wrap gap-2">
                  <Link to="/admin/editar-curso">
                    <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">Editar</button>
                  </Link>
                  <Link to="/admin/ver-detalles-curso">
                    <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">Detalles</button>
                  </Link>
                  <button
                    onClick={() => setModalCurso({ tipo: "estado", id: curso.id })}
                    className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80"
                  >
                    Cambiar estado
                  </button>
                  <button
                    onClick={() => setModalCurso({ tipo: "docente", id: curso.id })}
                    className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80"
                  >
                    Asignar docente
                  </button>
                  <button
                    onClick={() => setModalCurso({ tipo: "eliminar", id: curso.id })}
                    className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modales */}
      {modalCurso?.tipo === "estado" && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4 text-center">¿Cambiar estado del curso?</h3>
            <p className="text-center text-gray-600 mb-6">Actualmente está <strong>Activo</strong>. ¿Deseas cambiarlo?</p>
            <div className="flex justify-end gap-4">
              <button onClick={() => setModalCurso(null)} className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Confirmar</button>
            </div>
          </div>
        </div>
      )}

      {modalCurso?.tipo === "docente" && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-center">Asignar nuevo docente</h3>
            <select className="w-full border rounded px-3 py-2 mb-6">
              <option>Selecciona un docente</option>
              <option>Juan Pérez</option>
              <option>María López</option>
            </select>
            <div className="flex justify-end gap-4">
              <button onClick={() => setModalCurso(null)} className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Asignar</button>
            </div>
          </div>
        </div>
      )}

      {modalCurso?.tipo === "eliminar" && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4 text-center text-red-600">¿Eliminar curso?</h3>
            <p className="text-center text-gray-600 mb-6">Esta acción es irreversible. ¿Deseas continuar?</p>
            <div className="flex justify-end gap-4">
              <button onClick={() => setModalCurso(null)} className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded">Eliminar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GestionCursos;
