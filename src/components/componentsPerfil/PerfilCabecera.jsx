import React from 'react';

function PerfilCabecera({ data }) {
    const { nombre, matricula, carrera, fotoUrl, estado, estadoVerificacion } = data;

    const FotoPlaceholder = () => (
        <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
             <span className="text-sm">Sin Foto</span>
        </div>
    );

    const EstadoBadge = ({ estado }) => (
         <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
            estado === 'VIGENTE' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
         }`}>
            {estado}
         </span>
    );

    return (
        <div className="mb-6 md:mb-8 p-4 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <div className="flex-shrink-0 relative">
                {fotoUrl ? (
                    <img src={fotoUrl} alt={`Foto de ${nombre}`} className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-gray-200" />
                ) : (
                    <FotoPlaceholder />
                )}
            </div>
            <div className="text-center md:text-left flex-grow">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{nombre}</h1>
                <p className="text-lg text-blue-700 font-medium">{matricula}</p>
                <p className="text-md text-gray-600 mb-2">{carrera}</p>
                <EstadoBadge estado={estado} />
            </div>
        </div>
    );
}

export default PerfilCabecera;