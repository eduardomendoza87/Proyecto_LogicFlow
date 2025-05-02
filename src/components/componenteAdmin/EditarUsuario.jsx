import React, { useState } from "react";
import { Link } from "react-router-dom";

function EditarUsuario() {
  const [tipoID, setTipoID] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-cafe4Personalizado w-full max-w-4xl rounded-lg shadow-lg p-10">
        <h2 className="text-3xl font-semibold mb-2 text-center">Editar usuario</h2>
        <h5 className="text-xl font-medium mb-10 text-center">
          Modifica la informacion del usuario.
        </h5>

        <form className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Datos personales */}
            <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-3 text-center">
              <p className="text-sm text-gray-500 mb-6">Datos personales</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre-usuario" className="block font-bold mb-1">Nombre completo:</label>
                  <input
                    id="nombre-usuario"
                    type="text"
                    required
                    aria-label="Nombre completo"
                    placeholder="Nombre completo"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  />
                </div>

                {/* Selector de tipo de ID */}
                <div>
                  <label htmlFor="matricula-id" className="block font-bold mb-1">Matrícula o ID:</label>
                  <select
                    id="matricula-id"
                    value={tipoID}
                    onChange={(e) => setTipoID(e.target.value)}
                    required
                    aria-label="Seleccionar tipo de identificador"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  >
                    <option value="">Selecciona un identificador</option>
                    <option value="matricula">Matrícula</option>
                    <option value="id">ID</option>
                  </select>
                </div>

                {/* Input dinámico según selección */}
                {tipoID && (
                  <div className="md:col-span-2">
                    <label htmlFor="valor-id" className="block font-bold mb-1">{tipoID === "matricula" ? "Matrícula:" : "ID:"}</label>
                    <input
                      id="valor-id"
                      type="text"
                      required
                       disabled aria-label={tipoID === "matricula" ? "Campo matrícula" : "Campo ID"}
                      placeholder={tipoID === "matricula" ? "Ejemplo: 20231234" : "Ejemplo: ID987654"}
                      className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {tipoID === "matricula"
                        ? "Ejemplo: 20231234"
                        : "Ejemplo: ID987654"}
                    </p>
                  </div>
                )}

                {/* Fecha de nacimiento */}
                <div>
                  <label htmlFor="fecha-nacimiento" className="block font-bold mb-1">Fecha de nacimiento:</label>
                  <input
                    id="fecha-nacimiento"
                    type="date"
                    required
                    aria-label="Fecha de nacimiento"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  />
                </div>

                {/* CURP */}
                <div>
                  <label htmlFor="curp" className="block font-bold mb-1">CURP:</label>
                  <input
                    id="curp"
                    type="text"
                    required
                    placeholder="Ejemplo: GOML010203HTSRRR09"
                    aria-label="CURP"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  />
                  <p className="text-sm text-gray-500 mt-1">Debe contener 18 caracteres</p>
                </div>
              </div>
            </div>

            {/* Información de contacto */}
            <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-3 text-center">
              <p className="text-sm text-gray-500 mb-6">Información de contacto</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Correo */}
                <div>
                  <label htmlFor="correo-institucional" className="block font-bold mb-1">Correo institucional:</label>
                  <input
                    id="correo-institucional"
                    type="email"
                    required
                    placeholder="correo@ucla.edu.mx"
                    aria-label="Correo institucional"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  />
                  <p className="text-sm text-gray-500 mt-1">Ejemplo: usuario@ucla.edu.mx</p>
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block font-bold mb-1">Teléfono:</label>
                  <input
                    id="telefono"
                    type="tel"
                    required
                    placeholder="10 dígitos"
                    aria-label="Teléfono"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  />
                  <p className="text-sm text-gray-500 mt-1">Ejemplo: 9931234567</p>
                </div>

                {/* Dirección */}
                <div className="md:col-span-2">
                  <label htmlFor="direccion" className="block font-bold mb-1">Dirección:</label>
                  <input
                    id="direccion"
                    type="text"
                    required
                    placeholder="Calle, número, colonia, ciudad"
                    aria-label="Dirección"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  />
                </div>
              </div>
            </div>

            {/* Rol y estado */}
            <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-3 text-center">
              <p className="text-sm text-gray-500 mb-6">Rol y estado</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Rol */}
                <div>
                  <label htmlFor="rol" className="block font-bold mb-1">Rol:</label>
                  <select
                    id="rol"
                    required
                    aria-label="Seleccionar rol"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  >
                    <option value="">Selecciona un rol</option>
                    <option value="alumno">Alumno</option>
                    <option value="docente">Docente</option>
                    <option value="admin">Administrador</option>
                  </select>
                </div>

                {/* Estado */}
                <div>
                  <label htmlFor="estado" className="block font-bold mb-1">Estado:</label>
                  <select
                    id="estado"
                    required
                    aria-label="Seleccionar estado"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"
                  >
                    <option value="">Selecciona un estado</option>
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-4 gap-4 col-span-3">
              <Link to="/admin/gestion-usuarios">
                <button type="button" className="bg-gray-400 text-white font-bold py-2 px-4 rounded shadow hover:bg-gray-500">
                  Cancelar
                </button>
              </Link>
              <button
                type="submit"
                className="bg-cafe3Personalizado text-white font-bold py-2 px-4 rounded shadow hover:bg-cafe2Personalizado"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditarUsuario;
