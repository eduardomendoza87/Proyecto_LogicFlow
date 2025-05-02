import React, { useState } from "react";
import { Link } from "react-router-dom";

function GestionUsuarios() {
  const [mostrarModalEstado, setMostrarModalEstado] = useState(false);
  const [mostrarModalEliminar, setMostrarModalEliminar] = useState(false);

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/* Título principal */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-negroPersonalizado">
        Gestión de usuarios
      </h1>

      {/* Resumen superior */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-center">
        <p className="text-lg text-negroPersonalizado">
          Gestiona los usuarios de la plataforma.
        </p>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-col md:flex-row gap-6 flex-wrap mb-16">
        <input
          type="text"
          placeholder="Buscar"
          className="shadow border rounded py-2 px-3 w-full md:flex-1 text-negroPersonalizado focus:ring-2 focus:ring-cafe1Personalizado"
        />
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Tipo de usuario</option>
          <option>Alumno</option>
          <option>Docente</option>
          <option>Administrador</option>
        </select>
        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Estado</option>
          <option>Activo</option>
          <option>Inactivo</option>
        </select>
        <Link to="/admin/agregar-usuario" className="w-full md:w-auto">
          <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
            Agregar usuario
          </button>
        </Link>
      </div>

      {/* Tabla de seguimiento */}
      <div className="max-h-[600px] overflow-y-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-negroPersonalizado border border-gray-300">
          <thead className="bg-cafe3Personalizado text-white">
            <tr>
              <th className="px-6 py-3">Nombre completo</th>
              <th className="px-6 py-3">Matrícula/ID</th>
              <th className="px-6 py-3">Correo</th>
              <th className="px-6 py-3">Rol</th>
              <th className="px-6 py-3">Estado</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td>Eduardo Mendoza Izquierdo</td>
              <td>65882811</td>
              <td>ejemplo@ucla.com</td>
              <td>admin</td>
              <td>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Activo
                </span>
              </td>
              <td className="flex flex-wrap gap-2">
                <Link to="/admin/editar-usuario">
                  <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                    Editar
                  </button>
                </Link>
                <Link to="/admin/ver-detalles-usuarios">
                  <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                    Ver detalles
                  </button>
                </Link>
                <button
                  onClick={() => setMostrarModalEstado(true)}
                  className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80"
                >
                  Cambiar estado
                </button>
                <button
                  onClick={() => setMostrarModalEliminar(true)}
                  className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal Cambiar Estado */}
      {mostrarModalEstado && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-center text-negroPersonalizado">Cambiar estado</h2>
            <p className="text-negroPersonalizado text-center mb-6">
              ¿Deseas cambiar el estado de <strong>Eduardo Mendoza Izquierdo</strong>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setMostrarModalEstado(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancelar
              </button>
              <button
                onClick={() => setMostrarModalEstado(false)}
                className="bg-cafe3Personalizado text-negroPersonalizado px-4 py-2 rounded hover:bg-opacity-80"
              >
                Confirmar cambio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Eliminar Usuario */}
      {mostrarModalEliminar && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-center text-negroPersonalizado">Eliminar usuario</h2>
            <p className="text-negroPersonalizado text-center mb-6">
              Esta acción es irreversible. ¿Deseas eliminar al usuario <strong>Eduardo Mendoza Izquierdo</strong>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setMostrarModalEliminar(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancelar
              </button>
              <button
                onClick={() => setMostrarModalEliminar(false)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Eliminar usuario
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GestionUsuarios;
