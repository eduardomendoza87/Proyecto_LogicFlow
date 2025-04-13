import React, { useState } from "react";

function FormularioPerfil() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-cafe4Personalizado w-full max-w-4xl rounded-lg shadow-lg p-10">
        <h2 className="text-3xl font-semibold mb-4 text-center">Editar Perfil</h2>
        <h5 className="text-xl font-medium mb-6 text-center">
          Modifica tu información personal y mantén tus datos actualizados.
        </h5>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Foto de perfil */}
            <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-1 text-center">
              <p className="text-2xl font-semibold mb-6">Foto de Perfil</p>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                  📷
                </div>
                <input type="file" accept="image/*" className="text-sm" />
                <p className="text-sm text-gray-500">Próximamente: cambio de imagen</p>
              </div>
            </div>

            {/* Información personal */}
            <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-2">
              <p className="text-2xl font-semibold mb-6">Información Personal</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block font-bold mb-1">Nombre completo</label>
                  <input id="nombre" type="text" required placeholder="Nombre completo"
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
                </div>

                <div>
                  <label htmlFor="matricula" className="block font-bold mb-1">Matrícula</label>
                  <input id="matricula" type="text" readOnly required placeholder="Matrícula"
                    className="bg-gray-100 cursor-not-allowed w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
                </div>

                <div>
                  <label htmlFor="fecha-nacimiento" className="block font-bold mb-1">Fecha de nacimiento</label>
                  <input id="fecha-nacimiento" type="date" required
                    className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
                </div>
              </div>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md">
            <p className="text-2xl font-semibold mb-6">Información de contacto</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block font-bold mb-1">Correo electrónico</label>
                <input id="email" type="email" required placeholder="Correo electrónico"
                  className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
              </div>

              <div>
                <label htmlFor="telefono" className="block font-bold mb-1">Teléfono</label>
                <input id="telefono" type="text" required placeholder="Teléfono"
                  className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="direccion" className="block font-bold mb-1">Dirección</label>
                <input id="direccion" type="text" required placeholder="Dirección"
                  className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
              </div>
            </div>
          </div>

          {/* Cambiar contraseña */}
          <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md">
            <p className="text-2xl font-semibold mb-6">Cambiar contraseña</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="password" className="block font-bold mb-1">Contraseña actual</label>
                <input id="password" type="password" required placeholder="Actual"
                  className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
              </div>
              <div>
                <label htmlFor="nueva-password" className="block font-bold mb-1">Nueva contraseña</label>
                <input id="nueva-password" type="password" required placeholder="Nueva"
                  className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
              </div>
              <div>
                <label htmlFor="confirmar-password" className="block font-bold mb-1">Confirmar nueva</label>
                <input id="confirmar-password" type="password" required placeholder="Confirmar"
                  className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado" />
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="text-center">
            <button type="button"
              className="bg-gray-400 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-500 active:scale-95 shadow-md transition duration-300 ease-in-out">
              Cancelar
            </button>
            <button type="submit"
              className="bg-cafe3Personalizado text-negroPersonalizado font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 active:scale-95 shadow-md transition duration-300 ease-in-out ml-4">
              Guardar cambios
            </button>
          </div>
        </form>

        {enviado && (
          <p className="text-green-700 font-medium text-center mt-6">
             Tu información se ha actualizado correctamente.
          </p>
        )}
      </div>
    </div>
  );
}

export default FormularioPerfil;
