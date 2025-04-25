import React, { useState } from "react";
import { Link } from "react-router-dom";

function ModulosyClases() {
  const [showModal, setShowModal] = useState(false);

  const handleEliminarModulo = () => {
    setShowModal(false);
    alert("Módulo eliminado correctamente.");
  };

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/*Titulo Principal*/}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-negroPersonalizado">
        Módulos y clases del curso
      </h2>

      {/* Resumen superior */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-left">
        <p><strong>Nombre del módulo:</strong></p>
        <p><strong>Curso relacionado:</strong></p>
        <p><strong>Estado:</strong></p>
        <p><strong>Fecha de inicio:</strong></p>
        <p><strong>Número total de clases:</strong></p>
      </div>

      {/*Botones de creación*/}
      <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
        <Link to="/docente/mis-cursos">
          <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80 mb-12">
            Volver a mis cursos
          </button>
        </Link>
        <Link to="/docente/crear-modulo">
          <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80 mb-12">
            Crear módulo
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
          <option>Fecha</option>
        </select>
      </div>

      {/*Cards*/}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blancoPersonalizado p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
          <p><strong>Nombre del módulo:</strong> Introducción a React</p>
          <p><strong>Fecha de creación:</strong> 2025-04-20</p>
          <p><strong>Descripción:</strong> Introducción a los fundamentos de React.</p>

          <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
            <Link to="/docente/ver-clases">
              <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                Ver clases
              </button>
            </Link>
            <Link to="/docente/editar-modulo">
              <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                Editar módulo
              </button>
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
            >
              Eliminar módulo
            </button>
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">¿Eliminar módulo?</h2>
            <p className="mb-6">Esta acción no se puede deshacer. ¿Estás seguro?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleEliminarModulo}
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

export default ModulosyClases;
