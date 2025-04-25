import React, { useState } from "react";
import { Link } from "react-router-dom";

function EditarClase() {
  const [tipoMaterial, setTipoMaterial] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-cafe4Personalizado w-full max-w-4xl rounded-lg shadow-lg p-10">
        {/* Encabezado */}
        <h2 className="text-3xl font-semibold mb-4 text-center">Editar clase</h2>
        <h5 className="text-xl font-medium mb-6 text-center">
          Modifica los detalles de la clase correspondiente al módulo seleccionado.
        </h5>

        <form className="space-y-6" autoComplete="off">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-3">
              <p className="text-2xl font-semibold mb-6">Información general</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nombre de la clase */}
                <div>
                  <label htmlFor="nombre_clase" className="block font-bold mb-1">
                    Nombre de la clase <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="nombre_clase"
                    type="text"
                    required
                    placeholder="Nombre de la clase"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  />
                </div>

                {/* Descripción */}
                <div>
                  <label htmlFor="descripcion" className="block font-bold mb-1">
                    Descripción de la clase <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="descripcion"
                    required
                    placeholder="Descripción"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  ></textarea>
                </div>

                {/* Fecha */}
                <div>
                  <label htmlFor="fecha_clase" className="block font-bold mb-1">
                    Fecha de la clase <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fecha_clase"
                    type="date"
                    required
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  />
                </div>

                {/* Duración */}
                <div>
                  <label htmlFor="duracion_clase" className="block font-bold mb-1">
                    Duración estimada (min) <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="duracion_clase"
                    type="number"
                    required
                    min="1"
                    max="600"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  />
                </div>

                {/* Módulo relacionado */}
                <div>
                  <label htmlFor="modulo_relacionado" className="block font-bold mb-1">
                    Módulo relacionado <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="modulo_relacionado"
                    required
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  >
                    <option value="">Selecciona un módulo</option>
                    <option value="modulo1">Módulo 1</option>
                    <option value="modulo2">Módulo 2</option>
                  </select>
                </div>

                {/* Estado */}
                <div>
                  <label htmlFor="estado_clase" className="block font-bold mb-1">
                    Estado de la clase <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="estado_clase"
                    required
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  >
                    <option value="">Selecciona un estado</option>
                    <option value="publicado">Publicado</option>
                    <option value="borrador">Borrador</option>
                  </select>
                </div>

                {/* Tipo de material */}
                <div>
                  <label htmlFor="tipo_material" className="block font-bold mb-1">
                    Tipo de material adicional <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="tipo_material"
                    required
                    value={tipoMaterial}
                    onChange={(e) => setTipoMaterial(e.target.value)}
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  >
                    <option value="">Selecciona un tipo</option>
                    <option value="pdf">PDF</option>
                    <option value="video">Video</option>
                    <option value="link">Link</option>
                  </select>
                </div>

                {/* URL */}
                {tipoMaterial === "link" && (
                  <div>
                    <label htmlFor="url" className="block font-bold mb-1">
                      Agregar URL <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="url"
                      type="url"
                      required
                      placeholder="https://ejemplo.com"
                      className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                    />
                  </div>
                )}

                {/* Archivo */}
                {(tipoMaterial === "pdf" || tipoMaterial === "video") && (
                  <div>
                    <label htmlFor="archivo" className="block font-bold mb-1">
                      Subir archivo <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="archivo"
                      type="file"
                      required
                      accept={tipoMaterial === "pdf" ? ".pdf" : "video/*"}
                      className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                    />
                  </div>
                )}
              </div>

              {/* Botones */}
              <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-2 md:space-y-0 md:space-x-4 w-full col-span-3">
                <button
                  type="submit"
                  className="bg-cafe3Personalizado text-white font-bold py-2 px-4 rounded shadow hover:bg-cafe3Personalizado focus:outline-none focus:ring-2 focus:ring-cafe2Personalizado focus:ring-opacity-50"
                >
                  Guardar cambios
                </button>
                <Link to="/docente/ver-clases">
                  <button
                    type="button"
                    className="bg-gray-400 text-white font-bold py-2 px-4 rounded shadow hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                  >
                    Cancelar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditarClase;
