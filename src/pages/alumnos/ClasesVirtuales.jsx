import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function ClasesVirtuales() {
  const navigate = useNavigate();

  // Datos simulados de clases virtuales
  const clasesVirtuales = [
    { id: 1, curso: "Matemáticas 1", profesor: "Juan Pérez", horario: "10:00 AM", estado: "Activa" },
    { id: 2, curso: "Historia Universal", profesor: "Ana Gómez", horario: "12:00 PM", estado: "Programada" },
    { id: 3, curso: "Física Moderna", profesor: "Carlos Ruiz", horario: "2:00 PM", estado: "Finalizada" },
    { id: 4, curso: "Programación Web", profesor: "Lucía Ramírez", horario: "4:00 PM", estado: "Activa" },
  ];

  const [tituloRef, tituloInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleUnirse = (clase) => {
    localStorage.setItem("roomName", `UCLA_${clase.curso.replace(/\s+/g, "_")}`);
    navigate("/reunion-llamada");
  };

  const handleDetalles = (clase) => {
    localStorage.setItem("detalleClase", JSON.stringify(clase));
    navigate("/detalles-clase");
  };

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6 min-h-screen">
      {/* Título principal */}
      <h3
        ref={tituloRef}
        className={`text-3xl font-bold text-center mb-28 text-negroPersonalizado transition-opacity duration-1000 ${
          tituloInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Clases virtuales
      </h3>

      {/* Cards de clases virtuales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 place-items-center">
        {clasesVirtuales.map((clase) => (
          <div
            key={clase.id}
            className="bg-blancoPersonalizado p-6 text-center w-full max-w-md mb-6 rounded-lg shadow-lg transition-opacity duration-1000"
          >
            <h4 className="text-xl font-semibold mb-2 text-negroPersonalizado">{clase.curso}</h4>
            <p className="text-negroPersonalizado text-left text-lg"><strong>Profesor:</strong> {clase.profesor}</p>
            <p className="text-negroPersonalizado text-left text-lg"><strong>Horario:</strong> {clase.horario}</p>
            <p className="text-negroPersonalizado text-left text-lg"><strong>Estado:</strong> {clase.estado}</p>

            {/* Botones */}
            <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4 w-full">
              {clase.estado === "Activa" ? (
                <button
                  onClick={() => handleUnirse(clase)}
                  className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto"
                >
                  Unirse a la clase
                </button>
              ) : (
                <button
                  disabled
                  className="bg-gray-400 text-white font-bold px-4 py-2 rounded-lg cursor-not-allowed shadow-md w-full md:w-auto"
                >
                  {clase.estado === "Programada" ? "Clase programada" : "Clase finalizada"}
                </button>
              )}

              <button
                onClick={() => handleDetalles(clase)}
                className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto"
              >
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClasesVirtuales;
