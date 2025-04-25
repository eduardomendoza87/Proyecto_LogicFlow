import React, { useState } from "react";
import { Link } from "react-router-dom";

function VerEvaluacion() {
  const [showModal, setShowModal] = useState(false);

  const handleEliminar = () => {
    setShowModal(false);
    alert("Evaluación eliminada correctamente.");
  };

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/* Encabezado general */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-center">
        <h4 className="text-2xl font-bold text-negroPersonalizado mb-4">Evaluación: </h4>
        <p className="text-negroPersonalizado"><strong>Curso:</strong></p>
        <p className="text-negroPersonalizado"><strong>Fecha de entrega:</strong></p>
        <p className="text-negroPersonalizado"><strong>Estado:</strong></p>
      </div>

      {/* Descripción */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12">
        <h5 className="text-xl font-semibold mb-4 text-negroPersonalizado">Descripción de la evaluación</h5>
        <p className="text-gray-700">Aquí va la descripción de la evaluación. Puedes incluir detalles sobre el propósito de la evaluación, los criterios de calificación y cualquier otra información relevante.</p>
      </div>

      {/* Preguntas */}
      <div className="grid grid-cols-1 gap-8 mb-12">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="bg-blancoPersonalizado p-6 rounded-lg shadow">
            <p className="text-lg font-semibold text-negroPersonalizado">Pregunta {num}</p>
            <p className="text-gray-700">Aquí va la pregunta. Puedes incluir opciones de respuesta si es necesario.</p>
          </div>
        ))}
      </div>

      {/* Material adicional */}
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12">
          <h5 className="text-xl font-semibold mb-4 text-negroPersonalizado">Material adicional</h5>
          <p className="text-gray-700">Aquí puedes incluir enlaces a documentos, videos o cualquier otro material que sea relevante para la evaluación.</p>
        </div>
      </div>

      {/* Botones */}
      <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
        <Link to="/docente/editar-evaluacion">
          <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
            Editar evaluación
          </button>
        </Link>
        <Link to="/docente/calificar-respuestas">
          <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
            Ver respuestas de alumnos
          </button>
        </Link>
        <button
          onClick={() => setShowModal(true)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
        >
          Eliminar evaluación
        </button>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">¿Eliminar evaluación?</h2>
            <p className="mb-6">Esta acción no se puede deshacer. ¿Estás seguro?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleEliminar}
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

export default VerEvaluacion;
