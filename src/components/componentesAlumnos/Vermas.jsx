import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function Vermas() {
  const [verMasRef, verMasInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Datos simulados para este curso (cuando den clic en "Ver más")
  const cursoDetalle = {
    nombre: "Introducción a la Programación",
    profesor: "Mtro. Juan Pérez",
    duracion: "Semestre",
    modalidad: "Virtual",
    area: "Tecnología",
    descripcion: "Este curso está diseñado para introducir a los estudiantes en el mundo de la programación. Aprenderás fundamentos de algoritmos, estructuras básicas de control y lógica computacional utilizando el lenguaje Python.",
    requisitos: "No se requieren conocimientos previos. Solo disposición para aprender.",
    inicio: "15 de Agosto de 2025",
    fin: "15 de Diciembre de 2025"
  };

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6 min-h-screen">
      {/* Título */}
      <h3
        ref={verMasRef}
        className={`text-3xl font-bold text-center mb-10 text-negroPersonalizado transition-opacity duration-1000 ${
          verMasInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Detalles del curso
      </h3>

      {/* Información del curso */}
      <div className="bg-blancoPersonalizado p-8 rounded-lg shadow-md space-y-6">
        <h4 className="text-2xl font-semibold text-cafe2Personalizado mb-4">{cursoDetalle.nombre}</h4>

        <div className="space-y-2 text-negroPersonalizado">
          <p><strong>Profesor:</strong> {cursoDetalle.profesor}</p>
          <p><strong>Área:</strong> {cursoDetalle.area}</p>
          <p><strong>Duración:</strong> {cursoDetalle.duracion}</p>
          <p><strong>Modalidad:</strong> {cursoDetalle.modalidad}</p>
          <p><strong>Fecha de inicio:</strong> {cursoDetalle.inicio}</p>
          <p><strong>Fecha de fin:</strong> {cursoDetalle.fin}</p>
        </div>

        <div className="mt-6">
          <h5 className="text-xl font-bold mb-2 text-cafe2Personalizado">Descripción del curso:</h5>
          <p className="text-gray-700">{cursoDetalle.descripcion}</p>
        </div>

        <div className="mt-6">
          <h5 className="text-xl font-bold mb-2 text-cafe2Personalizado">Requisitos:</h5>
          <p className="text-gray-700">{cursoDetalle.requisitos}</p>
        </div>

        {/* Botones */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <Link to="/formulario-inscripcion">
            <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-negroPersonalizado font-bold py-2 px-6 rounded-lg shadow-md">
              Inscribirme
            </button>
          </Link>
          <Link to="/explorarclase">
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-lg shadow-md">
              Regresar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Vermas;
