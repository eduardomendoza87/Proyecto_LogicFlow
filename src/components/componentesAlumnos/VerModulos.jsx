import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function VerModulos() {
  const [tituloRef, tituloInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Datos simulados de módulos y clases
  const modulos = [
    {
      nombre: "Módulo 1: Introducción al Álgebra",
      descripcion: "Conceptos básicos y operaciones fundamentales.",
      clases: [
        { nombre: "Clase 1: ¿Qué es el álgebra?", estado: "completado" },
        { nombre: "Clase 2: Variables y constantes", estado: "en progreso" },
        { nombre: "Clase 3: Sumas algebraicas", estado: "no iniciado" }
      ]
    },
    {
      nombre: "Módulo 2: Ecuaciones de Primer Grado",
      descripcion: "Aprenderás a resolver ecuaciones sencillas.",
      clases: [
        { nombre: "Clase 1: Principios de igualdad", estado: "no iniciado" },
        { nombre: "Clase 2: Resolución paso a paso", estado: "no iniciado" }
      ]
    }
  ];

  const estadoClaseColor = {
    completado: "bg-green-200 text-green-800",
    "en progreso": "bg-yellow-200 text-yellow-800",
    "no iniciado": "bg-gray-200 text-gray-800"
  };

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6 min-h-screen">
      
      {/* Título principal */}
      <h2
        ref={tituloRef}
        className={`text-3xl font-bold text-center mb-16 text-negroPersonalizado transition-opacity duration-1000 ${
          tituloInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Módulos del Curso
      </h2>

      {/* Botón para regresar */}
      <div className="mb-8">
        <Link to="/cursos-actuales">
          <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-negroPersonalizado font-bold py-2 px-6 rounded-lg shadow-md">
             Regresar a Cursos
          </button>
        </Link>
      </div>

      {/* Lista de módulos */}
      <div className="space-y-8">
        {modulos.map((modulo, index) => (
          <div key={index} className="bg-blancoPersonalizado rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-cafe2Personalizado mb-4">{modulo.nombre}</h3>
            <p className="text-negroPersonalizado mb-6">{modulo.descripcion}</p>

            {/* Clases dentro del módulo */}
            <div className="space-y-4">
              {modulo.clases.map((clase, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row md:items-center md:justify-between bg-gray-100 p-4 rounded-lg"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-negroPersonalizado">{clase.nombre}</h4>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
                    {/* Estado visual */}
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${estadoClaseColor[clase.estado]}`}
                    >
                      {clase.estado.charAt(0).toUpperCase() + clase.estado.slice(1)}
                    </span>

                    {/* Botón para ver la clase */}
                    <Link to="/ver-clase">
                      <button className="bg-cafe2Personalizado hover:bg-opacity-80 text-white py-2 px-4 rounded shadow-md">
                        Ver Clase
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default VerModulos;
