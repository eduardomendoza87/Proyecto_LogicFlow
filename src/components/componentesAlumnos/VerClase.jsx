import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function VerClase() {
  const [tituloRef, tituloInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6 min-h-screen">

      {/* Título principal */}
      <h2
        ref={tituloRef}
        className={`text-3xl font-bold text-center mb-16 text-negroPersonalizado transition-opacity duration-1000 ${
          tituloInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Detalles de la Clase
      </h2>

      {/* Botón para regresar */}
      <div className="mb-8">
        <Link to="/ver-modulos">
          <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-negroPersonalizado font-bold py-2 px-6 rounded-lg shadow-md">
             Regresar a Módulos
          </button>
        </Link>
      </div>

      {/* Contenido de la clase */}
      <div className="bg-blancoPersonalizado rounded-lg shadow-md p-6 space-y-6">
        
        {/* Título de la clase */}
        <h3 className="text-2xl font-semibold text-cafe2Personalizado">Título de la Clase</h3>

        {/* Descripción o contenido */}
        <p className="text-negroPersonalizado leading-relaxed">
          Aquí irá la descripción completa de la clase, incluyendo temas, actividades o cualquier material de apoyo.  
          Puedes integrar texto, imágenes, archivos descargables o enlaces.
        </p>

        {/* Material complementario */}
        <div className="mt-8">
          <h4 className="text-xl font-semibold text-cafe2Personalizado mb-4">Material Complementario:</h4>
          <ul className="list-disc list-inside text-negroPersonalizado space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">Descargar presentación (PDF)</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Ver video de explicación</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Acceder a ejercicios prácticos</a></li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default VerClase;
