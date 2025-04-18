import { Link } from "react-router-dom";
import React from "react";

function VerEvaluacion() {
    return(
        // Contenedor principal
        <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen" >

            {/*Encabezado general*/}
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-center">
        <h4 className="text-2xl font-bold text-negroPersonalizado mb-4">Evaluación: </h4>
       <p className="text-negroPersonalizado"><strong>Curso:</strong></p>
       <p className="text-negroPersonalizado"><strong>Fecha de entrega:</strong> </p>
       <p className="text-negroPersonalizado"><strong>Estado:</strong> </p>

      </div>

      {/* Descripción de la evaluación */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12">
        <h5 className="text-xl font-semibold mb-4 text-negroPersonalizado">Descripción de la evaluación</h5>
        <p className="text-gray-700">Aquí va la descripción de la evaluación. Puedes incluir detalles sobre el propósito de la evaluación, los criterios de calificación y cualquier otra información relevante.</p>
        </div>

        {/* Sección de preguntas */}
        <div className="grid grid-cols-1 gap-8 mb-12">
            {/* Pregunta 1 */}
            <div className="bg-blancoPersonalizado p-6 rounded-lg shadow">
                <p className="text-lg font-semibold text-negroPersonalizado">Pregunta 1</p>
                <p className="text-gray-700">Aquí va la pregunta. Puedes incluir opciones de respuesta si es necesario.</p>
                
                </div>
                {/* Pregunta 2 */}
                <div className="bg-blancoPersonalizado p-6 rounded-lg shadow">
                <p className="text-lg font-semibold text-negroPersonalizado">Pregunta 2</p>
                <p className="text-gray-700">Aquí va la pregunta. Puedes incluir opciones de respuesta si es necesario.</p>
                </div>
                {/* Pregunta 3 */}
                <div className="bg-blancoPersonalizado p-6 rounded-lg shadow">
                <p className="text-lg font-semibold text-negroPersonalizado">Pregunta 3</p>
                <p className="text-gray-700">Aquí va la pregunta. Puedes incluir opciones de respuesta si es necesario.</p>
                </div>
                {/* Pregunta 4 */}
                <div className="bg-blancoPersonalizado p-6 rounded-lg shadow">
                <p className="text-lg font-semibold text-negroPersonalizado">Pregunta 4</p>
                <p className="text-gray-700">Aquí va la pregunta. Puedes incluir opciones de respuesta si es necesario.</p>
                </div>
                {/* Pregunta 5 */}

        </div>
        {/* Material adicional */}
        <div className="grid grid-cols-1 gap-8">
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12">
            <h5 className="text-xl font-semibold mb-4 text-negroPersonalizado">Material adicional</h5>
            <p className="text-gray-700">Aquí puedes incluir enlaces a documentos, videos o cualquier otro material que sea relevante para la evaluación.</p>
            </div>
            </div>

            {/* Botones*/}
            <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
                <Link to="/docente/editar-evaluacion">
                    <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                        Editar evaluacion
                    </button>
                </Link>
                <Link to="/docente/ver-evaluacion/calificar-respuestass">
                    <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                        Ver respuestas de alumnos
                    </button>
                </Link>
                <Link to="/docente/EliminarEvaluacion">
                    <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                        Eliminar evaluacion
                    </button>
                    </Link>
            </div>
        </div>

    );
}
export default VerEvaluacion;