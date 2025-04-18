import React from "react";
import { Link } from "react-router-dom";
import GraficaRendimiento from "./GraficaDeRendimiento";

function VerDetallesAlumno() {
    return(
        <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
            {/* Título principal */}
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-negroPersonalizado">
                Detalles del Alumno
            </h1>

            {/* Resumen superior */}
            <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-center">
                <p className="text-lg text-negroPersonalizado">
                    Aquí puedes ver los detalles del alumno seleccionado.
                </p>
            </div>

            {/* Cards*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Detalles del alumno */}
            <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12">
                <h2 className="text-xl font-bold mb-4 text-center">Información del Alumno</h2>
                <p><strong>Nombre completo:</strong> Juan Pérez</p>
                <p><strong>Curso actual:</strong> Desarrollo web </p>
                <p><strong>Estado general:</strong> Excelente</p>
                <Link to="/docente/seguimiento">
                <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md mt-4">
                    Volver a Seguimiento    
                    </button>
                </Link>
                </div>

                {/*Resumen del progreso*/}
                <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12">
                    <h2 className="text-xl font-bold mb-4 text-center">Resumen de progreso</h2>
                    <p><strong>Progreso del curso:</strong> 75%</p>
                    <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                      <div className="bg-cafe3Personalizado h-4 rounded-full" style={{ width: '75%' }}></div>
                     </div>
                    <p><strong>Evaluaciones completadas:</strong>5</p>
                    <p><strong>Promedio general:</strong> 9.0</p>
                    <p><strong>Ultima actividad:</strong> Resumen</p>
                    </div>

                    {/*Grafico de rendiminto*/}
                    <div className=" p-6 mb-12 col-span-2 ">
                    <GraficaRendimiento/>
                    </div>
                    

                    {/* Tabla de seguimiento */}
            <div className="max-h-[600px] overflow-y-auto shadow-md sm:rounded-lg col-span-2">
        <table className="w-full text-sm text-left text-negroPersonalizado border border-gray-300">
          <thead className="bg-cafe3Personalizado text-white">
            <tr>
              <th className="px-6 py-3">Nombre de la evaluacion</th>
              <th className="px-6 py-3">Calificacion</th>
              <th className="px-6 py-3">Estado</th>
              <th className="px-6 py-3">Fecha de entrega</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td>Examen desarrollo web</td>
              <td>9</td>
              <td>entregado</td>
              <td>07/05/2025 </td>
              <td>
                <Link to="/docente/ver-detalles-alumno">
                <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                  Ver respuestas
                </button>
                </Link>

              </td>
            </tr>
          </tbody>
          </table>
            </div>

            {/*Retroalimentacion del docente*/}
            <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 col-span-2">
                <h2 className="text-xl font-bold mb-4 text-center">Retroalimentación </h2>
                <label>
                    <textarea
                        className="w-full h-32 p-2 border border-gray-300 rounded-lg"
                        placeholder="Escribe tus comentarios aquí..."
                    ></textarea>
                </label>
                <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md mt-4">
                    Enviar comentario
                </button>
                </div>



                    </div>
                </div>

    );
}
export default VerDetallesAlumno;