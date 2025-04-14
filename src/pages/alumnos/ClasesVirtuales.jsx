import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function ClasesVirtuales() {
  const [claseTref, claseTInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [clase1Ref, clase1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [clase2Ref, clase2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [clase3Ref, clase3InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [clase4Ref, clase4InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  
  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6">
      {/* Sección principal */}
      <h3
        ref={claseTref}
        className={`text-3xl font-bold text-center mb-28 text-negroPersonalizado transition-opacity duration-1000 ${
          claseTInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Clases virtuales
      </h3>

    
     
      {/*Card de videollamdas*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 place-items-center">
      
              {/*Card 1 videollamadas*/}
              <div
              ref={clase1Ref}
              className={`bg-blancoPersonalizado p-6 text-center w-full max-w-md mb-6 rounded-lg shadow-lg transition-opacity duration-1000 ${
                clase1InView ? "opacity-100" : "opacity-0"
              }`}
              >
                <div >
                <h4 className="text-xl font-semibold mb-2 text-negroPersonalizado">Curso:</h4>
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
                    <Link to="/reunion-llamada">
                    <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                      Unirse a la clase
                    </button>
                    </Link>
                    <Link to="/Detalles">
                    <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                      Ver detalles
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
      
              
              {/*Card 2*/}
              <div
              ref={clase2Ref}
              className={`bg-blancoPersonalizado p-6 text-center w-full max-w-md mb-6 rounded-lg shadow-lg transition-opacity duration-1000 ${
                clase2InView ? "opacity-100" : "opacity-0"
              }`}
              >
                <div >
                <h4 className="text-xl font-semibold mb-2 text-negroPersonalizado">Curso:</h4>
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
                  <Link to="/reunion-llamada">
                    <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                      Unirse a la clase
                    </button>
                    </Link>
                    <Link to="/Detalles">
                    <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                      Ver detalles
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
              
              
              {/*Card 3*/}
              <div
              ref={clase3Ref}
              className={`bg-blancoPersonalizado p-6 text-center w-full max-w-md mb-6 rounded-lg shadow-lg transition-opacity duration-1000 ${
                clase3InView ? "opacity-100" : "opacity-0"
              }`}
              >
                <div >
                <h4 className="text-xl font-semibold mb-2 text-negroPersonalizado">Curso:</h4>
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
                  <Link to="/reunion-llamada">
                    <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                      Unirse a la clase
                    </button>
                    </Link>
                    <Link to="/Detalles">
                    <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                      Ver detalles
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
      
              {/*Crad 4*/}
              <div
              ref={clase4Ref}
              className={`bg-blancoPersonalizado p-6 text-center w-full max-w-md mb-6 rounded-lg shadow-lg transition-opacity duration-1000 ${
                clase4InView ? "opacity-100" : "opacity-0"
              }`}
              >
                <div >
                <h4 className="text-xl font-semibold mb-2 text-negroPersonalizado">Curso:</h4>
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
                  <Link to="/reunion-llamada">
                    <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                      Unirse a la clase
                    </button>
                    </Link>
                    <Link to="/Detalles">
                    <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                      Ver detalles
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
      
      </div>
      </div>
  );
}
export default ClasesVirtuales;