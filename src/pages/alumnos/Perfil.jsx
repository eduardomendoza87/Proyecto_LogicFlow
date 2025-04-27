import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PerfilCabecera from "../../components/componentsPerfil/PerfilCabecera";
import PerfilContenido from "../../components/componentsPerfil/PerfilContenido";
import PerfilAcciones from "../../components/componentsPerfil/PerfilAcciones";

function Perfil() {
  const [perfilData, setPerfilData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

    if (usuarioGuardado && usuarioGuardado.perfil) {
      setPerfilData(usuarioGuardado.perfil);
    } else {
      navigate("/iniciar-sesion");
    }
  }, [navigate]);

  if (!perfilData) {
    return <div className="text-center p-10 text-lg font-bold text-gray-700">Cargando perfil...</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-8 bg-gary-50 min-h-screen">
      <PerfilCabecera data={perfilData.identificacion} />
      <PerfilContenido data={perfilData} />
      <PerfilAcciones />
    </div>
  );
}

export default Perfil;
