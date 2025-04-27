import React from "react";
import { Link } from "react-router-dom";

function VerExamen() {
  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6 min-h-screen">
      <h3 className="text-3xl font-bold text-center mb-10 text-negroPersonalizado">
        Resolver Examen
      </h3>

      {/* Simulación examen */}
      <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <p className="text-lg mb-6 text-negroPersonalizado">
          <strong>Pregunta 1:</strong> ¿Qué es React?
        </p>
        <div className="flex flex-col gap-4">
          <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-negroPersonalizado font-bold py-2 px-4 rounded-lg">
            A) Una base de datos
          </button>
          <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-negroPersonalizado font-bold py-2 px-4 rounded-lg">
            B) Una biblioteca de JavaScript
          </button>
          <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-negroPersonalizado font-bold py-2 px-4 rounded-lg">
            C) Un servidor web
          </button>
          <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-negroPersonalizado font-bold py-2 px-4 rounded-lg">
            D) Un sistema operativo
          </button>
        </div>

        {/* Botón enviar */}
        <div className="text-center mt-10">
          <button type="summit" className="bg-cafe2Personalizado hover:bg-opacity-80 text-black px-6 py-2 rounded-lg font-bold shadow-md">
            Enviar respuestas
          </button>
        </div>
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

export default VerExamen;
