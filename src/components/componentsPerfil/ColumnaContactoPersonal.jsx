import React from 'react';
import KeyValuePair from './KeyValuePair';

function ColumnaContactoPersonal({ dataContacto, dataPersonal }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <h2 className="bg-cafe2Personalizado text-white p-3 text-lg font-semibold">
                Información de Contacto
            </h2>
            <div className="p-4 space-y-3">
                {Object.entries(dataContacto).map(([key, value]) => (
                    <KeyValuePair key={key} label={key} value={value} />
                ))}
            </div>

             {dataPersonal && Object.keys(dataPersonal).length > 0 && (
                 <>
                     <div className="border-t border-gray-200 mx-4"></div>
                     <h3 className="px-4 pt-4 text-md font-semibold text-gray-700">
                         Detalles Personales
                     </h3>
                     <div className="p-4 pt-2 space-y-3">
                         {Object.entries(dataPersonal).map(([key, value]) => (
                             <KeyValuePair key={key} label={key} value={value} />
                         ))}
                     </div>
                 </>
             )}
        </div>
    );
}

export default ColumnaContactoPersonal;