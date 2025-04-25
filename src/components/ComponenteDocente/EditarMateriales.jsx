
import { Link } from "react-router-dom";
import React, { useState } from "react";

function EditarMateriales (){
   const [tipoMaterial, setTipoMaterial] = useState("");
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-cafe4Personalizado w-full max-w-4xl rounded-lg shadow-lg p-10">
        <h2 className="text-3xl font-semibold mb-4 text-center">Editar material</h2>
        <h5 className="text-xl font-medium mb-6 text-center">
        Modifica los detalles del material educativo seleccionado
     </h5>

         <form className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/*Formulario de subida*/}
                    <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-3">
                      <p className="text-2xl font-semibold mb-6">Información de subida de archivo</p>
        
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Título */}
                        <div>
                          <label htmlFor="titulo" className="block font-bold mb-1">Título del material</label>
                          <input
                            id="titulo"
                            type="text"
                            required
                            placeholder="Título del material"
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                          />
                        </div>
        
                        {/* Tipo de material */}
                        <div>
                          <label htmlFor="tipo_material" className="block font-bold mb-1">Tipo de material</label>
                          <select
                            id="tipo_material"
                            required
                            value={tipoMaterial}
                            onChange={(e) => setTipoMaterial(e.target.value)}
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                          >
                            <option value="">Selecciona un tipo de material</option>
                            <option value="pdf">PDF</option>
                            <option value="video">Video</option>
                            <option value="link">Link</option>
                          </select>
                        </div>
        
                        {/* Modalidad */}
                        <div>
                          <label htmlFor="modalidad" className="block font-bold mb-1">Modalidad</label>
                          <select
                            id="modalidad"
                            required
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                          >
                            <option value="">Selecciona una modalidad</option>
                            <option value="presencial">Presencial</option>
                            <option value="virtual">Virtual</option>
                          </select>
                        </div>
        
                        {/* Condicional: URL */}
                        {tipoMaterial === "link" && (
                          <div>
                            <label htmlFor="url" className="block font-bold mb-1">Agregar URL</label>
                            <input
                              id="url"
                              type="url"
                              required
                              placeholder="https://ejemplo.com"
                              className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                            />
                          </div>
                        )}
        
                        {/* Condicional: archivo */}
                        {(tipoMaterial === "pdf" || tipoMaterial === "video") && (
                          <div>
                            <label htmlFor="archivo" className="block font-bold mb-1">Subir archivo</label>
                            <input
                              id="archivo"
                              type="file"
                              required
                              accept={tipoMaterial === "pdf" ? ".pdf" : "video/*"}
                              className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                            />
                          </div>
                        )}
        
                        {/* Fecha de subida */}
                        <div>
                          <label htmlFor="fecha_subida" className="block font-bold mb-1">Fecha de subida</label>
                          <input
                            id="fecha_subida"
                            type="date"
                            required
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                          />
                        </div>
                      </div>
                    </div>
        
                    {/* Botones */}
                    <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4 w-full col-span-3">
                      <button
                        type="submit"
                        className="bg-cafe3Personalizado text-white font-bold py-2 px-4 rounded shadow hover:bg-cafe3Personalizado focus:outline-none focus:ring-2 focus:ring-cafe2Personalizado focus:ring-opacity-50"
                      >
                        Subir material
                      </button>
                      <Link to="/docente/materiales-curso">
                        <button
                          type="button"
                          className="bg-gray-400 text-white font-bold py-2 px-4 rounded shadow hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                        >
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
export default EditarMateriales;