import React from "react";
import { Link } from "react-router-dom";

function VerCalificacion() {
  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6 min-h-screen">
      <h3 className="text-3xl font-bold text-center mb-10 text-negroPersonalizado">
        Calificación del examen
      </h3>

      {/* Simulación de calificación */}
      <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <p className="text-lg mb-6 text-negroPersonalizado">
          <strong>Examen:</strong> Examen Parcial 1
        </p>
        <p className="text-lg mb-6 text-negroPersonalizado">
          <strong>Calificación obtenida:</strong> 9.5/10
        </p>
        <p className="text-md text-gray-600">
          ¡Excelente trabajo! Sigue así.
        </p>
      </div>

      {/* Regresar */}
      <div className="text-center mt-10">
        <Link to="/evaluacion-especifica">
          <button className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg font-bold">
            Regresar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default VerCalificacion;
