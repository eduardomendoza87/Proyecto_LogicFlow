import React from "react";
import ColumnaAcademica from "./ColumnaAcademica";
import ColumnaContactoPersonal from "./ColumnaContactoPersonal";

function PerfilContenido({ data }) {
    const { academicoActual, historialAcademico, contacto, personal } = data;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <ColumnaAcademica
             dataActual={academicoActual} 
             dataHistorial={historialAcademico} 
             />
            <ColumnaContactoPersonal 
            dataContacto={contacto} 
            dataPersonal={personal} 
            />
        </div>
    );
}
export default PerfilContenido;


