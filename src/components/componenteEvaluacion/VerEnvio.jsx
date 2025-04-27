import React from "react";
import { Link } from "react-router-dom";

function VerEnvio() {
  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6 min-h-screen">
      <h3 className="text-3xl font-bold text-center mb-10 text-negroPersonalizado">
        Mi envío
      </h3>

      {/* Simulación de entrega */}
      <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <p className="text-lg mb-6 text-negroPersonalizado">
          <strong>Pregunta:</strong> ¿Qué es React?
        </p>
        <p className="text-md mb-6 text-negroPersonalizado">
          <strong>Tu respuesta:</strong> B) Una biblioteca de JavaScript
        </p>

        <p className="text-md mb-6 text-negroPersonalizado">
          <strong>Estado:</strong> Entregado - En revisión
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

export default VerEnvio;
