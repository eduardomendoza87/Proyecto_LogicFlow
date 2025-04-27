import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function EvaluacionesCursos() {
  const [busqueda, setBusqueda] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("");
  const [estadoFiltro, setEstadoFiltro] = useState("");

  const [EvaTref, EvaTInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Datos simulados
  const evaluaciones = [
    {
      id: 1,
      curso: "Cálculo I",
      fechaLimite: "2024-05-15",
      duracion: "1h 30min",
      tipo: "Parcial",
      estado: "Pendiente",
    },
    {
      id: 2,
      curso: "Física",
      fechaLimite: "2024-05-20",
      duracion: "2h",
      tipo: "Final",
      estado: "Realizado",
    },
    {
      id: 3,
      curso: "Historia",
      fechaLimite: "2024-06-01",
      duracion: "1h",
      tipo: "Diagnostico",
      estado: "Calificado",
    },
  ];

  // Filtrar evaluaciones
  const evaluacionesFiltradas = evaluaciones.filter((eva) => {
    return (
      eva.curso.toLowerCase().includes(busqueda.toLowerCase()) &&
      (tipoFiltro ? eva.tipo === tipoFiltro : true) &&
      (estadoFiltro ? eva.estado === estadoFiltro : true)
    );
  });

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6 min-h-screen">
      {/* Título principal */}
      <h3
        ref={EvaTref}
        className={`text-3xl font-bold text-center mb-20 text-negroPersonalizado transition-opacity duration-1000 ${
          EvaTInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Mis evaluaciones activas
      </h3>

      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <input
          className="shadow border rounded w-full py-2 px-3 text-negroPersonalizado focus:outline-none focus:ring-2 focus:ring-cafe1Personalizado"
          type="text"
          placeholder="Buscar por curso..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select
          className="border rounded p-2 text-negroPersonalizado w-full md:w-1/4 focus:ring-2 focus:ring-cafe3Personalizado"
          value={tipoFiltro}
          onChange={(e) => setTipoFiltro(e.target.value)}
        >
          <option value="">Tipo de examen</option>
          <option value="Diagnostico">Diagnóstico</option>
          <option value="Parcial">Parcial</option>
          <option value="Final">Final</option>
        </select>

        <select
          className="border rounded p-2 text-negroPersonalizado w-full md:w-1/4 focus:ring-2 focus:ring-cafe3Personalizado"
          value={estadoFiltro}
          onChange={(e) => setEstadoFiltro(e.target.value)}
        >
          <option value="">Estado</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Realizado">Realizado</option>
          <option value="Calificado">Calificado</option>
        </select>
      </div>

      {/* Evaluaciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 place-items-center">
        {evaluacionesFiltradas.length > 0 ? (
          evaluacionesFiltradas.map((eva) => (
            <div
              key={eva.id}
              className="bg-blancoPersonalizado p-6 text-left w-full max-w-md rounded-lg shadow-lg"
            >
              <div className="text-negroPersonalizado text-lg space-y-2">
                <p><strong>Curso:</strong> {eva.curso}</p>
                <p><strong>Fecha límite:</strong> {eva.fechaLimite}</p>
                <p><strong>Duración:</strong> {eva.duracion}</p>
                <p><strong>Tipo:</strong> {eva.tipo}</p>
                <p><strong>Estado:</strong> {eva.estado}</p>
              </div>

              {/* Botón dinámico según estado */}
              <div className="flex justify-center mt-6">
                {eva.estado === "Pendiente" && (
                  <Link to="/ver-examen">
                    <button className="bg-cafe3Personalizado font-bold text-negroPersonalizado px-6 py-2 rounded-lg hover:bg-opacity-80 shadow-md">
                      Presentar ahora
                    </button>
                  </Link>
                )}
                {eva.estado === "Realizado" && (
                  <Link to="/ver-envio">
                    <button className="bg-cafe3Personalizado font-bold text-negroPersonalizado px-6 py-2 rounded-lg hover:bg-opacity-80 shadow-md">
                      Ver envío
                    </button>
                  </Link>
                )}
                {eva.estado === "Calificado" && (
                  <Link to="/ver-calificacion">
                    <button className="bg-cafe3Personalizado font-bold text-negroPersonalizado px-6 py-2 rounded-lg hover:bg-opacity-80 shadow-md">
                      Ver calificación
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center text-gray-600 font-semibold mt-10">
            No se encontraron evaluaciones con los filtros aplicados.
          </div>
        )}
      </div>
    </div>
  );
}

export default EvaluacionesCursos;
