import React from "react";
import { Link } from "react-router-dom";

function VerDetallesClase() {
  const tipoMaterial = "pdf"; 
  const materialNombre = "Clase1_IntroduccionReact.pdf";
  const materialURL = "https://ejemplo.com/clase1";

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/* Título principal */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-negroPersonalizado">
        Detalles de la clase
      </h2>

      {/* Encabezado */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-8 text-left space-y-2">
        <p><strong>Nombre de la clase:</strong> Introducción a React</p>
        <p><strong>Módulo relacionado:</strong> Fundamentos de desarrollo web</p>
        <p><strong>Fecha programada:</strong> 10/05/2025</p>
        <p><strong>Estado:</strong> Publicado</p>
        <p><strong>Duración estimada:</strong> 90 minutos</p>
      </div>

      {/* Descripción */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-8 text-left">
        <h4 className="text-lg font-semibold text-negroPersonalizado mb-2">Descripción:</h4>
        <p className="text-negroPersonalizado">
          En esta clase se abordarán los conceptos fundamentales de React, como componentes, props y el ciclo de vida. Se presentarán ejemplos prácticos para que los estudiantes entiendan cómo estructurar una aplicación básica.
        </p>
      </div>

      {/* Material adicional */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-left">
        <h4 className="text-lg font-semibold text-negroPersonalizado mb-4">Material adicional:</h4>

        {tipoMaterial === "pdf" && (
          <div className="space-y-2">
            <p><strong>Archivo:</strong> {materialNombre}</p>
            <a
              href={materialURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cafe3Personalizado text-white px-4 py-2 rounded shadow hover:bg-opacity-80"
            >
              Ver PDF
            </a>
          </div>
        )}

        {tipoMaterial === "video" && (
          <div className="space-y-2">
            <p className="mb-2"><strong>Video:</strong></p>
            <video controls className="w-full rounded shadow">
              <source src={materialURL} type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        )}

        {tipoMaterial === "link" && (
          <div>
            <p><strong>Enlace:</strong></p>
            <a
              href={materialURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              {materialURL}
            </a>
          </div>
        )}
      </div>

      {/* Botón volver */}
      <div className="text-center">
        <Link to="/docente/ver-clases">
          <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-6 py-2 rounded-lg hover:bg-opacity-80 shadow-md">
            Volver a la lista de clases
          </button>
        </Link>
      </div>
    </div>
  );
}

export default VerDetallesClase;
