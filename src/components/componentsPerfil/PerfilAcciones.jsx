import React from "react";
import { Link } from "react-router-dom";

function PerfilAcciones() {
    return (
        <div className="mt-8 justify-center flex flex-col sm:flex-row gap-4">
            <Link to="/editarperfil">
                <button className="bg-cafe2Personalizado hover:bg-opacity-80 text-black px-6 py-2 rounded-lg shadow">
                    Editar perfil
                </button>
            </Link>
        </div>
    );
}
export default PerfilAcciones;