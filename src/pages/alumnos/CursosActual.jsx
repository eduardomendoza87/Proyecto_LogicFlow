import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function CursoActual() {
  const [cursoTref, cursoTInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [cursos, setCursos] = useState([]);
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");
  const [busqueda, setBusqueda] = useState("");

  // Cursos de respaldo simulados
  const cursosSimulados = [
    {
      id: 1,
      nombre: "Matemáticas Avanzadas",
      profesor: "Mtro. Carlos Pérez",
      horario: "Lunes y Miércoles 10:00 - 12:00",
      estado: "Activo",
      tipo: "Curso",
    },
    {
      id: 2,
      nombre: "Taller de Robótica",
      profesor: "Ing. Laura Gómez",
      horario: "Viernes 14:00 - 16:00",
      estado: "Activo",
      tipo: "Taller",
    },
    {
      id: 3,
      nombre: "Física Experimental",
      profesor: "Dr. Roberto Díaz",
      horario: "Martes 9:00 - 11:00",
      estado: "Finalizado",
      tipo: "Curso",
    },
    {
      id: 4,
      nombre: "Taller de Creatividad",
      profesor: "Lic. Ana Flores",
      horario: "Sábados 10:00 - 12:00",
      estado: "Activo",
      tipo: "Taller",
    },
  ];

  useEffect(() => {
    const cursosGuardados = JSON.parse(localStorage.getItem("cursosActuales"));
    if (cursosGuardados && Array.isArray(cursosGuardados) && cursosGuardados.length > 0) {
      setCursos(cursosGuardados);
    } else {
      setCursos(cursosSimulados);
    }
  }, []);

  // Función de filtrado dinámico
  const cursosFiltrados = cursos.filter((curso) => {
    const coincideBusqueda = curso.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideTipo = filtroTipo ? curso.tipo === filtroTipo : true;
    const coincideEstado = filtroEstado ? curso.estado === filtroEstado : true;
    return coincideBusqueda && coincideTipo && coincideEstado;
  });

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6 min-h-screen">
      {/* Sección principal */}
      <h3
        ref={cursoTref}
        className={`text-3xl font-bold text-center mb-28 text-negroPersonalizado transition-opacity duration-1000 ${
          cursoTInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Mis cursos actuales
      </h3>

      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-col md:flex-row gap-10 mb-16">
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-negroPersonalizado leading-tight focus:outline-none focus:ring-2 focus:ring-cafe1Personalizado"
          type="text"
          placeholder="Buscar curso..."
        />

        {/* Filtro tipo */}
        <select
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value)}
          className="border rounded p-2 w-full md:w-1/4"
        >
          <option value="">Tipo de curso</option>
          <option value="Curso">Curso</option>
          <option value="Taller">Taller</option>
        </select>

        {/* Filtro estado */}
        <select
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value)}
          className="border rounded p-2 w-full md:w-1/4"
        >
          <option value="">Estado del curso</option>
          <option value="Activo">Activo</option>
          <option value="Finalizado">Finalizado</option>
        </select>
      </div>

      {/* Cards de cursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 place-items-center">
        {cursosFiltrados.length > 0 ? (
          cursosFiltrados.map((curso) => (
            <div
              key={curso.id}
              className="bg-blancoPersonalizado p-6 text-center w-full max-w-md rounded-lg shadow-lg transition-opacity duration-1000"
            >
              <h4 className="text-xl font-semibold mb-2 text-negroPersonalizado">{curso.nombre}</h4>
              <p className="text-negroPersonalizado text-left text-lg">
                <strong>Profesor:</strong> {curso.profesor}
              </p>
              <p className="text-negroPersonalizado text-left text-lg">
                <strong>Horario:</strong> {curso.horario}
              </p>
              <p className="text-negroPersonalizado text-left text-lg">
                <strong>Estado:</strong> {curso.estado}
              </p>

              {/* Botones de acciones */}
              <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4 w-full">
                <Link to="/ver-modulos">
                  <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                    Ver modulos
                  </button>
                </Link>
                <Link to="/materiales">
                  <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                    Materiales
                  </button>
                </Link>
                <Link to="/evaluacion-especifica">
                  <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                    Evaluaciones
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-700 col-span-2">
            No se encontraron cursos que coincidan con la búsqueda.
          </div>
        )}
      </div>
    </div>
  );
}

export default CursoActual;
