import React from "react";

function DetallesClase() {
  const claseSeleccionada = JSON.parse(localStorage.getItem("detalleClase"));

  if (!claseSeleccionada) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cafe4Personalizado p-6">
        <h2 className="text-2xl font-bold text-negroPersonalizado">No se encontró información de la clase.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cafe4Personalizado p-6 flex flex-col items-center">
      <div className="bg-blancoPersonalizado p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-negroPersonalizado mb-6 text-center">
          Detalles de la Clase
        </h2>

        <div className="space-y-4 text-lg text-negroPersonalizado">
          <p><strong>Curso:</strong> {claseSeleccionada.curso}</p>
          <p><strong>Profesor:</strong> {claseSeleccionada.profesor}</p>
          <p><strong>Horario:</strong> {claseSeleccionada.horario}</p>
          <p><strong>Estado:</strong> {claseSeleccionada.estado}</p>
        </div>

        {/* Botón para regresar */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.history.back()}
            className="bg-cafe3Personalizado hover:bg-opacity-80 text-negroPersonalizado font-bold py-2 px-6 rounded-lg shadow-md"
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetallesClase;
