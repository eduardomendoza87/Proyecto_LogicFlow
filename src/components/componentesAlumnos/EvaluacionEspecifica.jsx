import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function EvaluacionesEspecifica() {
  const [Eva1Tref, Eva1TInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Simulación de evaluaciones
  const [evaluaciones, setEvaluaciones] = useState([
    {
      id: 1,
      nombre: "Examen Parcial 1",
      tipo: "Examen",
      fechaPublicacion: "2025-05-01",
      fechaLimite: "2025-05-05",
      estado: "Pendiente",
    },
    {
      id: 2,
      nombre: "Tarea de JavaScript",
      tipo: "Tarea",
      fechaPublicacion: "2025-04-20",
      fechaLimite: "2025-04-25",
      estado: "Entregado",
    },
    {
      id: 3,
      nombre: "Proyecto Final",
      tipo: "Proyecto",
      fechaPublicacion: "2025-05-10",
      fechaLimite: "2025-05-20",
      estado: "Calificado",
    }
  ]);

  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");
  const [busqueda, setBusqueda] = useState("");

  // Función de filtrado
  const evaluacionesFiltradas = evaluaciones.filter(eva => {
    return (
      (filtroTipo ? eva.tipo === filtroTipo : true) &&
      (filtroEstado ? eva.estado === filtroEstado : true) &&
      (eva.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    );
  });

  // Función para determinar el botón según estado
  const obtenerBoton = (estado) => {
    switch (estado) {
      case "Pendiente":
        return { texto: "Presentar ahora", ruta: "/ver-examen" };
      case "Entregado":
        return { texto: "Ver envío", ruta: "/ver-envio" };
      case "Calificado":
        return { texto: "Ver calificación", ruta: "/ver-calificacion" };
      default:
        return { texto: "Acción", ruta: "#" };
    }
  };

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6 min-h-screen">
      {/* Titulo */}
      <h3
        ref={Eva1Tref}
        className={`text-3xl font-bold text-center mb-28 text-negroPersonalizado transition-opacity duration-1000 ${
          Eva1TInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Exámenes por curso
      </h3>

      {/* Botón regresar */}
      <div className="mb-8">
        <Link to="/cursos-actuales">
          <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-negroPersonalizado font-bold py-2 px-6 rounded-lg shadow-md">
            Regresar a Cursos
          </button>
        </Link>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-col md:flex-row gap-6 flex-wrap mb-16">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="shadow border rounded py-2 px-3 w-full md:flex-1 text-negroPersonalizado focus:ring-2 focus:ring-cafe1Personalizado"
        />
        <select
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full md:w-1/4 focus:ring-2 focus:ring-cafe3Personalizado"
        >
          <option value="">Tipo de evaluación</option>
          <option value="Examen">Examen</option>
          <option value="Tarea">Tarea</option>
          <option value="Proyecto">Proyecto</option>
        </select>
        <select
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full md:w-1/4 focus:ring-2 focus:ring-cafe3Personalizado"
        >
          <option value="">Estado de entrega</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Entregado">Entregado</option>
          <option value="Calificado">Calificado</option>
        </select>
      </div>

      {/* Evaluaciones filtradas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 place-items-center">
        {evaluacionesFiltradas.map((evaluacion) => {
          const boton = obtenerBoton(evaluacion.estado);

          return (
            <div
              key={evaluacion.id}
              className="bg-blancoPersonalizado p-6 text-left w-full max-w-md rounded-lg shadow-lg transition-opacity duration-1000 opacity-100"
            >
              <p><strong>Nombre de la evaluación:</strong> {evaluacion.nombre}</p>
              <p><strong>Tipo de evaluación:</strong> {evaluacion.tipo}</p>
              <p><strong>Fecha de publicación:</strong> {evaluacion.fechaPublicacion}</p>
              <p><strong>Fecha límite:</strong> {evaluacion.fechaLimite}</p>
              <p><strong>Estado actual:</strong> {evaluacion.estado}</p>

              {/* Botón dinámico */}
              <div className="flex items-center justify-center mt-6">
                <Link to={boton.ruta}>
                  <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-6 py-2 rounded-lg hover:bg-opacity-80 shadow-md">
                    {boton.texto}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EvaluacionesEspecifica;
