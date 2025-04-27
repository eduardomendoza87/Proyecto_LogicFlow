import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function MaterialesAlumno() {
  const [materialTref, materialTInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Datos simulados
  const materialesSimulados = [
    {
      id: 1,
      nombre: "Guía de instalación de software",
      descripcion: "Instrucciones detalladas para instalar el entorno de desarrollo.",
      modalidad: "Presencial",
      tipoArchivo: "Pdf",
      fechaSubida: "2025-04-27",
      moduloClase: "Módulo 1: Introducción",
      urlDescarga: "/materiales/guia-instalacion.pdf",
      urlVerEnLinea: "/materiales/ver/guia-instalacion",
    },
    {
      id: 2,
      nombre: "Video tutorial de conceptos básicos",
      descripcion: "Explicación de los primeros conceptos.",
      modalidad: "Virtual",
      tipoArchivo: "Video",
      fechaSubida: "2025-04-28",
      moduloClase: "Módulo 2: Fundamentos",
      urlDescarga: "/materiales/video-fundamentos.mp4",
      urlVerEnLinea: "/materiales/ver/video-fundamentos",
    },
    {
      id: 3,
      nombre: "Enlace a recursos externos",
      descripcion: "Material complementario en línea.",
      modalidad: "Virtual",
      tipoArchivo: "Link",
      fechaSubida: "2025-04-28",
      moduloClase: "Módulo 3: Recursos adicionales",
      urlDescarga: "#",
      urlVerEnLinea: "https://example.com/recursos",
    },
  ];

  // Estados de búsqueda y filtro
  const [busqueda, setBusqueda] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");

  // Filtrar materiales
  const materialesFiltrados = materialesSimulados.filter((material) => {
    const coincideBusqueda =
      material.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      material.descripcion.toLowerCase().includes(busqueda.toLowerCase());

    const coincideFiltro =
      filtroTipo === "" || material.tipoArchivo.toLowerCase() === filtroTipo.toLowerCase();

    return coincideBusqueda && coincideFiltro;
  });

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6 min-h-screen">
      {/* Sección principal */}
      <h3
        ref={materialTref}
        className={`text-3xl font-bold text-center mb-28 text-negroPersonalizado transition-opacity duration-1000 ${
          materialTInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Materiales del curso
      </h3>

      {/* Botón para regresar */}
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
          placeholder="Buscar"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="shadow border rounded py-2 px-3 w-full md:flex-1 text-negroPersonalizado focus:ring-2 focus:ring-cafe1Personalizado"
        />
        <select
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value)}
          className="border rounded p-2 w-full md:w-1/4"
        >
          <option value="">Tipo de archivo</option>
          <option value="Pdf">Pdf</option>
          <option value="Video">Video</option>
          <option value="Link">Link</option>
        </select>
      </div>

      {/* Lista de materiales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {materialesFiltrados.length > 0 ? (
          materialesFiltrados.map((material) => (
            <div key={material.id} className="bg-blancoPersonalizado p-6 rounded-lg shadow space-y-2 text-negroPersonalizado">
              <p><strong>Nombre:</strong> {material.nombre}</p>
              <p><strong>Descripción:</strong> {material.descripcion}</p>
              <p><strong>Modalidad:</strong> {material.modalidad}</p>
              <p><strong>Tipo de Archivo:</strong> {material.tipoArchivo}</p>
              <p><strong>Fecha de Subida:</strong> {material.fechaSubida}</p>
              <p><strong>Módulo o Clase:</strong> {material.moduloClase}</p>

              {/* Botones de acción */}
              <div className="flex flex-wrap justify-center mt-4 gap-3 overflow-x-auto">
                <a href={material.urlDescarga} download target="_blank" rel="noopener noreferrer">
                  <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                    Descargar
                  </button>
                </a>
                <a href={material.urlVerEnLinea} target="_blank" rel="noopener noreferrer">
                  <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                    Ver en línea
                  </button>
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-negroPersonalizado font-semibold">
            No se encontraron materiales.
          </div>
        )}
      </div>
    </div>
  );
}

export default MaterialesAlumno;
