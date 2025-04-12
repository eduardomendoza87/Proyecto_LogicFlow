import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function CursosDisponibles() {
  const [cursoDTref, cursoDTInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [cursoD1Ref, cursoD1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [cursoD2Ref, cursoD2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [cursoD3Ref, cursoD3InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [cursoD4Ref, cursoD4InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-negroPersonalizado leading-tight  focus:outline-none focus:ring-2 focus:ring-cafe1Personalizado "
          id="text"
          type="text"
          placeholder="Buscar"
        />

        {/* Filtros */}
        <select className="border rounded p-2 w-full md:w-1/4">
          <option value="">Área</option>
          <option value="">Ciencias</option>
          <option value="">Humanidades</option>
          <option value="">Matemáticas</option>
          <option value="">Tecnología</option>
          </select>

        <select className="border rounded p-2 w-full md:w-1/4">
          <option value="">Modalidad</option>
          <option value="">Virtual</option>
          <option value="">Presencial</option>
        </select>

        <select className="border rounded p-2 w-full md:w-1/4">
          <option value="">Duración</option>
          <option value="">Semestre</option>
          <option value="">Anual</option>
        </select>


        
      </div>
      {/*Card de videollamdas*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 place-items-center">

        {/*Card 1 videollamadas*/}
        <div
        ref={cursoD1Ref}
        className={`bg-blancoPersonalizado p-6 text-center w-full max-w-md rounded-lg shadow-lg transition-opacity duration-1000 ${
          cursoD1InView ? "opacity-100" : "opacity-0"
        }`}
        >
          <div >
          <h4 className="text-negroPersonalizado text-center text-lg">Nombre del curso:</h4>
            <p className="text-negroPersonalizado text-left text-lg">
              Profesor:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Duracion:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Modalidad:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Area:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4 w-full">
              <Link to="/Vermas">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Ver mas
              </button>
              </Link>
              <Link to="/Inscribirse">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Inscribirse
              </button>
              </Link>
            </div>
          </div>
        </div>

        
        {/*Card 2*/}
        <div
        ref={cursoD2Ref}
        className={`bg-blancoPersonalizado p-6 text-center w-full max-w-md rounded-lg shadow-lg transition-opacity duration-1000 ${
          cursoD2InView ? "opacity-100" : "opacity-0"
        }`}
        >
          <div >
          <h4 className="text-negroPersonalizado text-center text-lg">Nombre del curso:</h4>
            <p className="text-negroPersonalizado text-left text-lg">
              Profesor:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Duracion:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Modalidad:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Area:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4 w-full">
              <Link to="/Vermas">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Ver mas
              </button>
              </Link>
              <Link to="/Inscribirse">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Inscribirse
              </button>
              </Link>
            </div>
          </div>
        </div>
        
        
        {/*Card 3*/}
        <div
        ref={cursoD3Ref}
        className={`bg-blancoPersonalizado p-6 text-center w-full max-w-md rounded-lg shadow-lg transition-opacity duration-1000 ${
          cursoD3InView ? "opacity-100" : "opacity-0"
        }`}
        >
          <div >
          <h4 className="text-negroPersonalizado text-center text-lg">Nombre del curso:</h4>
            <p className="text-negroPersonalizado text-left text-lg">
              Profesor:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Duracion:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Modalidad:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Area:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4 w-full">
              <Link to="/Vermas">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Ver mas
              </button>
              </Link>
              <Link to="/Inscribirse">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Inscribirse
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/*Crad 4*/}
        <div
        ref={cursoD4Ref}
        className={`bg-blancoPersonalizado p-6 text-center w-full max-w-md rounded-lg shadow-lg transition-opacity duration-1000 ${
          cursoD4InView ? "opacity-100" : "opacity-0"
        }`}
        >
          <div >
            <h4 className="text-negroPersonalizado text-center text-lg">Nombre del curso:</h4>
            <p className="text-negroPersonalizado text-left text-lg">
              Profesor:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Duracion:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Modalidad:
            </p>
            <p className="text-negroPersonalizado text-left text-lg">
              Area:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4 w-full">
              <Link to="/Vermas">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Ver mas
              </button>
              </Link>
              <Link to="/Inscribirse">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Inscribirse
              </button>
              </Link>
            </div>
          </div>
        </div>
      
      </div>
      </div>
  );
}
export default CursosDisponibles;