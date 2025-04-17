import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminEvaluaciones() {
    return(
        // Contenedor principal
        <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen" >
            {/* Título principal */}
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-negroPersonalizado">
             Administrar evaluaciones
            </h1>
            {/* Resumen superior */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-center">
        <p className="text-lg text-negroPersonalizado">
        Administra, crea y evalúa las actividades y exámenes de tus cursos fácilmente.
        </p>
      </div>

      {/* Barra de búsqueda y filtros */}
            <div className="flex flex-col md:flex-row gap-6 flex-wrap mb-16">
              <input
                type="text"
                placeholder="Buscar"
                className="shadow border rounded py-2 px-3 w-full md:flex-1 text-negroPersonalizado focus:ring-2 focus:ring-cafe1Personalizado"
              />
      
              <select className="border rounded p-2 w-full md:w-1/4">
                <option>Tipo</option>
                <option>Evaluacion</option>
                <option>Actividad</option>
              </select>
      
              <select className="border rounded p-2 w-full md:w-1/4">
                <option>Fecha de creacion</option>
                <option>Hoy</option>
                <option>Ultima semana</option>
              </select>
      
              <select className="border rounded p-2 w-full md:w-1/4">
                <option>Estado</option>
                <option>En curso</option>
                <option>Pendiente</option>
                <option>Calificado</option>
              </select>
            </div>

            {/* Boton de crear evaluacion */}
            <div className="flex flex-col md:flex-row items-center gap-6 flex-wrap mb-16">
            <Link to="/docente/crear-evaluacion" >
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
                Crear evaluacion
              </button>
              </Link>
              </div>

              {/* Card 1 Evaluaciones */}
                    <div className="grid grid-cols-2 gap-8">
                      <div className="bg-blancoPersonalizado p-6 rounded-lg shadow">
                        <h4 className="text-xl font-semibold mb-4 text-negroPersonalizado">Curso: Desarrollo Web</h4>
                        <div className="space-y-2 text-negroPersonalizado">
                          <p> Nombre de la evaluación:</p>
                          <p>Tipo:</p>
                          <p> Duración:</p>
                          <p>Fecha de entrega:</p>
                          <p> Estado:</p>
                          <p>Total de alumnos:</p>
                        </div>
              
                        {/* Botones de acción con scroll en pantallas pequeñas */}
                        <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
                          <Link to="/docente/ver-evaluacion">
                            <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                              Ver evaluacion
                            </button>
                          </Link>
                          <Link to="/docente/calificar-respuestas">
                            <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                               Calificar respuestas
                            </button>
                          </Link>
                          <Link to="/docente/editar-evaluacion">
                            <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                              Editar evaluacion
                            </button>
                          </Link>
                          <Link to="/EliminarEvaluacion">
                            <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                                Eliminar evaluacion
                            </button>
                          </Link>
                        </div>
                      </div>

                      {/* Card 2 Evaluaciones */}
                      <div className="bg-blancoPersonalizado p-6 rounded-lg shadow">
                        <h4 className="text-xl font-semibold mb-4 text-negroPersonalizado">Curso: Desarrollo Web</h4>
                        <div className="space-y-2 text-negroPersonalizado">
                          <p> Nombre de la evaluación:</p>
                          <p>Tipo:</p>
                          <p> Duración:</p>
                          <p>Fecha de entrega:</p>
                          <p> Estado:</p>
                          <p>Total de alumnos:</p>
                        </div>
              
                        {/* Botones de acción con scroll en pantallas pequeñas */}
                        <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
                          <Link to="/ver-evaluacion">
                            <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                              Ver evaluacion
                            </button>
                          </Link>
                          <Link to="/CalificarRespuestas">
                            <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                               Calificar respuestas
                            </button>
                          </Link>
                          <Link to="/EditarEvaluacion">
                            <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                              Editar evaluacion
                            </button>
                          </Link>
                          <Link to="/EliminarEvaluacion">
                            <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                                Eliminar evaluacion
                            </button>
                          </Link>
                        </div>
                      </div>
                      
                    </div>
                    



        </div>
    );
}
export default AdminEvaluaciones;