import React from "react";
import { Link } from "react-router-dom";

function CrearEvaluacion() {
    return(

        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-cafe4Personalizado w-full max-w-4xl rounded-lg shadow-lg p-10">
        <h2 className="text-3xl font-semibold mb-4 text-center">Crear nueva evaluacion</h2>
        <h5 className="text-xl font-medium mb-6 text-center">
        Define los detalles, instrucciones y configuración de tu evaluación o actividad.        </h5>

        <form className="space-y-6" >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/*Datos generales de la evaluación*/}
                <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-3 text-center">
                    <p className="text-sm text-gray-500 mb-6">Datos generales del examen</p>

                    <div  className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/*Nombre de la evaluación*/}
                        <div>
                            <label htmlFor="nombre" className="block font-bold mb-1">Nombre de la evaluación:</label>
                            <input id="nombre" type="text" required placeholder="Nombre de la evaluación"
                                className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
                        </div>
                        {/*Descripción de la evaluación*/}
                        <div>
                            <label htmlFor="descripcion" className="block font-bold mb-1">Descripción:</label>
                            <textarea id="descripcion" required placeholder="Descripción de la evaluación"
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"/>
                        </div>
                        {/*Tipo de evaluación*/}
                        <div>
                            <label htmlFor="tipo" className="block font-bold mb-1">Tipo de evaluación:</label>
                            <select id="tipo" required
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado">
                                <option value="">Selecciona un tipo de evaluación</option>
                                <option value="examen">Examen</option>
                                <option value="actividad">Actividad</option>
                                <option value="final">Final</option>
                            </select>
                        </div>
                        {/*Curso relacionado*/}
                        <div>
                            <label htmlFor="curso" className="block font-bold mb-1">Curso relacionado:</label>
                            <select id="curso" required
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado">
                                <option value="">Selecciona un curso</option>
                                <option value="curso1">Curso 1</option>
                                <option value="curso2">Curso 2</option>
                                <option value="curso3">Curso 3</option>
                            </select>
                        </div>
                        {/*Fecha de entrega*/}
                        <div>
                            <label htmlFor="fecha" className="block font-bold mb-1">Fecha de entrega:</label>
                            <input id="fecha" type="date" required
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
                        </div>
                        {/*Duracion*/}
                        <div>
                            <label htmlFor="duracion" className="block font-bold mb-1">Duración:</label>
                            <input id="duracion" type="number" required placeholder="Duración de la evaluación"
                                className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
                        </div>
                        {/*Estado*/}
                        <div>
                            <label htmlFor="estado" className="block font-bold mb-1">Estado:</label>
                            <select id="estado" required
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado">
                                <option value="">Selecciona un estado</option>
                                <option value="activo">Activo</option>
                                <option value="inactivo">Inactivo</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/*Datos generales de la evaluación*/}
                <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-3 text-center">
                    <p className="text-sm text-gray-500 mb-6">Instrucciones al estudiante</p>

                    <div  className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {/*Instrucciones */}
                        <div>
                            <label htmlFor="instrucciones" className="block font-bold mb-1">Instrucciones:</label>
                            <textarea id="instrucciones" required placeholder="Instrucciones para el estudiante"
                                className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
                                </div>
                    </div>
                    </div>

                    {/*Agregar Preguntas*/}
                    <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-3 text-center">
                    <p className="text-sm text-gray-500 mb-6">Agregar preguntas</p>

                    <div  className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {/*Agregar preguntas */}
                        <div>
                            <label htmlFor="preguntas" className="block font-bold mb-1">Agregar preguntas:</label>
                            <textarea id="preguntas" required placeholder="Agregar preguntas"
                                className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
                                </div>
                                </div>
                    </div>

                    {/*Subir material adicional*/}
                    {/*Agregar Preguntas*/}
                    <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-3 text-center">
                    <p className="text-sm text-gray-500 mb-6">Agregar material adicional</p>

                    <div  className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {/*Pdf*/}
                        <div>
                            <label htmlFor="pdf" className="block font-bold mb-1">Subir material adicional:</label>
                            <input id="pdf" type="file" required placeholder="Subir material adicional"
                                className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
                                </div>

                                {/*Url*/}
                                <div>
                                    <label htmlFor="url" className="block font-bold mb-1">Agregar url:</label>
                                    <input id="url" type="url" required placeholder="Agregar url"
                                        className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
                                </div>
                                </div>
                                </div>

                                {/*botones*/}
                                <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4 w-full">
                                                                <button type="submit" className="bg-cafe3Personalizado text-white font-bold py-2 px-4 rounded shadow hover:bg-cafe3Personalizado focus:outline-none focus:ring-2 focus:ring-cafe2Personalizado focus:ring-opacity-50">
                                                                    Crear evaluacion
                                                                </button>
                                                                <Link to="/docente/admin-evaluaciones" >
                                                                <button type="button" className="bg-gray-400 text-white font-bold py-2 px-4 rounded shadow hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 ml-4">
                                                                    Cancelar
                                                                </button>
                                                                </Link>
                                                            </div>
                        </div>
        </form>
        </div>
        </div>
    );
}
export default CrearEvaluacion;