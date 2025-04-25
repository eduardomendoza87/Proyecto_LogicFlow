import React, { useState } from "react";
import { Link } from "react-router-dom";

function MaterialesCurso() {
  const [showModal, setShowModal] = useState(false);
  const [materialSeleccionado, setMaterialSeleccionado] = useState(null);

  const handleEliminarMaterial = () => {
    // Aquí irá la lógica real para eliminar (por ID o nombre)
    alert(`Material "${materialSeleccionado}" eliminado correctamente.`);
    setShowModal(false);
  };

  const abrirModal = (titulo) => {
    setMaterialSeleccionado(titulo);
    setShowModal(true);
  };

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/*Titulo Principal*/}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-negroPersonalizado">
        Materiales del curso
      </h2>

      {/* Resumen superior */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-left">
        <p><strong>Nombre del curso:</strong></p>
        <p><strong>Semestre:</strong></p>
        <p><strong>Modalidad:</strong></p>
        <p><strong>Estado del curso:</strong></p>
      </div>

      {/*Botón subir material*/}
      <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
        <Link to="/docente/formulario-materiales">
          <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80 mb-12">
            Subir material
          </button>
        </Link>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-col md:flex-row gap-6 flex-wrap mb-16">
        <input
          type="text"
          placeholder="Buscar"
          className="shadow border rounded py-2 px-3 w-full md:flex-1 text-negroPersonalizado focus:ring-2 focus:ring-cafe1Personalizado"
        />

        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Tipo de archivo</option>
          <option>PDF</option>
          <option>Video</option>
          <option>Link</option>
        </select>

        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Modalidad</option>
          <option>Presencial</option>
          <option>Virtual</option>
        </select>
      </div>

      {/*Cards*/}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blancoPersonalizado p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
          <p><strong>Título del material:</strong> Introducción a React</p>
          <p><strong>Tipo de archivo:</strong> PDF</p>
          <p><strong>Fecha de subida:</strong> 2025-04-20</p>

          <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
            <Link to="/docente/editar-materiales">
              <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                Editar
              </button>
            </Link>
            <button
              onClick={() => abrirModal("Introducción a React")}
              className="bg-cafe3Personalizado text-black px-4 py-2 rounded-lg shadow hover:bg-cafe4Personalizado"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">¿Eliminar material?</h2>
            <p className="mb-6">
              ¿Estás seguro de que deseas eliminar <strong>"{materialSeleccionado}"</strong>? Esta acción no se puede deshacer.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleEliminarMaterial}
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

export default MaterialesCurso;
