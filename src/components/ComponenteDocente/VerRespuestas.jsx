import React from "react";
import { Link } from "react-router-dom";

function VerRespuestas() {
    return(
        // Contenedor principal
        <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen" >

            {/*Encabezado general*/}
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-left">
        <h4 className="text-2xl font-bold text-center text-negroPersonalizado mb-4">Respuestas del alumno </h4>
       <p className="text-negroPersonalizado"><strong>Nombre del alumno:</strong></p>
       <p className="text-negroPersonalizado"><strong>Nombre del curso:</strong> </p>
       <p className="text-negroPersonalizado"><strong>Nombre de la evaluacion:</strong> </p>
       <p className="text-negroPersonalizado"><strong>Fecha de entrega:</strong></p>
       <p className="text-negroPersonalizado"><strong>Estado de entrega:</strong></p>
         <p className="text-negroPersonalizado"><strong>Calificación:</strong></p>

      </div>

      {/*Resumen de la evaluación */}
      <div className="grid grid-cols-1 gap-8 mb-12">
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12">
            <p className="text-sm font-semibold text-negroPersonalizado">Resumen de la evaluacion:</p>
            <p className="text-sm font-semibold text-negroPersonalizado">Numero total de preguntas:</p>
            <p className="text-sm font-semibold text-negroPersonalizado">Respuestas correctas:</p>
            <p className="text-sm font-semibold text-negroPersonalizado">Respuestas incorrectas:</p>
            <p className="text-sm font-semibold text-negroPersonalizado">Tiempo de resolucion:</p>
        </div>
        </div>

        {/* Grid de preguntas y respuestas */}
        <div className="grid grid-cols-1 gap-8 mb-12">
            <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12">
                <p className="text-lg text-negroPersonalizado text-center">Pregunta 1</p>
                <p className="text-sm text-negroPersonalizado">Respuesta correcta: </p>
                <p className="text-sm text-negroPersonalizado">Respuesta del alumno: </p>
                <label className="text-sm text-negroPersonalizado">Comentario: </label>
                <textarea className="border rounded p-2 w-full h-24 text-negroPersonalizado" placeholder="Escribe tu comentario aquí..."></textarea>
                <p className="text-sm text-negroPersonalizado">Calificación: </p>
                <input type="number" className="border rounded p-2 w-full text-negroPersonalizado" placeholder="Calificación" min="0" max="10"/>
                </div>

        </div>

        {/*Botones*/}
        <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
            
                <button type="submit" className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                    Guardar calificación
                </button>
                
                <Link to="/docente/calificar-respuestas">
                <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                    Regresar
                </button>   
                </Link>

        </div>

      
      </div>
    );
}
export default VerRespuestas;