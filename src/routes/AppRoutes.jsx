import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/alumnos/Inicio";
import AlumnosLayout from "../layouts/AlumnosLayout";
import AcercadeNosotros from "../pages/alumnos/AcercadeNosotros";
import IniciarSesion from "../pages/alumnos/IniciarSesion";
import Registrarse from "../pages/alumnos/Registrarse";
import Perfil from "../pages/alumnos/Perfil";
import Soporte from "../pages/alumnos/Soporte";
 

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AlumnosLayout />}>
        <Route index element={<Home />} />
        <Route path="/acerca-de-nosotros" element={<AcercadeNosotros />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/soporte" element={<Soporte />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;