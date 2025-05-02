import React, { useState } from "react";
import { Link } from "react-router-dom";

function VerDetallesCursos() {
  const [modalEstado, setModalEstado] = useState(false);
  const [modalAsignar, setModalAsignar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

        {/* Información general del curso */}
        <div className="bg-blancoPersonalizado col-span-2 rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-center">Información general del curso</h2>
          <h3 className="text-2xl font-bold text-center text-negroPersonalizado mb-6">Matemáticas Avanzadas</h3>
          <p><strong>Descripción breve:</strong> Este curso es para desarrollar xvdsvsd</p>
          <p><strong>Semestre dirigido:</strong> 9</p>
          <p><strong>Duración:</strong> 60 min</p>
          <p><strong>Modalidad:</strong> 
            <span className="ml-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Virtual</span>
          </p>
          <p><strong>Estado:</strong> 
            <span className="ml-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Activo</span>
          </p>
          <p><strong>Docente asignado:</strong> Juan Pérez</p>
        </div>

        {/* Configuración académica */}
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-center">Configuración académica</h2>
          <p><strong>Fecha de inicio:</strong> 2024-06-10</p>
          <p><strong>Fecha fin:</strong> 2024-12-15</p>
          <p><strong>Horario del curso:</strong> Lunes y Miércoles 10:00 - 11:30 AM</p>
          <p><strong>Cantidad máxima de alumnos:</strong> 30</p>
          <p><strong>Área asignada:</strong> Ciencias</p>
        </div>

        {/* Materiales relacionados */}
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-center">Materiales relacionados</h2>
          <p><strong>Archivo PDF:</strong> <button className="text-blue-600 underline ml-2">Descargar</button></p>
          <p><strong>Enlace a video:</strong> <a href="#" target="_blank" className="text-blue-600 underline ml-2">Ver video</a></p>
          <p><strong>Otro tipo de recursos:</strong> Ninguno</p>
        </div>
      </div>

      {/* Botones */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4 w-full">
        <Link to="/admin/editar-curso">
          <button className="bg-cafe3Personalizado text-black font-bold py-2 px-4 rounded shadow hover:bg-opacity-80">
            Editar curso
          </button>
        </Link>
        <button onClick={() => setModalEstado(true)} className="bg-cafe3Personalizado text-black font-bold py-2 px-4 rounded shadow hover:bg-opacity-80">
          Cambiar estado
        </button>
        <button onClick={() => setModalAsignar(true)} className="bg-cafe3Personalizado text-black font-bold py-2 px-4 rounded shadow hover:bg-opacity-80">
          Asignar nuevo docente
        </button>
        <button onClick={() => setModalEliminar(true)} className="bg-cafe3Personalizado text-black font-bold py-2 px-4 rounded shadow hover:bg-opacity-80">
          Eliminar curso
        </button>
        <Link to="/admin/gestion-cursos">
          <button className="bg-gray-400 text-white font-bold py-2 px-4 rounded shadow hover:bg-gray-500">
            Regresar
          </button>
        </Link>
      </div>

      {/* MODAL: Cambiar estado */}
      {modalEstado && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4 text-center">¿Cambiar estado del curso?</h3>
            <p className="text-center text-gray-600 mb-6">Actualmente está <strong>Activo</strong>. ¿Deseas cambiarlo a <strong>Inactivo</strong>?</p>
            <div className="flex justify-end gap-4">
              <button onClick={() => setModalEstado(false)} className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Confirmar</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Asignar nuevo docente */}
      {modalAsignar && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-center">Asignar nuevo docente</h3>
            <select className="w-full border rounded px-3 py-2 mb-6">
              <option>Selecciona un docente</option>
              <option>Juan Pérez</option>
              <option>María López</option>
              <option>Carlos Méndez</option>
            </select>
            <div className="flex justify-end gap-4">
              <button onClick={() => setModalAsignar(false)} className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Asignar</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Eliminar curso */}
      {modalEliminar && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4 text-center text-red-600">¿Eliminar curso?</h3>
            <p className="text-center text-gray-600 mb-6">Esta acción es irreversible. ¿Estás seguro de eliminar este curso?</p>
            <div className="flex justify-end gap-4">
              <button onClick={() => setModalEliminar(false)} className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded">Eliminar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerDetallesCursos;
