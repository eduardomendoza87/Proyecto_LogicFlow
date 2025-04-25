import React, { useState } from "react";
import { Link } from "react-router-dom";

function VerClases() {
  const [showModal, setShowModal] = useState(false);

  const handleEliminarClase = () => {
    setShowModal(false);
    alert("Clase eliminada correctamente.");
  };

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/* Título principal */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-negroPersonalizado">
        Clases
      </h2>

      {/* Resumen superior */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-left">
        <p><strong>Nombre del curso:</strong> Desarrollo Web</p>
        <p><strong>Semestre:</strong> 5to</p>
        <p><strong>Modalidad:</strong> Virtual</p>
        <p><strong>Estado del curso:</strong> Activo</p>
      </div>

      {/* Botón Crear clase */}
      <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto mb-6">
        <Link to="/docente/crear-clase">
          <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
            Crear clase
          </button>
        </Link>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-col md:flex-row gap-6 flex-wrap mb-16">
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="shadow border rounded py-2 px-3 w-full md:flex-1 text-negroPersonalizado focus:ring-2 focus:ring-cafe1Personalizado"
        />
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Estado </option>
          <option>Publicado</option>
          <option>Borrador</option>
        </select>
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Fecha</option>
          <option>Hoy</option>
          <option>Últimos 7 días</option>
          <option>Este mes</option>
        </select>
      </div>

      {/* Cards de clases */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blancoPersonalizado p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
          <h4 className="text-lg font-bold mb-2 text-negroPersonalizado">
            Clase: Introducción a React
          </h4>
          <p><strong>Fecha programada:</strong> 2025-05-10</p>
          <p><strong>Duración:</strong> 90 minutos</p>
          <p><strong>Estado:</strong> Publicado</p>
          <p><strong>Tipo de material asociado:</strong> PDF</p>

          <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
            <Link to="/docente/ver-detalles-clase">
              <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                Ver detalles
              </button>
            </Link>
            <Link to="/docente/editar-clase">
              <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                Editar clase
              </button>
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
            >
              Eliminar clase
            </button>
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">¿Eliminar clase?</h2>
            <p className="mb-6">Esta acción no se puede deshacer. ¿Estás seguro?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleEliminarClase}
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

export default VerClases;
