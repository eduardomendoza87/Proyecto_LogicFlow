import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function EvaluacionesCursos(){
    const [EvaTref, EvaTInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [Eva1Ref, Eva1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [Eva2Ref, Eva2InView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="bg-cafe4Personalizado container mx-auto p-6">
          {/* Sección principal */}
          <h3
            ref={EvaTref}
            className={`text-3xl font-bold text-center mb-28 text-negroPersonalizado transition-opacity duration-1000 ${
              EvaTInView ? "opacity-100" : "opacity-0"
            }`}
          >
            Exámenes por curso
          </h3>
          {/* Barra de búsqueda y filtrado */}
          <div className="flex flex-col md:flex-row gap-10 mb-16">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-negroPersonalizado leading-tight  focus:outline-none focus:ring-2 focus:ring-cafe1Personalizado "
              id="text"
              type="text"
              placeholder="Buscar"
            />
    
            {/* Filtros */}
            <select className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-cafe3Personalizado"
            >
              <option value="">Tipo de examen</option>
              <option value="">Diagnostico</option>
              <option value="">Parcial</option>
              <option value="">Final</option>
              </select>
    
            <select className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-cafe3Personalizado"
            >
              <option value="">Estado </option>
              <option value="">Realizado</option>
              <option value="">Pendiente</option>
              <option value="">Calificado</option>
            </select>
    
    
            
          </div>
          {/*Card de Evaluaciones*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 place-items-center">
    
            {/*Card 1 Evaluaciones*/}
            <div
            ref={Eva1Ref}
            className={`bg-blancoPersonalizado p-6 text-center w-full max-w-md rounded-lg shadow-lg transition-opacity duration-1000 ${
              Eva1InView ? "opacity-100" : "opacity-0"
            }`}
            >
              <div className="text-negroPersonalizado text-left text-lg">
                 Curso:
                <p className="text-negroPersonalizado text-left text-lg">
                  Fecha limite:
                </p>
                <p className="text-negroPersonalizado text-left text-lg">
                  Duracion:
                </p>
                <p className="text-negroPersonalizado text-left text-lg">
                  Tipo:
                </p>
                <p className="text-negroPersonalizado text-left text-lg">
                  Estado:
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4 w-full">
                  <Link to="/VerExamen">
                  <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                    Ver Examen
                  </button>
                  </Link>
                </div>
              </div>
            </div>
    
            
             {/*Card 2 Evaluaciones*/}
             <div
            ref={Eva2Ref}
            className={`bg-blancoPersonalizado p-6 text-center w-full max-w-md rounded-lg shadow-lg transition-opacity duration-1000 ${
              Eva2InView ? "opacity-100" : "opacity-0"
            }`}
            >
              <div className="text-negroPersonalizado text-left text-lg">
                 Curso:
                <p className="text-negroPersonalizado text-left text-lg">
                  Fecha limite:
                </p>
                <p className="text-negroPersonalizado text-left text-lg">
                  Duracion:
                </p>
                <p className="text-negroPersonalizado text-left text-lg">
                  Tipo:
                </p>
                <p className="text-negroPersonalizado text-left text-lg">
                  Estado:
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4 w-full">
                  <Link to="/VerExamen">
                  <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                    Ver Examen
                  </button>
                  </Link>
                </div>
              </div>
            </div>

            </div>
            </div>
            );
}
export default EvaluacionesCursos;