import React from "react";
import PerfilCabecera from "../../components/componentsPerfil/PerfilCabecera";
import PerfilContenido from "../../components/componentsPerfil/PerfilContenido";
import PerfilAcciones from "../../components/componentsPerfil/PerfilAcciones";


const perfilDataEjemplo = {
    identificacion:{
        nombre: "Juan Izquierdo Lopez",
        matricula: "20231234",
        carrera: "Ingeniería en Sistemas Computacionales",
        fotoUrl: null,
        estado: "Vigente",
        estadoVerifiacion: "verificado",  
    },
    academicoActual:{
        'Plan de Estudios': "(2023) Ingeniería en Sistemas Computacionales",
        'Modalidad': "(P) PRESENCIAL",
        'Periodo Actual o Último': "2023-2",
    },
    contacto: {
    'Correo Personal': "eduardomendoza7473@gmail.com",
    'Teléfonos': "(123) 456-7890",
    'Dirección': "Calle 5 de Febrero, Col. Centro, Villahermosa, Tabasco",
    },
    personal: {
    'Fecha de Nacimiento': "2000-05-09",
    'CURP': "IZOL040509HDFZLNA0",
    },
    historialAcademico: {
    'Escuela de Procedencia': "COBAEV",
    'Periodo de Ingreso': "2023-1",
    'Periodos Validados': "2023-1, 2023-2",
}
};

function Perfil(){
    const perfilData = perfilDataEjemplo; // Aquí puedes usar el perfilDataEjemplo o cargar datos reales
    
    if (!perfilData) {
        return <div>Cargando perfil...</div>;
    }

    return (
        <div className="container mx-auto p-4 md:p-8 bg-gary-50 min-h-screen" >
            <PerfilCabecera data={perfilData.identificacion} />
            <PerfilContenido data={perfilData} />
            <PerfilAcciones  />
        </div>
    );
}




export default Perfil;