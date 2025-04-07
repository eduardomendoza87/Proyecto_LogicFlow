import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/alumnos/Inicio";
import AlumnosLayout from "../layouts/AlumnosLayout";
import AcercadeNosotros from "../pages/alumnos/AcercadeNosotros";
import IniciarSesion from "../pages/alumnos/IniciarSesion";
import Registrarse from "../pages/alumnos/Registrarse";
 

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AlumnosLayout />}>
        <Route index element={<Home />} />
        <Route path="acercade" element={<AcercadeNosotros />} />
        <Route path="iniciar-sesion" element={<IniciarSesion />} />
        <Route path="registrarse" element={<Registrarse />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;