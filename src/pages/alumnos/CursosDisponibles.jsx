import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function CursosDisponibles() {
  const [cursoDTref, cursoDTInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Datos simulados
  const cursosSimulados = [
    {
      id: 1,
      nombre: "Introducción a la Programación",
      profesor: "Mtro. Juan Pérez",
      duracion: "Semestre",
      modalidad: "Virtual",
      area: "Tecnología"
    },
    {
      id: 2,
      nombre: "Historia Universal",
      profesor: "Mtra. Sofía García",
      duracion: "Anual",
      modalidad: "Presencial",
      area: "Humanidades"
    },
    {
      id: 3,
      nombre: "Cálculo Integral",
      profesor: "Mtro. Carlos Ruiz",
      duracion: "Semestre",
      modalidad: "Presencial",
      area: "Matemáticas"
    },
    {
      id: 4,
      nombre: "Biología Básica",
      profesor: "Mtra. Ana Torres",
      duracion: "Anual",
      modalidad: "Virtual",
      area: "Ciencias"
    }
  ];

  // Estados
  const [cursos, setCursos] = useState(cursosSimulados);
  const [busqueda, setBusqueda] = useState("");
  const [filtroArea, setFiltroArea] = useState("");
  const [filtroModalidad, setFiltroModalidad] = useState("");
  const [filtroDuracion, setFiltroDuracion] = useState("");

  // Filtrado dinámico
  const cursosFiltrados = cursos.filter((curso) => {
    return (
      (curso.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        curso.profesor.toLowerCase().includes(busqueda.toLowerCase())) &&
      (filtroArea === "" || curso.area === filtroArea) &&
      (filtroModalidad === "" || curso.modalidad === filtroModalidad) &&
      (filtroDuracion === "" || curso.duracion === filtroDuracion)
    );
  });

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6">
      {/* Sección principal */}
      <h3
        ref={cursoDTref}
        className={`text-3xl font-bold text-center mb-28 text-negroPersonalizado transition-opacity duration-1000 ${
          cursoDTInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Ver cursos disponibles
      </h3>

      {/* Barra de búsqueda y filtrado */}
      <div className="flex flex-col md:flex-row gap-10 mb-16">
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-negroPersonalizado leading-tight focus:outline-none focus:ring-2 focus:ring-cafe1Personalizado"
          type="text"
          placeholder="Buscar por curso o profesor"
        />

        <select
          value={filtroArea}
          onChange={(e) => setFiltroArea(e.target.value)}
          className="border rounded p-2 w-full md:w-1/4"
        >
          <option value="">Área</option>
          <option value="Ciencias">Ciencias</option>
          <option value="Humanidades">Humanidades</option>
          <option value="Matemáticas">Matemáticas</option>
          <option value="Tecnología">Tecnología</option>
        </select>

        <select
          value={filtroModalidad}
          onChange={(e) => setFiltroModalidad(e.target.value)}
          className="border rounded p-2 w-full md:w-1/4"
        >
          <option value="">Modalidad</option>
          <option value="Virtual">Virtual</option>
          <option value="Presencial">Presencial</option>
        </select>

        <select
          value={filtroDuracion}
          onChange={(e) => setFiltroDuracion(e.target.value)}
          className="border rounded p-2 w-full md:w-1/4"
        >
          <option value="">Duración</option>
          <option value="Semestre">Semestre</option>
          <option value="Anual">Anual</option>
        </select>
      </div>

      {/* Resultado de cursos */}
      {cursosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 place-items-center">
          {cursosFiltrados.map((curso) => (
            <div
              key={curso.id}
              className="bg-blancoPersonalizado p-6 text-center w-full max-w-md rounded-lg shadow-lg"
            >
              <h4 className="text-xl font-semibold mb-2 text-negroPersonalizado">{curso.nombre}</h4>
              <p className="text-negroPersonalizado text-left text-lg">
                <strong>Profesor:</strong> {curso.profesor}
              </p>
              <p className="text-negroPersonalizado text-left text-lg">
                <strong>Duración:</strong> {curso.duracion}
              </p>
              <p className="text-negroPersonalizado text-left text-lg">
                <strong>Modalidad:</strong> {curso.modalidad}
              </p>
              <p className="text-negroPersonalizado text-left text-lg">
                <strong>Área:</strong> {curso.area}
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4 w-full">
                <Link to="/ver-mas">
                  <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                    Ver más
                  </button>
                </Link>
                <Link to="/formulario-inscripcion">
                  <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                    Inscribirse
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-700 text-lg mt-16">No se encontraron cursos disponibles.</p>
      )}
    </div>
  );
}

export default CursosDisponibles;
