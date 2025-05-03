import React from "react";
import { Link } from "react-router-dom";

function DetallesCursoAdmin() {
  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/* Información del Curso */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Detalles del curso</h2>
        <p><strong>Nombre del curso:</strong> Matemáticas Avanzadas</p>
        <p><strong>Docente:</strong> Juan Pérez</p>
        <p><strong>Modalidad:</strong> Virtual</p>
        <p><strong>Semestre dirigido:</strong> 6º semestre</p>
        <p><strong>Inscritos:</strong> 28 alumnos</p>
        <p><strong>Estado:</strong> Activo</p>
        <p><strong>Duración:</strong> 60 minutos</p>
        <p><strong>Horario:</strong> Lunes y miércoles, 10:00 - 11:30 AM</p>
        <p><strong>Área:</strong> Ciencias</p>
      </div>

      {/* Acciones */}
      <div className="flex justify-center space-x-4">
        <Link to="/admin/reportes-estadisticas">
          <button className="bg-gray-400 text-white font-bold py-2 px-4 rounded shadow hover:bg-gray-500">
            Regresar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DetallesCursoAdmin;
