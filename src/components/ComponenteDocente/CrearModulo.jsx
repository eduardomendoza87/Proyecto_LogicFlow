import React, { useState } from "react";
import { Link } from "react-router-dom";

function CrearModulo() {
  const [tipoMaterial, setTipoMaterial] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para guardar el módulo
    alert("✅ Módulo guardado con éxito.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-cafe4Personalizado w-full max-w-4xl rounded-lg shadow-lg p-10">
        <h2 className="text-3xl font-semibold mb-4 text-center">Crear nuevo módulo</h2>
        <h5 className="text-xl font-medium mb-6 text-center">
          Define las secciones de tu curso para organizar mejor las clases y contenidos.
        </h5>

        <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-3">
              <p className="text-2xl font-semibold mb-6">Información general del módulo</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nombre del módulo */}
                <div>
                  <label htmlFor="nombre_modulo" className="block font-bold mb-1">
                    Nombre del módulo <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="nombre_modulo"
                    type="text"
                    required
                    placeholder="Nombre del módulo"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  />
                </div>

                {/* Descripción */}
                <div>
                  <label htmlFor="descripcion" className="block font-bold mb-1">
                    Descripción del módulo <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="descripcion"
                    required
                    placeholder="Descripción"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  ></textarea>
                </div>

                {/* Fecha de inicio */}
                <div>
                  <label htmlFor="fecha_inicio" className="block font-bold mb-1">
                    Fecha de inicio <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fecha_inicio"
                    type="date"
                    required
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  />
                </div>

                {/* Curso relacionado */}
                <div>
                  <label htmlFor="curso_relacionado" className="block font-bold mb-1">
                    Curso relacionado <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="curso_relacionado"
                    required
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  >
                    <option value="">Selecciona un curso</option>
                    <option value="curso1">Curso 1</option>
                    <option value="curso2">Curso 2</option>
                  </select>
                </div>

                {/* Estado del módulo */}
                <div>
                  <label htmlFor="estado_modulo" className="block font-bold mb-1">
                    Estado del módulo <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="estado_modulo"
                    required
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  >
                    <option value="">Selecciona un estado</option>
                    <option value="publicado">Publicado</option>
                    <option value="borrador">Borrador</option>
                  </select>
                </div>

                {/* Tipo de material adicional */}
                <div>
                  <label htmlFor="tipo_material" className="block font-bold mb-1">
                    Material adicional <span className="text-red-600">*</span>
                  </label>
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

                {/* Campo condicional URL */}
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

                {/* Campo condicional archivo */}
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
                  Guardar módulo
                </button>
                <Link to="/docente/modulos-y-clases">
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
export default CrearModulo;
