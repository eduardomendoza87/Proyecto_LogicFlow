import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function VerDetallesUsuarios() {
  const [modalEstado, setModalEstado] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Información principal */}
        <div className="bg-blancoPersonalizado col-span-2 rounded-lg shadow p-6 mb-12">
          <div className="flex flex-col items-center">
            <FaUserCircle size={80} className="text-gray-400 mb-4" />
            <h3 className="text-2xl font-bold text-center text-negroPersonalizado mb-4">Juan Pérez</h3>

            <p><strong>Matrícula o ID:</strong> 20231234</p>
            <p className="mt-2">
              <strong>Rol:</strong>{" "}
              <span className="ml-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Docente</span>
            </p>
            <p className="mt-2">
              <strong>Estado:</strong>{" "}
              <span className="ml-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Activo</span>
            </p>

            <Link to="/admin/gestion-usuarios">
              <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md mt-6" aria-label="Regresar a la gestión de usuarios">
                Regresar
              </button>
            </Link>
          </div>
        </div>

        {/* Información personal */}
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-center">Información personal</h2>
          <p><strong>Fecha de nacimiento:</strong> 2000-08-12</p>
          <p><strong>CURP:</strong> PERE800812HDFRNL09</p>
        </div>

        {/* Contacto */}
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-center">Contacto</h2>
          <p><strong>Correo institucional:</strong> juan.perez@ucla.edu.mx</p>
          <p><strong>Teléfono:</strong> (123) 456 7890</p>
          <p><strong>Dirección:</strong> Calle Falsa 123, Tabasco</p>
        </div>

        {/* Rol y estado */}
        <div className="bg-blancoPersonalizado col-span-2 rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-center">Rol y estado</h2>
          <p><strong>Rol asignado:</strong> Docente</p>
          <p><strong>Estado actual:</strong> Activo</p>
          <p><strong>Fecha de registro:</strong> 2024-10-01</p>
        </div>
      </div>

      {/* Botones */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4 w-full">
        <Link to="/admin/editar-usuario">
          <button className="bg-cafe3Personalizado text-black font-bold py-2 px-4 rounded shadow hover:bg-opacity-80" aria-label="Editar usuario">
            Editar usuario
          </button>
        </Link>
        <button
          onClick={() => setModalEstado(true)}
          className="bg-cafe3Personalizado text-black font-bold py-2 px-4 rounded shadow hover:bg-opacity-80"
          aria-label="Cambiar estado del usuario"
        >
          Cambiar estado
        </button>
        <button
          onClick={() => setModalEliminar(true)}
          className="bg-cafe3Personalizado text-black font-bold py-2 px-4 rounded shadow hover:bg-opacity-80"
          aria-label="Eliminar usuario"
        >
          Eliminar usuario
        </button>
        <Link to="/admin/gestion-usuarios">
          <button className="bg-gray-400 text-white font-bold py-2 px-4 rounded shadow hover:bg-gray-500" aria-label="Regresar">
            Regresar
          </button>
        </Link>
      </div>

      {/* Modal - Cambiar estado */}
      {modalEstado && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-center text-negroPersonalizado">Cambiar estado</h2>
            <p className="text-negroPersonalizado text-center mb-6">
              ¿Deseas cambiar el estado de <strong>Juan Pérez</strong>?
            </p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setModalEstado(false)} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
                Cancelar
              </button>
              <button onClick={() => setModalEstado(false)} className="bg-cafe3Personalizado text-negroPersonalizado px-4 py-2 rounded hover:bg-opacity-80">
                Confirmar cambio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal - Eliminar usuario */}
      {modalEliminar && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-center text-negroPersonalizado">Eliminar usuario</h2>
            <p className="text-negroPersonalizado text-center mb-6">
              Esta acción es irreversible. ¿Deseas eliminar al usuario <strong>Juan Pérez</strong>?
            </p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setModalEliminar(false)} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
                Cancelar
              </button>
              <button onClick={() => setModalEliminar(false)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Eliminar usuario
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerDetallesUsuarios;
