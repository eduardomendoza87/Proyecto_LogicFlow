import React from "react";
import { Link } from "react-router-dom";

function Estudiantes(){
    return(
        <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      <h1 className="text-2xl md:text-4xl text-center font-semibold mb-6 ">Estudiantes del curso</h1>
      
      {/* Encabezado*/}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6 text-left">
            <p><strong>Nombre del curso:</strong></p>
            <p><strong>Semestre:</strong></p>
            <p><strong>Modalidad:</strong></p>
            <p><strong>Fecha de inicio:</strong></p>
            <p><strong>Estado del curso:</strong></p>
            
        </div>
        </div>

        {/* Barra de búsqueda y filtros */}
        <div className="flex flex-col md:flex-row gap-6 flex-wrap mb-16">
              <input
                type="text"
                placeholder="Buscar por nombre estudiante"
                className="shadow border rounded py-2 px-3 w-full md:flex-1 text-negroPersonalizado focus:ring-2 focus:ring-cafe1Personalizado"
              />
      
              <select className="border rounded p-2 w-full md:w-1/4">
                <option>Rendimiento</option>
                <option>Alto</option>
                <option>Media</option>
                <option>Bajo</option>
              </select>
      
              <select className="border rounded p-2 w-full md:w-1/4">
                <option>Estado academico</option>
                <option>Activo</option>
                <option>Inactivo</option>
                <option>Bajo</option>
              </select>
            </div>

            {/* Tabla de seguimiento */}
            <div className="max-h-[600px] overflow-y-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-negroPersonalizado border border-gray-300">
          <thead className="bg-cafe3Personalizado text-white">
            <tr>
              <th className="px-6 py-3">Nombre del alumno</th>
              <th className="px-6 py-3">Correo institucional</th>
              <th className="px-6 py-3">Estado academico</th>
              <th className="px-6 py-3">%Progreso</th>
              <th className="px-6 py-3">Ultima actividad</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
           <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td>Eduardo Mendoza Izquierdo</td>
                        <td>eduardoUCLA@hotmail.com</td>
                        <td>activo</td>
                        <td>%50</td>
                        <td>Examen parcial</td>
                        <td>
                          <Link to="/docente/detalles-alumno-curso">
                          <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                            Ver detalles
                          </button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
          </table>
          </div>
        </div>

    );
}
export default Estudiantes;