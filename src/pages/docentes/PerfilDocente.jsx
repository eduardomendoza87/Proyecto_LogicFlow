import React from "react";
import { Link } from "react-router-dom";

function PerfilDocente(){
    return (
        //Contenedor Principal
        <div className="bg-cafe4Personalizado container mx-auto p-8 min-h-scree">
            {/*Titulo principal*/}
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-negroPersonalizado">Mi perfil docente</h2>
            
            {/*Texto introductorio*/}
            <div className="bg-blancoPersonalizado rounded-lg shadow p-6 mb-12 text-center">
                <p className="text-lg text-negroPersonalizado">
                Gestiona tu información personal, contacto y credenciales docentes.
                </p>
            </div>

            {/*Cards*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

                {/*Card Información personal*/}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="bg-cafe2Personalizado text-white p-3 text-lg font-semibold">
                Información de Contacto
            </h2>
            <div className="p-4 space-y-3">
                <div className="overflow-hidden">
                    <p><strong>Nombre completo:</strong>Juan Lopez</p>
                    <p><strong>Correo institucional:</strong>example@hotmail</p>
                    <p><strong>ID </strong>566848</p>
                    <p><strong>Area:</strong></p>
                    <p><strong>Especialidad:</strong></p>
                </div>
            </div>
            </div>

            {/*Card Información personal*/}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="bg-cafe2Personalizado text-white p-3 text-lg font-semibold">
                Información Academica
            </h2>
            <div className="p-4 space-y-3">
                <div className="overflow-hidden">
                    <p><strong>Formacion academica:</strong>Juan Lopez</p>
                    <p><strong>Certificaciones:</strong>example@hotmail</p>
                    <p><strong>Años de experiencia: </strong>566848</p>
                    <p><strong>CV adjunto:</strong></p>
                </div>
            </div>
            </div>

            </div>
            {/*Boton de editar perfil*/}
            <div className="mt-8 justify-center flex flex-col sm:flex-row gap-4">
            <Link to="/docente/editar-perfil-docente">
                <button className="bg-cafe2Personalizado hover:bg-opacity-80 text-black px-6 py-2 rounded-lg shadow">
                    Editar perfil
                </button>
            </Link>
        </div>


        </div>



    );
}
export default PerfilDocente;