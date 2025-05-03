import React, { useState } from "react";
import { Link } from "react-router-dom";

function VerDetallesSolicitud() {
  const [modalAprobar, setModalAprobar] = useState(false);
  const [modalRechazar, setModalRechazar] = useState(false);

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Información del alumno */}
        <div className="bg-blancoPersonalizado col-span-2 rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-center">Información del alumno</h2>
          <h3 className="text-2xl font-bold text-center mb-4">Juan Pérez</h3>
          <p><strong>Matrícula:</strong> 20231020</p>
          <p><strong>Correo institucional:</strong> juan.perez@ucla.edu.mx</p>
          <p><strong>Teléfono:</strong> (123) 456 7890</p>
          <p><strong>CURP:</strong> PEJU000101HDFRRN02</p>
        </div>

        {/* Información del curso solicitado */}
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-center">Información del curso solicitado</h2>
          <p><strong>Nombre del curso:</strong> Álgebra Lineal</p>
          <p><strong>Docente asignado:</strong> Jorge Sánchez</p>
          <p><strong>Modalidad:</strong> Virtual</p>
          <p><strong>Horario:</strong> Lunes y Miércoles 10:00 AM</p>
          <p><strong>Área:</strong> Matemáticas</p>
          <p><strong>Semestre dirigido:</strong> 2do Semestre</p>
        </div>

        {/* Detalles de la solicitud */}
        <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-center">Detalles de la solicitud</h2>
          <p><strong>Fecha de solicitud:</strong> 2025-05-01</p>
          <p>
            <strong>Estado actual de la solicitud:</strong>{" "}
            <span className="ml-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              Pendiente
            </span>
          </p>
          <p>
            <strong>Archivos adjuntos:</strong>{" "}
            <a href="#" target="_blank" className="text-blue-600 underline ml-2">
              Descargar archivo
            </a>
          </p>
        </div>
      </div>

      {/* Botones */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4 w-full">
        <Link to="/admin/solicitudes-inscripcion">
          <button className="bg-cafe3Personalizado text-black font-bold py-2 px-4 rounded shadow hover:bg-opacity-80" aria-label="Regresar">
            Regresar
          </button>
        </Link>
        <button
          onClick={() => setModalAprobar(true)}
          className="bg-green-600 text-white font-bold py-2 px-4 rounded shadow hover:bg-green-700"
          aria-label="Aprobar solicitud"
        >
          Aprobar
        </button>
        <button
          onClick={() => setModalRechazar(true)}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded shadow hover:bg-red-700"
          aria-label="Rechazar solicitud"
        >
          Rechazar
        </button>
      </div>

      {/* MODAL: Aprobar */}
      {modalAprobar && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4 text-center">¿Aprobar solicitud?</h3>
            <p className="text-center text-gray-600 mb-6">¿Estás seguro de que deseas aprobar esta solicitud?</p>
            <div className="flex justify-end gap-4">
              <button onClick={() => setModalAprobar(false)} className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Confirmar</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Rechazar */}
      {modalRechazar && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4 text-center text-red-600">¿Rechazar solicitud?</h3>
            <p className="text-center text-gray-600 mb-6">Esta acción no se puede deshacer. ¿Confirmas el rechazo?</p>
            <div className="flex justify-end gap-4">
              <button onClick={() => setModalRechazar(false)} className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded">Rechazar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerDetallesSolicitud;
