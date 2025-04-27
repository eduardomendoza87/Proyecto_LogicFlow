import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// Datos simulados de resultados
const resultadosSimulados = [
  {
    curso: "Cálculo I",
    tipoExamen: "Parcial",
    fecha: "2024-04-20",
    calificacion: 85,
    estado: "Aprobado",
  },
  {
    curso: "Historia",
    tipoExamen: "Final",
    fecha: "2024-04-15",
    calificacion: 60,
    estado: "Reprobado",
  },
  {
    curso: "Física",
    tipoExamen: "Parcial",
    fecha: "2024-04-25",
    calificacion: null,
    estado: "Pendiente",
  },
];

function VerResultados() {
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");
  const [textoBusqueda, setTextoBusqueda] = useState("");

  const [ResTref, ResTInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const filtrarResultados = () => {
    return resultadosSimulados.filter((resultado) => {
      const coincideBusqueda = resultado.curso.toLowerCase().includes(textoBusqueda.toLowerCase());
      const coincideTipo = filtroTipo ? resultado.tipoExamen === filtroTipo : true;
      const coincideEstado = filtroEstado ? resultado.estado === filtroEstado : true;
      return coincideBusqueda && coincideTipo && coincideEstado;
    });
  };

  const resultadosFiltrados = filtrarResultados();

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6 min-h-screen">
      {/* Título */}
      <h3
        ref={ResTref}
        className={`text-3xl font-bold text-center mb-28 text-negroPersonalizado transition-opacity duration-1000 ${
          ResTInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Resultados de tus evaluaciones
      </h3>

      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-col md:flex-row gap-6 mb-16">
        <input
          type="text"
          placeholder="Buscar curso..."
          className="shadow border rounded py-2 px-3 w-full md:flex-1 text-negroPersonalizado focus:ring-2 focus:ring-cafe1Personalizado"
          value={textoBusqueda}
          onChange={(e) => setTextoBusqueda(e.target.value)}
        />
        <select
          className="border rounded p-2 w-full md:w-1/4"
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value)}
        >
          <option value="">Tipo de examen</option>
          <option value="Diagnostico">Diagnóstico</option>
          <option value="Parcial">Parcial</option>
          <option value="Final">Final</option>
        </select>
        <select
          className="border rounded p-2 w-full md:w-1/4"
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value)}
        >
          <option value="">Estado</option>
          <option value="Aprobado">Aprobado</option>
          <option value="Reprobado">Reprobado</option>
          <option value="Pendiente">Pendiente</option>
        </select>
      </div>

      {/* Tarjetas de Resultados */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        {resultadosFiltrados.length > 0 ? (
          resultadosFiltrados.map((resultado, index) => (
            <div
              key={index}
              className="bg-blancoPersonalizado p-6 text-left w-full max-w-md rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            >
              <h4 className="text-xl font-bold mb-4 text-negroPersonalizado">{resultado.curso}</h4>
              <p className="text-negroPersonalizado"><strong>Tipo de examen:</strong> {resultado.tipoExamen}</p>
              <p className="text-negroPersonalizado"><strong>Fecha:</strong> {resultado.fecha}</p>
              <p className="text-negroPersonalizado">
                <strong>Calificación:</strong>{" "}
                {resultado.calificacion !== null ? `${resultado.calificacion}` : "No disponible"}
              </p>
              <p className="text-negroPersonalizado">
                <strong>Estado:</strong>{" "}
                <span
                  className={`font-semibold ${
                    resultado.estado === "Aprobado"
                      ? "text-green-600"
                      : resultado.estado === "Reprobado"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {resultado.estado}
                </span>
              </p>
              <div className="flex justify-center mt-6">
                <Link to="/ver-detalles">
                  <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-6 py-2 rounded-lg hover:bg-opacity-80 shadow-md">
                    Ver detalles
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-negroPersonalizado text-lg">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
}

export default VerResultados;
