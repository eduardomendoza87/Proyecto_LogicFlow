import React from "react";
import { Link } from "react-router-dom";

function InicioAdmin() {
  return (
    <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-screen">
      {/* Título principal */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-12 text-negroPersonalizado">
        Bienvenido administrador
      </h1>

      {/* Introducción */}
      <div className="grid grid-cols-1 gap-8 mb-24">
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center">
          <p className="text-xl font-semibold mb-6 text-negroPersonalizado">
            Nos complace darles la bienvenida a este espacio digital, creado para facilitar la colaboración, el intercambio de recursos y la comunicación dentro de nuestra prestigiosa institución.
          </p>
          <p className="text-lg text-negroPersonalizado">
            ¡Exploren las funcionalidades, compartan sus conocimientos y contribuyan a fortalecer la comunidad académica de UCLA!
          </p>
        </div>
      </div>

      {/* Secciones en grid responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Tarjeta 1 */}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center">
          <p className="text-xl font-semibold mb-4 text-negroPersonalizado">Total de usuarios registrados</p>
          <Link to="/admin/gestion-usuarios">
            <button className="bg-cafe3Personalizado text-negroPersonalizado px-4 py-2 rounded hover:bg-opacity-80 shadow">
              Ver usuarios
            </button>
          </Link>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center">
          <p className="text-xl font-semibold mb-4 text-negroPersonalizado">Total de cursos activos</p>
          <Link to="/admin/gestion-cursos">
            <button className="bg-cafe3Personalizado text-negroPersonalizado px-4 py-2 rounded hover:bg-opacity-80 shadow">
              Ver cursos
            </button>
          </Link>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center">
          <p className="text-xl font-semibold mb-4 text-negroPersonalizado">Total de evaluaciones creadas</p>
          <Link to="/admin/gestion-evaluaciones">
            <button className="bg-cafe3Personalizado text-negroPersonalizado px-4 py-2 rounded hover:bg-opacity-80 shadow">
              Ver evaluaciones
            </button>
          </Link>
        </div>

        {/* Tarjeta 4 */}
        <div className="bg-blancoPersonalizado shadow p-6 rounded-lg text-center">
          <p className="text-xl font-semibold mb-4 text-negroPersonalizado">Nuevas solicitudes de inscripción</p>
          <Link to="/admin/solicitudes">
            <button className="bg-cafe3Personalizado text-negroPersonalizado px-4 py-2 rounded hover:bg-opacity-80 shadow">
              Ver solicitudes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InicioAdmin;
