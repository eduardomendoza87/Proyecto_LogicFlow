import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function CursoActual() {
  const [cursoTref, cursoTInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [curso1Ref, curso1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [curso2Ref, curso2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [curso3Ref, curso3InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [curso4Ref, curso4InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  
  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6">
      {/* Sección principal */}
      <h3
        ref={cursoTref}
        className={`text-3xl font-bold text-center mb-28 text-negroPersonalizado transition-opacity duration-1000 ${
          cursoTInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Mis cursos actuales
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
        <select className="border rounded p-2 w-full md:w-1/4">
          <option value="">Tipo de curso</option>
          <option value="">Curso</option>
          <option value="">Taller</option>
          </select>

        <select className="border rounded p-2 w-full md:w-1/4">
          <option value="">Estado del curso</option>
          <option value="">Activo</option>
          <option value="">Finalizado</option>
        </select>


        
      </div>
      {/*Card de videollamdas*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 place-items-center">

        {/*Card 1 videollamadas*/}
        <div
        ref={curso1Ref}
        className={`bg-blancoPersonalizado p-6 text-center w-full max-w-md rounded-lg shadow-lg transition-opacity duration-1000 ${
          curso1InView ? "opacity-100" : "opacity-0"
        }`}
        >
          <div className="text-negroPersonalizado text-left text-lg">
            Nombre del curso:
            <p className="text-negroPersonalizado text-left text-lg">
              Profesor:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Horario:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Estado:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4 w-full">
              <Link to="/Verclase">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Ver clase
              </button>
              </Link>
              <Link to="/Materiales">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Materiales
              </button>
              </Link>
              <Link to="/Evaluaciones">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Evaluaciones
              </button>
              </Link>
            </div>
          </div>
        </div>

        
        {/*Card 2*/}
        <div
        ref={curso2Ref}
        className={`bg-blancoPersonalizado p-6 text-center w-full max-w-md rounded-lg shadow-lg transition-opacity duration-1000 ${
          curso2InView ? "opacity-100" : "opacity-0"
        }`}
        >
          <div className="text-negroPersonalizado text-left text-lg">
            Nombre del curso:
            <p className="text-negroPersonalizado text-left text-lg">
              Profesor:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Horario:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Estado:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4 w-full">
              <Link to="/Verclase">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Ver clase
              </button>
              </Link>
              <Link to="/Materiales">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Materiales
              </button>
              </Link>
              <Link to="/Evaluaciones">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Evaluaciones
              </button>
              </Link>
            </div>
          </div>
        </div>
        
        
        {/*Card 3*/}
        <div
        ref={curso3Ref}
        className={`bg-blancoPersonalizado p-6 text-center w-full max-w-md rounded-lg shadow-lg transition-opacity duration-1000 ${
          curso3InView ? "opacity-100" : "opacity-0"
        }`}
        >
          <div className="text-negroPersonalizado text-left text-lg">
            Nombre del curso:
            <p className="text-negroPersonalizado text-left text-lg">
              Profesor:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Horario:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Estado:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4 w-full">
              <Link to="/Verclase">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Ver clase
              </button>
              </Link>
              <Link to="/Materiales">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Materiales
              </button>
              </Link>
              <Link to="/Evaluaciones">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Evaluaciones
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/*Crad 4*/}
        <div
        ref={curso4Ref}
        className={`bg-blancoPersonalizado p-6 text-center w-full max-w-md rounded-lg shadow-lg transition-opacity duration-1000 ${
          curso4InView ? "opacity-100" : "opacity-0"
        }`}
        >
          <div className="text-negroPersonalizado text-left text-lg">
            Nombre del curso:
            <p className="text-negroPersonalizado text-left text-lg">
              Profesor:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Horario:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Estado:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4 w-full">
              <Link to="/Verclase">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Ver clase
              </button>
              </Link>
              <Link to="/Materiales">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Materiales
              </button>
              </Link>
              <Link to="/Evaluaciones">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Evaluaciones
              </button>
              </Link>
            </div>
          </div>
        </div>
      
      </div>
      </div>
  );
}
export default CursoActual;