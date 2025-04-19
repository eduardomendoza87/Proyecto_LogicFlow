import React from "react";
import { Link } from "react-router-dom";

function EditarPerfilDocente (){
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-cafe4Personalizado w-full max-w-4xl rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-semibold mb-4 text-center">Editar Perfil</h2>
            <h5 className="text-xl font-medium mb-6 text-center">
            Modifica tu información personal y académica. Recuerda mantener tus datos actualizados para una mejor comunicación institucional.
        </h5>

        <form className="space-y-6">
            {/*Grid padre*/}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/*Informacion personal y de contacto*/}
                <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-3">
                    <p className="text-2xl font-semibold mb-6">Informacion personal y contacto</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {/*Nombre completo*/}
                        <div>
                            <label htmlFor="nombre" className="block font-bold mb-1">Nombre completo:</label>
                            <input id="nombre" type="text" required placeholder="Nombre completo"
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"></input>
                        </div>
                        {/*Correo institucional*/}
                        <div>
                            <label htmlFor="email" className="block font-bold mb-1">Correo institucional</label>
                            <input id="email" type="email" required placeholder="Correo institucional"
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"></input>
                        </div>
                        {/*Id docente*/}
                        <div>
                            <label htmlFor="idDocente" className="block font-bold mb-1">Id</label>
                            <input id="idDocente" type="text" readOnly required placeholder="Id docente"
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"></input>
                        </div>
                        {/*Area*/}
                        <div>
                            <label htmlFor="area" className="block font-bold mb-1">Area</label>
                            <input id="area" type="text" required placeholder="Area"
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"></input>
                        </div>
                        {/*Especialidad */}
                        <div>
                            <label htmlFor="especialidad" className="block font-bold mb-1">Especialidad</label>
                            <input id="especialidad" type="text" required placeholder="Especialidad"
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"></input>

                        </div>
                    </div>
                </div>


                {/*Informacion academica*/}
                <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-3">
                    <p className="text-2xl font-semibold mb-6">Informacion academica</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/*Formacion academica*/}
                        <div>
                            <label htmlFor="formacion-academica" className="block font-bold mb-1">Formacion academica</label>
                            <input id="formacion-academica" type="text" required placeholder="Formacion academica"
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"></input>
                        </div>
                        {/*Certificaciones*/}
                        <div>
                            <label htmlFor="certificacion" className="block font-bold mb-1">Certificacion</label>
                            <input id="certificacion" type="text" required placeholder="Certificaciones"
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"></input>
                        </div>
                        {/*Años de experiencia*/}
                        <div>
                            <label htmlFor="años-experiencia" className="block font-bold mb-1">Años de experiencia</label>
                            <input id="años-experiencia" type="number" required placeholder="Años de experiencia"
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"></input>
                        </div>
                    </div>
                 </div>

                 {/*Documentacion*/}
                 <div className="bg-blancoPersonalizado p-6 rounded-lg shadow-md col-span-3">
                    <p className="text-2xl font-semibold mb-6">Documentacion</p>

                    <div className="grid grid-cols-1  gap-4">
                        {/*Subida CV*/}
                        <div>
                            <label  className="block font-bold mb-1" htmlFor="file_input">Subir cv</label>
                            <input id="file_input" type="file" required 
                            className="w-full border rounded py-2 px-3 shadow focus:ring-2 focus:ring-cafe3Personalizado"></input>
                        </div>
                    </div>
                    </div>


            </div>
            {/* Botones */}
          <div className="text-center">
            <Link to="/docente/perfil-docente">
            <button type="button"
              className="bg-gray-400 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-500 active:scale-95 shadow-md transition duration-300 ease-in-out">
              Cancelar
            </button>
            </Link>

            <button type="submit"
              className="bg-cafe3Personalizado text-negroPersonalizado font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 active:scale-95 shadow-md transition duration-300 ease-in-out ml-4">
              Guardar cambios
            </button>
          </div>
        </form>

            </div>

        </div>


    );
}
export default EditarPerfilDocente;