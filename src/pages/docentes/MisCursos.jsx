import React, { useState } from "react";
import { Link } from "react-router-dom";

function MisCursos() {
  const [showModal, setShowModal] = useState(false);

  const handleEliminarCurso = () => {
    // Aquí puedes agregar la lógica real para eliminar curso
    setShowModal(false);
    alert("Curso eliminado correctamente.");
  };

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/* Título principal */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-negroPersonalizado">
        Mis Cursos
      </h1>

      {/* Resumen superior */}
      <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-center">
        <p className="text-lg text-negroPersonalizado">
          Administra fácilmente tus cursos asignados: accede a materiales, gestiona alumnos,
          crea evaluaciones y más.
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
          <option>Semestre</option>
          <option>1er Semestre</option>
          <option>2do Semestre</option>
          <option>3er Semestre</option>
        </select>

        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Modalidad</option>
          <option>Presencial</option>
          <option>Virtual</option>
        </select>

        <select className="border rounded p-2 w-full md:w-1/4">
          <option>Estado del curso</option>
          <option>Activo</option>
          <option>Finalizado</option>
        </select>

        <Link to="/docente/crear-curso" className="w-full md:w-auto">
          <button className="bg-cafe3Personalizado text-negroPersonalizado font-bold px-4 py-2 rounded-lg hover:bg-opacity-80 shadow-md w-full md:w-auto">
            Crear curso
          </button>
        </Link>
      </div>

      {/* Lista de cursos */}
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-blancoPersonalizado p-6 rounded-lg shadow">
          <h4 className="text-xl font-semibold mb-4 text-negroPersonalizado">Curso: Desarrollo Web</h4>
          <div className="space-y-2 text-negroPersonalizado">
            <p>📅 Semestre: 5to</p>
            <p>🧑‍🏫 Modalidad: Virtual</p>
            <p>👥 Alumnos inscritos: 30</p>
            <p>📅 Fecha de creación: 2024-08-01</p>
            <p>📌 Estado: Activo</p>
          </div>

          {/* Botones de acción con scroll en pantallas pequeñas */}
          <div className="flex flex-wrap justify-center mt-6 gap-3 overflow-x-auto">
            <Link to="/Materiales">
              <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                Materiales
              </button>
            </Link>
            <Link to="/Modulosyclases">
              <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                Módulos y clases
              </button>
            </Link>
            <Link to="/Evaluaciones">
              <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                Evaluaciones
              </button>
            </Link>
            <Link to="/Estudiantes">
              <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                Estudiantes
              </button>
            </Link>
            <Link to="/EditarCurso">
              <button className="bg-cafe3Personalizado px-4 py-2 rounded-lg shadow hover:bg-opacity-80">
                Editar curso
              </button>
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
            >
              Eliminar curso
            </button>
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">¿Eliminar curso?</h2>
            <p className="mb-6">Esta acción no se puede deshacer. ¿Estás seguro?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleEliminarCurso}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MisCursos;
