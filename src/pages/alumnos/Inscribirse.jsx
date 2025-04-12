import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function Inscribirse(){
    const [inscribirseD1Ref, inscribirseD1InView] = useInView({ triggerOnce: true, threshold: 0.2 });


    return(
        <div className="bg-cafe4Personalizado container mx-auto p-6">
            <h3 className="text-3xl font-bold text-center mb-28 text-negroPersonalizado">Solicitud de Inscripcion</h3>
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
            </div>

            {/*Card de curso solicitud*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 place-items-center"></div>

      {/*Card 1 solicitud*/}
      <div
        ref={inscribirseD1Ref}
        className={`bg-blancoPersonalizado p-6 text-center w-full max-w-md rounded-lg shadow-lg transition-opacity duration-1000 ${
          inscribirseD1InView ? "opacity-100" : "opacity-0"
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
                    <Link to="/formulario-inscripcion">
                    <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                      Seleccionar
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
              </div>

        
    );
}
export default Inscribirse;