import React from "react";
import { Link } from "react-router-dom";

function CrearCurso() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-cafe4Personalizado w-full max-w-4xl rounded-lg shadow-lg p-10">
        <h2 className="text-3xl font-semibold mb-4 text-center">Crear nuevo curso</h2>
        <h5 className="text-xl font-medium mb-6 text-center">
          Registra un nuevo curso académico y organiza sus parámetros clave desde la administración.
        </h5>

        <form className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Información básica */}
            <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-3 text-center">
              <p className="text-sm text-gray-500 mb-6">Información básica del curso</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block font-bold mb-1">Nombre del curso:</label>
                  <input id="nombre" type="text" required placeholder="Nombre del curso"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
                </div>

                <div>
                  <label htmlFor="descripcion" className="block font-bold mb-1">Descripción:</label>
                  <textarea id="descripcion" required placeholder="Descripción del curso"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"></textarea>
                </div>

                <div>
                  <label htmlFor="semestre" className="block font-bold mb-1">Semestre dirigido:</label>
                  <select id="semestre" required
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado">
                    <option value="">Selecciona un semestre</option>
                    <option value="1">1er Semestre</option>
                    <option value="2">2do Semestre</option>
                    <option value="3">3er Semestre</option>
                    <option value="4">4to Semestre</option>
                    <option value="5">5to Semestre</option>
                    <option value="6">6to Semestre</option>
                    <option value="7">7mo Semestre</option>
                    <option value="8">8vo Semestre</option>
                    <option value="9">9no Semestre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="duracion" className="block font-bold mb-1">Duración:</label>
                  <input id="duracion" type="text" required placeholder="Duración del curso"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
                </div>

                <div>
                  <label htmlFor="modalidad" className="block font-bold mb-1">Modalidad:</label>
                  <select id="modalidad" required
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado">
                    <option value="">Selecciona una modalidad</option>
                    <option value="presencial">Presencial</option>
                    <option value="virtual">Virtual</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="estado" className="block font-bold mb-1">Estado:</label>
                  <select id="estado" required
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado">
                    <option value="">Selecciona un estado</option>
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="docente" className="block font-bold mb-1">Asignar docente:</label>
                  <select id="docente" required
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado">
                    <option value="">Selecciona un docente</option>
                    <option value="juan">Juan Pérez</option>
                    <option value="laura">Laura Ramírez</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-10 border-t border-gray-300" />

          {/* Configuración de la clase */}
          <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md text-center">
            <p className="text-sm text-gray-500 mb-6">Configuración de la clase</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cantidad" className="block font-bold mb-1">Cantidad máxima de alumnos:</label>
                <input id="cantidad" type="number" required placeholder="Cantidad máxima"
                  className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
              </div>

              <div>
                <label htmlFor="horario" className="block font-bold mb-1">Horario:</label>
                <input id="horario" type="text" required placeholder="Ej: Lun y Mié - 10:00 AM"
                  className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
              </div>

              <div>
                <label htmlFor="fechainicio" className="block font-bold mb-1">Fecha inicio:</label>
                <input id="fechainicio" type="date" required
                  className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
              </div>

              <div>
                <label htmlFor="fechafin" className="block font-bold mb-1">Fecha fin:</label>
                <input id="fechafin" type="date" required
                  className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
              </div>

              <div>
                <label htmlFor="area" className="block font-bold mb-1">Área:</label>
                <select id="area" required
                  className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado">
                  <option value="">Selecciona un área</option>
                  <option value="matematicas">Matemáticas</option>
                  <option value="ciencias">Ciencias</option>
                  <option value="humanidades">Humanidades</option>
                  <option value="tecnologia">Tecnología</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="my-10 border-t border-gray-300" />

          {/* Carga de materiales */}
          <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md text-center">
            <p className="text-sm text-gray-500 mb-6">Carga de materiales</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="pdf" className="block font-bold mb-1">PDF:</label>
                <input id="pdf" type="file" required
                  className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
              </div>
              <div>
                <label htmlFor="video" className="block font-bold mb-1">Video (URL):</label>
                <input id="video" type="url" required placeholder="https://..."
                  className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-2 md:space-y-0 md:space-x-4 w-full">
            <button type="submit" className="bg-cafe3Personalizado text-white font-bold py-2 px-4 rounded shadow hover:bg-opacity-80">
              Crear curso
            </button>
            <Link to="/admin/gestion-cursos">
              <button type="button" className="bg-gray-400 text-white font-bold py-2 px-4 rounded shadow hover:bg-gray-500">
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CrearCurso;
