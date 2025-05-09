import React from "react";
import { Link } from "react-router-dom";
import maestro from "../../assets/img/maestro_digital.webp";

function HomeDocente() {
  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8  min-h-screen">
      {/* Título principal */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-12 text-negroPersonalizado">Bienvenido docente</h1>
      
      {/* Secciones en formato grid */}
      <div className="space-y-28 ">
      {/*Seccion introductoria con imagen y texto */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000 col-span-4">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado">Nos complace darles la bienvenida a este espacio digital, creado para facilitar la colaboración, el intercambio de recursos y la comunicación dentro de nuestra prestigiosa institución. Aquí encontrarán herramientas específicas de UCLA, foros para conectar con colegas de diversas facultades y un centro de recursos para enriquecer su labor docente.</p>
          <p className="text-lg text-negroPersonalizado">¡Exploren las funcionalidades, compartan sus conocimientos y contribuyan a fortalecer la comunidad académica de UCLA!</p>

      </div>

       {/* Imagen */}
              <div className="justify-self-center ">
                <img
                  src={maestro}
                  alt="Maestro digital"
                  className="w-full max-w-md mx-auto rounded-xl shadow-lg object-cover"
                />
            </div>
      </div>

  
        {/*Primera seccion */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado">Cursos asignados</p>
        </div>

        {/* Card 2 */}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado">Alumnos inscritos</p>
        </div>

        {/* Card 3*/}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado" > Evaluaciones subidas </p>
        </div>
        

        {/* Card 4 */}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center  transition-opacity duration-1000">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado" > Materiales subidos </p>
        </div>
        </div>

        {/*Segunda seccion */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center col-span-4 transition-opacity duration-1000">
      <p className="text-xl font-semibold mb-6 text-negroPersonalizado">Lista de actividades</p>
      </div>
      </div>

      {/*Tercera seccion */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/*Card 1*/}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado">Nombre del curso: </p>
          <p className="text-left"><strong>Cantidad de alumnos:</strong></p>

          {/*Boton*/}
          <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
          <Link to="/docente/mis-cursos">
          <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
            Ir al curso
          </button>
          </Link>
            
          </div>
        </div>

        {/*Card 2*/}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado">Nombre del curso: </p>
          <p className="text-left"><strong>Cantidad de alumnos:</strong></p>

          {/*Boton*/}
          <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
          <Link to="/docente/mis-cursos">
          <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
            Ir al curso
          </button>
          </Link>
            
          </div>
        </div>

        {/*Card 3*/}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado">Nombre del curso: </p>
          <p className="text-left"><strong>Cantidad de alumnos:</strong></p>

          {/*Boton*/}
          <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
          <Link to="/docente/mis-cursos">
          <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
            Ir al curso
          </button>
          </Link>
            
          </div>
        </div>

        {/*Card 4*/}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado">Nombre del curso: </p>
          <p className="text-left"><strong>Cantidad de alumnos:</strong></p>

          {/*Boton*/}
          <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
          <Link to="/docente/mis-cursos">
          <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
            Ir al curso
          </button>
          </Link>
            
          </div>
        </div>
        </div>

        <h3 className="text-2xl md:text-4xl font-bold text-center mb-12 text-negroPersonalizado">Guias</h3>

        {/*Cuarta seccion */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/*Card 1*/}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado">Crear curso </p>
          <p className="text-lg text-gray-700">
            Aprende a crear cursos con este video tutorial.
          </p>
          <div className="mt-8 justify-center flex flex-col sm:flex-row gap-4">
            <Link to="/crear-curso">
              <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-black px-6 py-2 rounded-lg shadow">
                Ir al tutorial
              </button>
            </Link>
            </div>
        </div>

        {/*Card 2*/}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado">Subir materiales </p>
          <p className="text-lg text-gray-700">
            Aprende a subir material didactico con este video tutorial.
          </p>
          <div className="mt-8 justify-center flex flex-col sm:flex-row gap-4">
            <Link to="/crear-curso">
              <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-black px-6 py-2 rounded-lg shadow">
                Ir al tutorial
              </button>
            </Link>
            </div>
        </div>

        {/*Card 3*/}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado">Crear evaluaciones </p>
          <p className="text-lg text-gray-700">
             Aprende a crear evaluaciones con este video tutorial
          </p>
          <div className="mt-8 justify-center flex flex-col sm:flex-row gap-4">
            <Link to="/crear-curso">
              <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-black px-6 py-2 rounded-lg shadow">
                Ir al tutorial
              </button>
            </Link>
            </div>
        </div>

        {/*Card 4*/}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado">Revisar el progreso de estudiante </p>
          <p className="text-lg text-gray-700">
            Aprende a revisar el progreso del estudiante mediante este video tutorial.
          </p>
          <div className="mt-8 justify-center flex flex-col sm:flex-row gap-4">
            <Link to="/crear-curso">
              <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-black px-6 py-2 rounded-lg shadow">
                Ir al tutorial
              </button>
            </Link>
            </div>
        </div> 
        
        {/*Card 5*/}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado">Actualizar datos </p>
          <p className="text-lg text-gray-700">
            Aprende a actualizar tus datos mediante este video tutorial
          </p>
          <div className="mt-8 justify-center flex flex-col sm:flex-row gap-4">
            <Link to="/crear-curso">
              <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-black px-6 py-2 rounded-lg shadow">
                Ir al tutorial
              </button>
            </Link>
            </div>
        </div> 

        {/*Card 6*/}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado">Calificar evaluaciones </p>
          <p className="text-lg text-gray-700">
            Aprende a calificar tus evaluaciones mediante este video tutorial
          </p>
          <div className="mt-8 justify-center flex flex-col sm:flex-row gap-4">
            <Link to="/crear-curso">
              <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-black px-6 py-2 rounded-lg shadow">
                Ir al tutorial
              </button>
            </Link>
            </div>
        </div> 

        {/*Card 7*/}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado">Editar evaluaciones </p>
          <p className="text-lg text-gray-700">
            Aprende a editar tus evaluaciones mediante este video tutorial
          </p>
          <div className="mt-8 justify-center flex flex-col sm:flex-row gap-4">
            <Link to="/crear-curso">
              <button className="bg-cafe3Personalizado hover:bg-opacity-80 text-black px-6 py-2 rounded-lg shadow">
                Ir al tutorial
              </button>
            </Link>
            </div>
        </div> 
        </div>






        


        

        
      </div>


    </div>
  );
}

export default HomeDocente;
