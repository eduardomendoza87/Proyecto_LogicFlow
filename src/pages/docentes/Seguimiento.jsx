import React from "react";
import { Link } from "react-router-dom";

function Seguimiento() {
  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      <h1 className="text-2xl md:text-4xl text-center font-semibold mb-6 ">Seguimiento</h1>
      
      {/* Encabezado*/}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6 text-center">
            <p className="text-md text-negroPersonalizado text-left">Curso seleccionado:</p>
            <label htmlFor="cambiar" className="block font-bold mb-1">Selecciona otro curso:</label>
            <select id="cambiar" required
            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado">
                <option value="">Selecciona un curso</option>
                <option value="curso1">Curso 1</option>
                <option value="curso2">Curso 2</option>
                <option value="curso3">Curso 3</option>
            </select>
        </div>

        
        {/* Barra de búsqueda y filtros */}
        <div className="flex flex-col md:flex-row gap-6 flex-wrap mb-16">
              <input
                type="text"
                placeholder="Buscar por nombre"
                className="shadow border rounded py-2 px-3 w-full md:flex-1 text-negroPersonalizado focus:ring-2 focus:ring-cafe1Personalizado"
              />
      
              <select className="border rounded p-2 w-full md:w-1/4">
                <option>Rendimiento</option>
                <option>Alto</option>
                <option>Media</option>
                <option>Bajo</option>
              </select>
      
              <select className="border rounded p-2 w-full md:w-1/4">
                <option>Estado</option>
                <option>Completado</option>
                <option>Incompleto</option>
              </select>
            </div>

            {/* Tabla de seguimiento */}
            <div className="max-h-[600px] overflow-y-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-negroPersonalizado border border-gray-300">
          <thead className="bg-cafe3Personalizado text-white">
            <tr>
              <th className="px-6 py-3">Nombre del alumno</th>
              <th className="px-6 py-3">% Progreso</th>
              <th className="px-6 py-3">Evaluaciones completadas</th>
              <th className="px-6 py-3">Ultima actividad</th>
              <th className="px-6 py-3">Estado general</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td>Eduardo Mendoza Izquierdo</td>
              <td>30%</td>
              <td>5</td>
              <td>Resumen </td>
              <td>Excelente</td>
              <td>
                <Link to="/docente/ver-detalles-alumno">
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
    </div>
  );
}
export default Seguimiento;